/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  LibOrderDataV1,
  LibOrderDataV1Interface,
} from "../LibOrderDataV1";

const _abi = [
  {
    inputs: [],
    name: "V1",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c1610025600b82828239805160001a60731461001857fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80633ee569bf146038575b600080fd5b603e6052565b604051604991906076565b60405180910390f35b7f4c23426613a5dc69e08fbd2787e6210aa679d4522e95a89d4dd88c4fd13a228381565b6001600160e01b03199190911681526020019056fea2646970667358221220d998cf3d1b33cb0db55daa8fcd67cb76111d4a1d7693aa0a789fd70db1bbf40564736f6c63430007060033";

type LibOrderDataV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibOrderDataV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibOrderDataV1__factory extends ContractFactory {
  constructor(...args: LibOrderDataV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibOrderDataV1> {
    return super.deploy(overrides || {}) as Promise<LibOrderDataV1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibOrderDataV1 {
    return super.attach(address) as LibOrderDataV1;
  }
  override connect(signer: Signer): LibOrderDataV1__factory {
    return super.connect(signer) as LibOrderDataV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibOrderDataV1Interface {
    return new utils.Interface(_abi) as LibOrderDataV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibOrderDataV1 {
    return new Contract(address, _abi, signerOrProvider) as LibOrderDataV1;
  }
}
