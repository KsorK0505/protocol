// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;
pragma abicoder v2;

import "@openzeppelin/contracts-upgradeable/math/SignedSafeMathUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/math/SafeMathUpgradeable.sol";
import "./LibIntMapping.sol";

/**
  * Line describes a linear function, how the user's voice decreases from point (start, bias) with speed slope
  * BrokenLine - a curve that describes the curve of the change in the sum of votes of several users
  * This curve starts with a line (Line) and then, at any time, the slope can be changed.
  * All slope changes are stored in slopeChanges. The slope can always be reduced only, it cannot increase,
  * because users can only run out of lockup periods.
  **/

library LibBrokenLine {
    using SignedSafeMathUpgradeable for int;
    using SafeMathUpgradeable for uint;
    using LibIntMapping for mapping(uint => int);

    struct Line {
        uint start;
        uint bias;
        uint slope;
    }

    struct LineData {//all data about line
        Line line;
        uint cliff;
    }

    struct BrokenLine {
        mapping(uint => int) slopeChanges;          //change of slope applies to the next time point
        mapping(uint => int) biasChanges;           //change of bias applies to the next time point
        mapping(uint => LineData) initiatedLines;   //initiated (successfully added) Lines
        Line initial;
    }

    /**
     * @dev Add Line, save data in LineData. Run update BrokenLine, require:
     *      1. slope != 0, slope <= bias
     *      2. line not exists
     **/
    function add(BrokenLine storage brokenLine, uint id, Line memory line, uint cliff) internal {
        require(line.slope != 0, "Slope == 0, unacceptable value for slope");
        require(line.slope <= line.bias, "Slope > bias, unacceptable value for slope");
        require(brokenLine.initiatedLines[id].line.bias == 0, "Line with given id is already exist");
        brokenLine.initiatedLines[id] = LineData(line, cliff);

        update(brokenLine, line.start);
        brokenLine.initial.bias = brokenLine.initial.bias.add(line.bias);
        //save bias for history in line.start minus one
        uint256 lineStartMinusOne = line.start.sub(1);
        brokenLine.biasChanges.addToItem(lineStartMinusOne, safeInt(line.bias));
        //period is time without tail
        uint period = line.bias.div(line.slope);

        if (cliff == 0) {
            //no cliff, need to increase brokenLine.initial.slope write now
            brokenLine.initial.slope = brokenLine.initial.slope.add(line.slope);
            //no cliff, save slope in history in time minus one
            brokenLine.slopeChanges.addToItem(lineStartMinusOne, safeInt(line.slope));
        } else {
            //cliffEnd finish in lineStart minus one plus cliff
            uint cliffEnd = lineStartMinusOne.add(cliff);
            //save slope in history in cliffEnd 
            brokenLine.slopeChanges.addToItem(cliffEnd, safeInt(line.slope));
            period = period.add(cliff);
        }

        int mod = safeInt(line.bias.mod(line.slope));
        uint256 endPeriod = line.start.add(period);
        uint256 endPeriodMinus1 = endPeriod.sub(1);
        brokenLine.slopeChanges.subFromItem(endPeriodMinus1, safeInt(line.slope).sub(mod));
        brokenLine.slopeChanges.subFromItem(endPeriod, mod);
    }

    /**
     * @dev Remove Line from BrokenLine, return bias, slope, cliff. Run update BrokenLine.
     **/
    function remove_back(BrokenLine storage brokenLine, uint id, uint toTime) internal returns (uint bias, uint slope, uint cliff) {
        LineData memory lineData = brokenLine.initiatedLines[id];
        require(lineData.line.bias != 0, "Removing Line, which not exists");
        Line memory line = lineData.line;

        update(brokenLine, toTime);
        //check time Line is over
        bias = line.bias;
        slope = line.slope;
        cliff = 0;
        //for information: bias.div(slope) - this`s period while slope works
        //real time point, when line is finished
        uint finishTime = line.start.add(bias.div(slope)).add(lineData.cliff).add(1);
        if (toTime >= finishTime) {
            bias = 0;
            slope = 0;
            return (bias, slope, cliff);
        }
        uint finishTimeMinusOne = finishTime.sub(1);
        int mod = safeInt(bias.mod(slope));
        uint cliffEnd = line.start.add(lineData.cliff);
        if (toTime < cliffEnd){
            if (toTime == cliffEnd) {//cliff works
                brokenLine.initial.slope = brokenLine.initial.slope.sub(slope);
            }
            cliff = cliffEnd.sub(toTime);
            //in cliff finish time compensate change slope by oldLine.slope
            brokenLine.slopeChanges.subFromItem(cliffEnd, safeInt(slope));
            //in new Line finish point use oldLine.slope
            brokenLine.slopeChanges.addToItem(finishTimeMinusOne, safeInt(slope).sub(mod));
        } else if (toTime < finishTimeMinusOne) {//slope works
            //todo think why comment        } else if (toTime <= finishTimeMinusOne) {//slope works
            //now compensate change slope by oldLine.slope
            brokenLine.initial.slope = brokenLine.initial.slope.sub(slope);
            //in new Line finish point use oldLine.slope
            brokenLine.slopeChanges.addToItem(finishTimeMinusOne, safeInt(slope).sub(mod));
            bias = finishTimeMinusOne.sub(toTime).mul(slope).add(uint(mod));
            //save slope for history , when call function update() we update brokenLine.initial.slope to actual
            brokenLine.slopeChanges.subFromItem(toTime, safeInt(slope).sub(mod));
        } else {//tail works
            //now compensate change slope by tail
            brokenLine.initial.slope = brokenLine.initial.slope.sub(uint(mod));
            bias = uint(mod);
            slope = bias;
            //save slope for history , when call function update() we update brokenLine.initial.slope to actual
            brokenLine.slopeChanges.subFromItem(toTime, safeInt(slope));
        }
        brokenLine.slopeChanges.addToItem(finishTime, mod);
        brokenLine.initial.bias = brokenLine.initial.bias.sub(bias);
        brokenLine.initiatedLines[id].line.bias = 0;

        //save bias for history (3 possible cases (if: bias == line.bias, else if: bias is calculated from slope, else: bias == tail) )
        brokenLine.biasChanges.subFromItem(toTime, safeInt(bias));
    }

    function remove(BrokenLine storage brokenLine, uint id, uint toTime) internal returns (uint bias, uint slope, uint cliff) {
        LineData memory lineData = brokenLine.initiatedLines[id];
        require(lineData.line.bias != 0, "Removing Line, which not exists");
        Line memory line = lineData.line;

        update(brokenLine, toTime);
        //check time Line is over
        bias = line.bias;
        slope = line.slope;
        cliff = 0;
        //for information: bias.div(slope) - this`s period while slope works
        uint finishTime = line.start.add(bias.div(slope)).add(lineData.cliff);
        if (toTime > finishTime) {
            bias = 0;
            slope = 0; //todo think about it need or not
            return (bias, slope, cliff);
        }
        uint finishTimeMinusOne = finishTime.sub(1);
        int mod = safeInt(bias.mod(slope));
        uint cliffEnd = line.start.add(lineData.cliff).sub(1);
        if (toTime <= cliffEnd) {//cliff works
            cliff = cliffEnd.sub(toTime).add(1);
            //in cliff finish time compensate change slope by oldLine.slope
            brokenLine.slopeChanges.subFromItem(cliffEnd, safeInt(slope));
            //in new Line finish point use oldLine.slope
            brokenLine.slopeChanges.addToItem(finishTimeMinusOne, safeInt(slope).sub(mod));
        } else if (toTime <= finishTimeMinusOne) {//slope works
            //now compensate change slope by oldLine.slope
            brokenLine.initial.slope = brokenLine.initial.slope.sub(slope);
            //in new Line finish point use oldLine.slope
            brokenLine.slopeChanges.addToItem(finishTimeMinusOne, safeInt(slope).sub(mod));
            bias = finishTime.sub(toTime).mul(slope).add(uint(mod));
            //save slope for history
            brokenLine.slopeChanges.subFromItem(toTime.sub(1), safeInt(slope).sub(mod));
        } else {//tail works
            //now compensate change slope by tail
            brokenLine.initial.slope = brokenLine.initial.slope.sub(uint(mod));
            bias = uint(mod);
            slope = bias;
            //save slope for history
            brokenLine.slopeChanges.subFromItem(toTime.sub(1), safeInt(slope));

        }
        brokenLine.slopeChanges.addToItem(finishTime, mod);
        brokenLine.initial.bias = brokenLine.initial.bias.sub(bias);
        brokenLine.initiatedLines[id].line.bias = 0;

        brokenLine.biasChanges.subFromItem(toTime.sub(1), safeInt(bias));
    }

    /**
     * @dev Update initial Line by parameter toTime. Calculate and set all changes
     **/
    function update(BrokenLine storage brokenLine, uint toTime) internal {
        uint time = brokenLine.initial.start;
        if (time == toTime) {
            return;
        }
        uint slope = brokenLine.initial.slope;
        uint bias = brokenLine.initial.bias;
        if (bias != 0) {
            require(toTime > time, "can't update BrokenLine for past time");
            while (time < toTime) {
                bias = bias.sub(slope);

                int newSlope = safeInt(slope).add(brokenLine.slopeChanges[time]);
                require(newSlope >= 0, "slope < 0, something wrong with slope");
                slope = uint(newSlope);

                int newBias = safeInt(bias).add(brokenLine.biasChanges[time]);
                require(newBias >= 0, "bias < 0, something wrong with bias");
                bias = uint(newBias);
                time = time.add(1);
            }
        }
        brokenLine.initial.start = toTime;
        brokenLine.initial.bias = bias;
        brokenLine.initial.slope = slope;
    }

    function actualValue(BrokenLine storage brokenLine, uint toTime) internal view returns (uint) {
        uint fromTime = brokenLine.initial.start;
        uint bias = brokenLine.initial.bias;
        if (fromTime == toTime) {
            return (bias);
        }

        if (toTime > fromTime) {
            return actualValueForward(brokenLine, fromTime, toTime, bias);
        }
        require(toTime > 0, "unexpected past time");
        return actualValueBack(brokenLine, fromTime, toTime, bias);
    }

    function actualValueForward(BrokenLine storage brokenLine, uint fromTime, uint toTime, uint bias) internal view returns (uint) {
        if ((bias == 0)){
            return (bias);
        }
        uint slope = brokenLine.initial.slope;
        uint time = fromTime;
        while (time < toTime) {
            bias = bias.sub(slope);

            int newSlope = safeInt(slope).add(brokenLine.slopeChanges[time]);
            require(newSlope >= 0, "slope < 0, something wrong with slope");
            slope = uint(newSlope);

            int newBias = safeInt(bias).add(brokenLine.biasChanges[time]); //
            require(newBias >= 0, "bias < 0, something wrong with bias");
            bias = uint(newBias);
            time = time.add(1);
        }
        return bias;
    }

    function actualValueBack(BrokenLine storage brokenLine, uint fromTime, uint toTime, uint bias) internal view returns (uint) {
        uint time = fromTime;
        uint slope = brokenLine.initial.slope;
        //slope changes may be set in biasChanges map, use it
        int newSlope = safeInt(slope).sub(brokenLine.slopeChanges[time]);
        require(newSlope >= 0, "slope < 0, something wrong with slope");
        slope = uint(newSlope);

        while (time >= toTime) {
            bias = bias.add(slope);
//            time = time.sub(1);

            int newBias = safeInt(bias).sub(brokenLine.biasChanges[time]); //
            require(newBias >= 0, "bias < 0, something wrong with bias");
            bias = uint(newBias);

            time = time.sub(1);
            newSlope = safeInt(slope).sub(brokenLine.slopeChanges[time]);
            require(newSlope >= 0, "slope < 0, something wrong with slope");
            slope = uint(newSlope);
        }
        return bias;
    }

    function safeInt(uint value) pure internal returns (int result) {
        result = int(value);
        require(value == uint(result), "int cast error");
    }
}
