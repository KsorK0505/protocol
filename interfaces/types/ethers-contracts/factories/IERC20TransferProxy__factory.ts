/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC20TransferProxy,
  IERC20TransferProxyInterface,
} from "../IERC20TransferProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
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
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "erc20safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IERC20TransferProxy__factory {
  static readonly abi = _abi;
  static createInterface(): IERC20TransferProxyInterface {
    return new utils.Interface(_abi) as IERC20TransferProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC20TransferProxy {
    return new Contract(address, _abi, signerOrProvider) as IERC20TransferProxy;
  }
}
