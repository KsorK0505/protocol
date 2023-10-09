/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ExponentialCurve,
  ExponentialCurveInterface,
} from "../ExponentialCurve";

const _abi = [
  {
    inputs: [],
    name: "MIN_PRICE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "delta",
        type: "uint128",
      },
    ],
    name: "validateDelta",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "newSpotPrice",
        type: "uint128",
      },
    ],
    name: "validateSpotPrice",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "spotPrice",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "delta",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "numItems",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeMultiplier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolFeeMultiplier",
        type: "uint256",
      },
    ],
    name: "getBuyInfo",
    outputs: [
      {
        internalType: "enum CurveErrorCodes.Error",
        name: "error",
        type: "uint8",
      },
      {
        internalType: "uint128",
        name: "newSpotPrice",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "newDelta",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "inputValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolFee",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "spotPrice",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "delta",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "numItems",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeMultiplier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolFeeMultiplier",
        type: "uint256",
      },
    ],
    name: "getSellInfo",
    outputs: [
      {
        internalType: "enum CurveErrorCodes.Error",
        name: "error",
        type: "uint8",
      },
      {
        internalType: "uint128",
        name: "newSpotPrice",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "newDelta",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "outputValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolFee",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
    constant: true,
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506105da806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063097cc63d1461005c5780630ae67ccc146100895780637ca542ac146100bf578063a1bbb2e8146100d2578063ad9f20a6146100f5575b600080fd5b61006f61006a3660046104a6565b61010e565b6040516100809594939291906104f3565b60405180910390f35b6100af61009736600461053d565b670de0b6b3a76400006001600160801b039091161190565b6040519015158152602001610080565b61006f6100cd3660046104a6565b610244565b6100af6100e036600461053d565b633b9aca006001600160801b03909116101590565b610100633b9aca0081565b604051908152602001610080565b6000808080808761012e5750600193506000925082915081905080610237565b600061014c670de0b6b3a76400006001600160801b038c168161038e565b90506000610163828b670de0b6b3a76400006103b1565b90506101816001600160801b038d1682670de0b6b3a764000061046f565b9550633b9aca00866001600160801b031610156101a057633b9aca0095505b6101eb6101d26101b884670de0b6b3a7640000610575565b670de0b6b3a76400006101cb8582610575565b919061038e565b6001600160801b038e1690670de0b6b3a764000061046f565b93506102008489670de0b6b3a764000061046f565b9250610215848a670de0b6b3a764000061046f565b61021f9085610575565b935061022b8385610575565b93508a94506000965050505b9550955095509550959050565b600080808080876102645750600193506000925082915081905080610237565b60006102826001600160801b038b168a670de0b6b3a76400006103b1565b905060006102a26001600160801b038d1683670de0b6b3a764000061046f565b90506001600160801b038111156102cc576002600080600080965096509650965096505050610237565b94508460006102f06001600160801b038e8116908e16670de0b6b3a764000061046f565b9050610338610328670de0b6b3a76400008e6001600160801b03166103159190610575565b670de0b6b3a76400006101cb8188610575565b8290670de0b6b3a764000061046f565b945061034d858a670de0b6b3a764000061046f565b9350610362858b670de0b6b3a764000061046f565b61036c908661058c565b9450610378848661058c565b60009e979d509a50929850949650505050505050565b828102821584158583048414171517156103a757600080fd5b9190910492915050565b6000838015610451576001841680156103cc578592506103d0565b8392505b50600283046002850494505b841561044b5785860286878204146103f357600080fd5b8181018181101561040357600080fd5b859004965050600185161561044057858302838782041415871515161561042957600080fd5b8181018181101561043957600080fd5b8590049350505b6002850494506103dc565b50610467565b8380156104615760009250610465565b8392505b505b509392505050565b828202831584820484141761048357600080fd5b0492915050565b80356001600160801b03811681146104a157600080fd5b919050565b600080600080600060a086880312156104be57600080fd5b6104c78661048a565b94506104d56020870161048a565b94979496505050506040830135926060810135926080909101359150565b60a081016003871061051557634e487b7160e01b600052602160045260246000fd5b9581526001600160801b03948516602082015292909316604083015260608201526080015290565b60006020828403121561054f57600080fd5b6105588261048a565b9392505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156105875761058761055f565b500390565b6000821982111561059f5761059f61055f565b50019056fea2646970667358221220fae8990be5b831c59b9a448b678aea1a5c61c5236dd4fd02fe31575100e399e764736f6c634300080b0033";

type ExponentialCurveConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExponentialCurveConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExponentialCurve__factory extends ContractFactory {
  constructor(...args: ExponentialCurveConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ExponentialCurve> {
    return super.deploy(overrides || {}) as Promise<ExponentialCurve>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ExponentialCurve {
    return super.attach(address) as ExponentialCurve;
  }
  override connect(signer: Signer): ExponentialCurve__factory {
    return super.connect(signer) as ExponentialCurve__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExponentialCurveInterface {
    return new utils.Interface(_abi) as ExponentialCurveInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExponentialCurve {
    return new Contract(address, _abi, signerOrProvider) as ExponentialCurve;
  }
}
