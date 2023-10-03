/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  LibERC721LazyMint,
  LibERC721LazyMintInterface,
} from "../LibERC721LazyMint";

const _abi = [
  {
    inputs: [],
    name: "ERC721_LAZY_ASSET_CLASS",
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
  {
    inputs: [],
    name: "MINT_AND_TRANSFER_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60fb610025600b82828239805160001a60731461001857fe5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c80637987105f14604257806394d5e89d14605a575b600080fd5b6048607d565b60408051918252519081900360200190f35b606060a1565b604080516001600160e01b03199092168252519081900360200190f35b7ff64326045af5fd7e15297ba939f85b550474d3899daa47d2bc1ffbdb9ced344e81565b7fd8f960c1450658267efb07308b4050c9e705cea25a53b560236c88cb149696be8156fea264697066735822122018d8b140a5ce005f415300ebc1ad875d98186ceb0830a76e4c8e500bdd929cc664736f6c63430007060033";

type LibERC721LazyMintConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibERC721LazyMintConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibERC721LazyMint__factory extends ContractFactory {
  constructor(...args: LibERC721LazyMintConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibERC721LazyMint> {
    return super.deploy(overrides || {}) as Promise<LibERC721LazyMint>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibERC721LazyMint {
    return super.attach(address) as LibERC721LazyMint;
  }
  override connect(signer: Signer): LibERC721LazyMint__factory {
    return super.connect(signer) as LibERC721LazyMint__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibERC721LazyMintInterface {
    return new utils.Interface(_abi) as LibERC721LazyMintInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibERC721LazyMint {
    return new Contract(address, _abi, signerOrProvider) as LibERC721LazyMint;
  }
}