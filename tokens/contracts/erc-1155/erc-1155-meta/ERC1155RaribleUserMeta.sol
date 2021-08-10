// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;
pragma abicoder v2;

import "../../../../exchange-v2/contracts/EIP712MetaTransaction.sol";
import "./ERC1155RaribleUserBase.sol";

contract ERC1155RaribleUserMeta is ERC1155RaribleUserBase, EIP712MetaTransaction {

    event CreateERC1155RaribleUserMeta(address owner, string name, string symbol);

    function __ERC1155RaribleUserMeta_init(string memory _name, string memory _symbol, string memory baseURI, string memory contractURI, address[] memory operators) external initializer {
        __ERC1155RaribleUserBase_init(_name, _symbol, baseURI, contractURI, operators);
        __MetaTransaction_init_unchained("ERC1155RaribleUserMeta", "1");
        emit CreateERC1155RaribleUserMeta(_msgSender(), _name, _symbol);
    }

    function _msgSender() internal view virtual override(ContextUpgradeable, EIP712MetaTransaction) returns (address payable) {
        return super._msgSender();
    }
}
