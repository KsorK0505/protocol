// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;
pragma abicoder v2;

import "./StakingBase.sol";
import "./IVotesUpgradeable.sol";

contract StakingVotes is StakingBase, IVotesUpgradeable {
    using LibBrokenLine for LibBrokenLine.BrokenLine;

    /**
     * @dev Returns the current amount of votes that `account` has.
     */
    function getVotes(address account) external override view returns (uint256) {
        return accounts[account].balance.actualValue(getBlockNumber());
    }

    /**
     * @dev Returns the amount of votes that `account` had
     * at the end of the last period before blockNumber
     */
    function getPastVotes(address account, uint256 blockNumber) external override view returns (uint256) {
        uint currentWeek = roundTimestamp(blockNumber);
        require(blockNumber < getBlockNumber() && currentWeek > 0, "block not yet mined");

        uint lastBlockOfTheLastWeek = (currentWeek * WEEK) - 1;
        return accounts[account].balance.actualValue(lastBlockOfTheLastWeek);
    }

    /**
     * @dev Returns the total supply of votes available 
     * at the end of the last period before blockNumber
     */
    function getPastTotalSupply(uint256 blockNumber) external override view returns (uint256) {
         uint currentWeek = roundTimestamp(blockNumber);
        require(blockNumber < getBlockNumber() && currentWeek > 0, "block not yet mined");

        uint lastBlockOfTheLastWeek = (currentWeek * WEEK) - 1;
        return totalSupplyLine.actualValue(lastBlockOfTheLastWeek);
    }

    /**
     * @dev Returns the delegate that `account` has chosen.
     */
    function delegates(address account) external override view returns (address) {
        revert("not implemented");
    }

    /**
     * @dev Delegates votes from the sender to `delegatee`.
     */
    function delegate(address delegatee) external override {
        revert("not implemented");
    }

    /**
     * @dev Delegates votes from signer to `delegatee`.
     */
    function delegateBySig(
        address delegatee,
        uint256 nonce,
        uint256 expiry,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external override {
        revert("not implemented");
    }

    uint256[50] private __gap;
}