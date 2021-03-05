pragma solidity ^0.7.0;
pragma abicoder v2;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@rarible/lazy-mint/contracts/erc-1155/IERC1155LazyMint.sol";
import "@rarible/lazy-mint/contracts/erc-1155/LibERC1155LazyMint.sol";

contract ERC1155LazyMintTest is IERC1155LazyMint, ERC1155Upgradeable {
    function mintAndTransfer(
        LibERC1155LazyMint.Mint1155Data memory data,
        address to,
        uint256 _amount
    ) external override {
        _mint(to, data.tokenId, _amount, "");
    }

    function encode(LibERC1155LazyMint.Mint1155Data memory data) external view returns (bytes memory) {
        return abi.encode(address(this), data);
    }
}
