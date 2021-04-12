// SPDX-License-Identifier: MIT

pragma solidity >=0.6.9 <0.8.0;
pragma abicoder v2;

import "../../../contracts/RaribleTransferManager.sol";
import "../../../contracts/ITransferExecutor.sol";
import "../../../contracts/OrderValidator.sol";
import "@rarible/royalties/contracts/IRoyaltiesProvider.sol";

contract RaribleTransferManagerTest is RaribleTransferManager, TransferExecutor, OrderValidator {

    function encode(LibOrderDataV1.DataV1 memory data) pure external returns (bytes memory) {
        return abi.encode(data);
    }

    function checkDoTransfers(
        LibAsset.AssetType memory makeMatch,
        LibAsset.AssetType memory takeMatch,
        LibFill.FillResult memory fill,
        LibOrder.Order memory leftOrder,
        LibOrder.Order memory rightOrder
    ) payable external {
        doTransfers(makeMatch, takeMatch, fill, leftOrder, rightOrder);
    }

    function __TransferManager_init(
        INftTransferProxy _transferProxy,
        IERC20TransferProxy _erc20TransferProxy,
        uint newBuyerFee,
        uint newSellerFee,
        address newCommunityWallet,
        IRoyaltiesProvider newRoyaltiesProvider
    ) external initializer {
        __Context_init_unchained();
        __Ownable_init_unchained();
        __TransferExecutor_init_unchained(_transferProxy, _erc20TransferProxy);
        __RaribleTransferManager_init_unchained(newBuyerFee, newSellerFee, newCommunityWallet, newRoyaltiesProvider);
        __OrderValidator_init_unchained();
    }
}
