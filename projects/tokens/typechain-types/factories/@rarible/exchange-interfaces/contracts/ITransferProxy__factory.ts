/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITransferProxy,
  ITransferProxyInterface,
} from "../../../../@rarible/exchange-interfaces/contracts/ITransferProxy";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "bytes4",
                name: "assetClass",
                type: "bytes4",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct LibAsset.AssetType",
            name: "assetType",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        internalType: "struct LibAsset.Asset",
        name: "asset",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ITransferProxy__factory {
  static readonly abi = _abi;
  static createInterface(): ITransferProxyInterface {
    return new utils.Interface(_abi) as ITransferProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITransferProxy {
    return new Contract(address, _abi, signerOrProvider) as ITransferProxy;
  }
}
