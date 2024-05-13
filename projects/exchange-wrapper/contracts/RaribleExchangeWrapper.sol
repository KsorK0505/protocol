// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;
pragma abicoder v2;

import "@rarible/transfer-manager/contracts/lib/LibTransfer.sol";
import "@rarible/lib-bp/contracts/BpLibrary.sol";
import "@rarible/lib-part/contracts/LibPart.sol";

import "@openzeppelin/contracts/math/SafeMath.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155Holder.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";

import "./interfaces/IWyvernExchange.sol";
import "./interfaces/IExchangeV2.sol";
import "./interfaces/ISeaPort.sol";
import "./interfaces/Ix2y2.sol";
import "./interfaces/ILooksRare.sol";
import "./interfaces/IBlur.sol";

import "./libraries/IsPausable.sol";

import "./AbstractRaribleExchangeWrapper.sol";


contract RaribleExchangeWrapper is AbstractRaribleExchangeWrapper {
    //marketplaces
    address public immutable _wyvernExchange;
    address public immutable _exchangeV2;
    address public immutable _seaPort_1_1;
    address public immutable _x2y2;
    address public immutable _looksRare;
    address public immutable _sudoswap;
    address public immutable _seaPort_1_4;
    address public immutable _looksRareV2;
    address public immutable _blur;
    address public immutable _seaPort_1_5;
    address public immutable _seaPort_1_6;

    //currencties
    address public immutable _weth;

    //constants
    uint256 private constant UINT256_MAX = type(uint256).max;

    constructor(
        address[11] memory marketplaces,
        //address _wyvernExchange, 0
        //address _exchangeV2, 1
        //address _seaPort_1_1, 2
        //address _x2y2, 3
        //address _looksRare, 4
        //address _sudoswap, 5
        //address _seaPort_1_4, 6
        //address _looksRareV2, 7
        //address _blur, 8
        //address _seaPort_1_5, 9
        //address _seaPort_1_6, 10
        address weth,
        address[] memory transferProxies,
        address initialOwner
    ) {
        _wyvernExchange = marketplaces[0];
        _exchangeV2 = marketplaces[1];
        _seaPort_1_1 = marketplaces[2];
        _x2y2 = marketplaces[3];
        _looksRare = marketplaces[4];
        _sudoswap = marketplaces[5];
        _seaPort_1_4 = marketplaces[6];
        _looksRareV2 = marketplaces[7];
        _blur = marketplaces[8];
        _seaPort_1_5 = marketplaces[9];
        _seaPort_1_6 = marketplaces[10];

        _weth = weth;

        for (uint i = 0; i < transferProxies.length; ++i) {
            if (weth != address(0)){
                IERC20Upgradeable(weth).approve(transferProxies[i], UINT256_MAX);
            }
        }

        transferOwnership(initialOwner);
    }



    // Getters
    function wyvernExchange() public view override returns(address) {
        return _wyvernExchange;
    }

    function exchangeV2() public view override returns(address) {
        return _exchangeV2;
    }

    function seaPort_1_1() public view override returns(address) {
        return _seaPort_1_1;
    }

    function x2y2() public view override returns(address) {
        return _x2y2;
    }

    function looksRare() public view override returns(address) {
        return _looksRare;
    }

    function sudoswap() public view override returns(address) {
        return _sudoswap;
    }

    function seaPort_1_4() public view override returns(address) {
        return _seaPort_1_4;
    }

    function looksRareV2() public view override returns(address) {
        return _looksRareV2;
    }

    function blur() public view override returns(address) {
        return _blur;
    }

    function seaPort_1_5() public view override returns(address) {
        return _seaPort_1_5;
    }

    function seaPort_1_6() public view override returns(address) {
        return _seaPort_1_6;
    }

    function weth() public view override returns(address) {
        return _weth;
    }
    
}