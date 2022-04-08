// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;
pragma abicoder v2;

import "./ExchangeV2Core.sol";
import "./RaribleTransferManager.sol";
import "@rarible/royalties/contracts/IRoyaltiesProvider.sol";
import "@rarible/exchange-interfaces/contracts/IWyvernExchange.sol";

contract ExchangeBulkV2 is ExchangeV2Core, RaribleTransferManager {
    using SafeMathUpgradeable for uint;
    using LibTransfer for address;

    IWyvernExchange public wyvernExchange;

    struct WyvernOrder {
        address[7] _addrs;
        uint[9]  _uints;
        uint8[4]  _feeMethodsSidesKindsHowToCalls;
        bytes  _calldataSell;
        bytes  _replacementPatternSell;
        bytes  _staticExtradataSell;
        uint8[1]  _vs;
        bytes32[2]  _rssMetadata;
    }

    struct WyvernOrders {
        address[14] addrs;
        uint[18]  uints;
        uint8[8]  feeMethodsSidesKindsHowToCalls;
        bytes  calldataBuy;
        bytes  calldataSell;
        bytes  replacementPatternBuy;
        bytes  replacementPatternSell;
        bytes  staticExtradataBuy;
        bytes  staticExtradataSell;
        uint8[2]  vs;
        bytes32[5]  rssMetadata;
    }

    function __ExchangeBulkV2_init(
        INftTransferProxy _transferProxy,
        IERC20TransferProxy _erc20TransferProxy,
        IWyvernExchange  _wyvernExchange,
        uint newProtocolFee,
        address newDefaultFeeReceiver,
        IRoyaltiesProvider newRoyaltiesProvider
    ) external initializer {
        __Context_init_unchained();
        __Ownable_init_unchained();
        __TransferExecutor_init_unchained(_transferProxy, _erc20TransferProxy);
        __RaribleTransferManager_init_unchained(newProtocolFee, newDefaultFeeReceiver, newRoyaltiesProvider);
        __OrderValidator_init_unchained();
        wyvernExchange = _wyvernExchange;
    }

    /*Transfer by ExchangeV2 array orders */
    function matchOrdersBulk(
        LibOrder.Order[] memory sellOrders,
        bytes[] memory sellOrderSignatures,
        address buyer
    ) external payable {
        uint totalAmount;
        for (uint256 i = 0; i < sellOrders.length; i++) {
            validateFull(sellOrders[i], sellOrderSignatures[i]);
            LibOrder.Order memory buyerOrder;
            buyerOrder.maker = buyer;
            buyerOrder.makeAsset = sellOrders[i].takeAsset;
            buyerOrder.takeAsset = sellOrders[i].makeAsset;
            buyerOrder.dataType = 0xffffffff;
            totalAmount += matchAndTransferBulk(sellOrders[i], buyerOrder);
        }
        if (msg.value > totalAmount) {
            address(_msgSender()).transferEth(msg.value.sub(totalAmount));
        }
    }

    function matchWyvernExchangeBulk(WyvernOrder[] memory orders) external payable {
        for(uint i = 0; i < orders.length; i ++) {
            matchWyvernExchange(orders[i]);
        }
    }

    /*
    */
    function matchWyvernExchange(
        WyvernOrder memory order
    ) internal {
        WyvernOrders memory wyvernOrders;
        wyvernOrders.addrs = addrsField(order._addrs);

        wyvernOrders.uints = uintsField(order._uints);

        wyvernOrders.feeMethodsSidesKindsHowToCalls = feeMethodsSidesKindsHowToCallsField(order._feeMethodsSidesKindsHowToCalls); //TODO Check IT is it right?

        wyvernOrders.calldataBuy = buyCalldata(order._calldataSell, _msgSender()); //TODO set buyer
//        wyvernOrders.calldataBuy = buyCalldata(order._calldataSell, address(this)); //TODO tets only
        wyvernOrders.calldataSell = order._calldataSell;
//        revert(string(abi.encodePacked("emit tmp addr: ", toString(msg.sender))));

        wyvernOrders.replacementPatternBuy = buyMask(order._replacementPatternSell);
        wyvernOrders.replacementPatternSell = order._replacementPatternSell;

        wyvernOrders.staticExtradataBuy = order._staticExtradataSell; //TODO Check IT is it right?
        wyvernOrders.staticExtradataSell = order._staticExtradataSell;

        wyvernOrders.vs[0] = order._vs[0];
        wyvernOrders.vs[1] = order._vs[0];

        wyvernOrders.rssMetadata[0] = order._rssMetadata[0];
        wyvernOrders.rssMetadata[1] = order._rssMetadata[1];
        wyvernOrders.rssMetadata[2] = order._rssMetadata[0];
        wyvernOrders.rssMetadata[3] = order._rssMetadata[1];
        wyvernOrders.rssMetadata[4] = order._rssMetadata[1];  //todo think about it
        //revert(string(abi.encodePacked("emit msg.value: ", uint2str(msg.value))));
        wyvernExchange.atomicMatch_{ value: msg.value }(
            wyvernOrders.addrs,
            wyvernOrders.uints,
            wyvernOrders.feeMethodsSidesKindsHowToCalls,
            wyvernOrders.calldataBuy,
            order._calldataSell,
            wyvernOrders.replacementPatternBuy,
            order._replacementPatternSell,
            wyvernOrders.staticExtradataBuy,
            order._staticExtradataSell,
            wyvernOrders.vs,
            wyvernOrders.rssMetadata);
//        revert("sks_00154");
          //TODO transfer  NFT to Buyer we don`t need it
    }

    function matchWyvernExchangeParametersTest(
        WyvernOrder memory order
    ) external returns (WyvernOrders memory wyvernOrders) {
//        WyvernOrders memory wyvernOrders;
        wyvernOrders.addrs = addrsField(order._addrs);

        wyvernOrders.uints = uintsField(order._uints);

        wyvernOrders.feeMethodsSidesKindsHowToCalls = feeMethodsSidesKindsHowToCallsField(order._feeMethodsSidesKindsHowToCalls); //TODO Check IT is it right?

        wyvernOrders.calldataBuy = buyCalldata(order._calldataSell, _msgSender()); //TODO set buyer
//        wyvernOrders.calldataBuy = buyCalldata(order._calldataSell, address(this)); //TODO tets only
        wyvernOrders.calldataSell = order._calldataSell;

//        revert(string(abi.encodePacked("emit tmp addr: ", toString(msg.sender))));
        wyvernOrders.replacementPatternBuy = buyMask(order._replacementPatternSell);
        wyvernOrders.replacementPatternSell = order._replacementPatternSell;

        wyvernOrders.staticExtradataBuy = order._staticExtradataSell; //TODO Check IT is it right?
        wyvernOrders.staticExtradataSell = order._staticExtradataSell;

        wyvernOrders.vs[0] = order._vs[0];
        wyvernOrders.vs[1] = order._vs[0];

        wyvernOrders.rssMetadata[0] = order._rssMetadata[0];
        wyvernOrders.rssMetadata[1] = order._rssMetadata[1];
        wyvernOrders.rssMetadata[2] = order._rssMetadata[0];
        wyvernOrders.rssMetadata[3] = order._rssMetadata[1];
        wyvernOrders.rssMetadata[4] = order._rssMetadata[1];  //todo think about it
        return wyvernOrders;
    }

    function addrsField(address[7] memory addrs) internal returns (address[14] memory newAddrs){
//        address tmp = address(this);
//        revert(string(abi.encodePacked("emit tmp addr: ", toString(tmp))));
        newAddrs[0] = addrs[0];//exchange
        newAddrs[1] = address(this); //_msgSender();//maker
        newAddrs[2] = addrs[1];//taker
        newAddrs[3] = address(0);//feeRecipient
        newAddrs[4] = addrs[4];//target
        newAddrs[5] = address(0);//staticTarget
        newAddrs[6] = address(0);//paymentToken
        for (uint8 i = 7; i < 14; i ++) {
            newAddrs[i] = addrs[i - 7];
        }
//        revert(string(abi.encodePacked("emit seller addr: ", toString(newAddrs[8]))));
        return newAddrs;
    }

    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len - 1;
        while (_i != 0) {
            bstr[k--] = byte(uint8(48 + _i % 10));
            _i /= 10;
        }
        return string(bstr);
    }

    function toString(address _addr) internal pure returns (string memory) {
        bytes32 value = bytes32(uint256(_addr));
        bytes memory alphabet = "0123456789abcdef";
        bytes memory str = new bytes(42);
        str[0] = '0';
        str[1] = 'x';
        for (uint256 i = 0; i < 20; i++) {
            str[2+i*2] = alphabet[uint8(value[i + 12] >> 4)];
            str[3+i*2] = alphabet[uint8(value[i + 12] & 0x0f)];
        }
        return string(str);
    }
    function uintsField(uint[9] memory uints) internal returns (uint[18] memory newUints){
        for (uint8 i = 9; i < 18; i ++) {
            newUints[i] = uints[i - 9];
            newUints[i - 9] = uints[i - 9];
        }
        return newUints;
    }
    function feeMethodsSidesKindsHowToCallsField(uint8[4] memory feeMethodsSidesKindsHowToCalls) internal returns (uint8[8] memory newFeeMethodsSidesKindsHowToCalls){
        newFeeMethodsSidesKindsHowToCalls[0] = 1;
        newFeeMethodsSidesKindsHowToCalls[1] = 0;
        newFeeMethodsSidesKindsHowToCalls[2] = 0;
        newFeeMethodsSidesKindsHowToCalls[3] = 1;
        for (uint8 i = 4; i < 8; i ++) {
            newFeeMethodsSidesKindsHowToCalls[i] = feeMethodsSidesKindsHowToCalls[i - 4];
        }
        return newFeeMethodsSidesKindsHowToCalls;
    }

    function buyCalldata(bytes memory inCalldata, address addr) public pure returns(bytes memory outCalldata) {
        outCalldata = new bytes(inCalldata.length);
        for(uint i = 0; i < 4; i ++) {
            outCalldata[i] = inCalldata[i];
        }
        for(uint i = 68; i < inCalldata.length; i ++) {
            outCalldata[i] = inCalldata[i];
        }
        bytes memory buyer = abi.encodePacked(addr);
        for(uint i = 48; i < 68; i ++) {
            outCalldata[i] = buyer[i - 48];
        }
    }

    function buyMask(bytes memory inMask) public pure returns(bytes memory outMask) {
        outMask = new bytes(inMask.length);
        for(uint i = 4; i < 36; i ++) {
            outMask[i] = 0xFF;
        }
    }

    receive () external payable {}

}