/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ExchangeStateV1,
  ExchangeStateV1Interface,
} from "../ExchangeStateV1";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OperatorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OperatorRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addOperator",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "completed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isOperator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeOperator",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "enum ExchangeDomainV1.AssetType",
                name: "assetType",
                type: "uint8",
              },
            ],
            internalType: "struct ExchangeDomainV1.Asset",
            name: "sellAsset",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "enum ExchangeDomainV1.AssetType",
                name: "assetType",
                type: "uint8",
              },
            ],
            internalType: "struct ExchangeDomainV1.Asset",
            name: "buyAsset",
            type: "tuple",
          },
        ],
        internalType: "struct ExchangeDomainV1.OrderKey",
        name: "key",
        type: "tuple",
      },
    ],
    name: "getCompleted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "enum ExchangeDomainV1.AssetType",
                name: "assetType",
                type: "uint8",
              },
            ],
            internalType: "struct ExchangeDomainV1.Asset",
            name: "sellAsset",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "enum ExchangeDomainV1.AssetType",
                name: "assetType",
                type: "uint8",
              },
            ],
            internalType: "struct ExchangeDomainV1.Asset",
            name: "buyAsset",
            type: "tuple",
          },
        ],
        internalType: "struct ExchangeDomainV1.OrderKey",
        name: "key",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "newCompleted",
        type: "uint256",
      },
    ],
    name: "setCompleted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "enum ExchangeDomainV1.AssetType",
                name: "assetType",
                type: "uint8",
              },
            ],
            internalType: "struct ExchangeDomainV1.Asset",
            name: "sellAsset",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "enum ExchangeDomainV1.AssetType",
                name: "assetType",
                type: "uint8",
              },
            ],
            internalType: "struct ExchangeDomainV1.Asset",
            name: "buyAsset",
            type: "tuple",
          },
        ],
        internalType: "struct ExchangeDomainV1.OrderKey",
        name: "key",
        type: "tuple",
      },
    ],
    name: "getCompletedKey",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260006100176001600160e01b0361006616565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006a565b3390565b610b0e806100796000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80639870d7fe116100715780639870d7fe14610111578063ac8a584a14610124578063dc10fb0a14610137578063f2fde38b14610157578063f6419d961461016a578063fb0000c01461017d576100a9565b80633a076e9a146100ae5780636d70f7ae146100c3578063715018a6146100ec5780638da5cb5b146100f45780638f32d59b14610109575b600080fd5b6100c16100bc366004610717565b610190565b005b6100d66100d13660046106b4565b6101ec565b6040516100e391906109c4565b60405180910390f35b6100c1610205565b6100fc610273565b6040516100e391906109b6565b6100d6610282565b6100c161011f3660046106b4565b6102a6565b6100c16101323660046106b4565b6102d6565b61014a610145366004610753565b610303565b6040516100e391906109d2565b6100c16101653660046106b4565b610352565b61014a6101783660046106da565b61037f565b61014a61018b3660046106f8565b610391565b61019b6100d16103be565b6101c05760405162461bcd60e51b81526004016101b790610a00565b60405180910390fd5b80600260006101d761014536879003870187610753565b81526020810191909152604001600020555050565b60006101ff60018363ffffffff6103c216565b92915050565b61020d610282565b6102295760405162461bcd60e51b81526004016101b790610a20565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b600080546001600160a01b03166102976103be565b6001600160a01b031614905090565b6102ae610282565b6102ca5760405162461bcd60e51b81526004016101b790610a20565b6102d38161040a565b50565b6102de610282565b6102fa5760405162461bcd60e51b81526004016101b790610a20565b6102d381610452565b80516040808301518051602091820151606086015180519084015184880151955160009761033597909690910161094c565b604051602081830303815290604052805190602001209050919050565b61035a610282565b6103765760405162461bcd60e51b81526004016101b790610a20565b6102d38161049a565b60026020526000908152604090205481565b60006002816103a861014536869003860186610753565b8152602001908152602001600020549050919050565b3390565b60006001600160a01b0382166103ea5760405162461bcd60e51b81526004016101b790610a30565b506001600160a01b03166000908152602091909152604090205460ff1690565b61041b60018263ffffffff61051b16565b6040516001600160a01b038216907fac6fa858e9350a46cec16539926e0fde25b7629f84b5a72bffaae4df888ae86d90600090a250565b61046360018263ffffffff61056716565b6040516001600160a01b038216907f80c0b871b97b595b16a7741c1b06fed0c6f6f558639f18ccbce50724325dc40d90600090a250565b6001600160a01b0381166104c05760405162461bcd60e51b81526004016101b7906109f0565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b61052582826103c2565b156105425760405162461bcd60e51b81526004016101b7906109e0565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b61057182826103c2565b61058d5760405162461bcd60e51b81526004016101b790610a10565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b80356101ff81610aa1565b80356101ff81610ab5565b80356101ff81610abe565b6000606082840312156105e257600080fd5b6105ec6060610a40565b905060006105fa84846105af565b825250602061060b848483016105ba565b602083015250604061061f848285016105c5565b60408301525092915050565b6000610100828403121561063e57600080fd5b50919050565b6000610100828403121561065757600080fd5b6106616080610a40565b9050600061066f84846105af565b8252506020610680848483016105ba565b6020830152506040610694848285016105d0565b60408301525060a06106a8848285016105d0565b60608301525092915050565b6000602082840312156106c657600080fd5b60006106d284846105af565b949350505050565b6000602082840312156106ec57600080fd5b60006106d284846105ba565b6000610100828403121561070b57600080fd5b60006106d2848461062b565b600080610120838503121561072b57600080fd5b6000610737858561062b565b925050610100610749858286016105ba565b9150509250929050565b6000610100828403121561076657600080fd5b60006106d28484610644565b61077b81610a70565b82525050565b61077b61078d82610a70565b610a8f565b61077b81610a7b565b61077b81610a80565b60006107b1601f83610a67565b7f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500815260200192915050565b60006107ea602683610a67565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b602082015260400192915050565b6000610832603483610a67565b7f4f70657261746f72526f6c653a2063616c6c657220646f6573206e6f74206861815273766520746865204f70657261746f7220726f6c6560601b602082015260400192915050565b6000610888602183610a67565b7f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c8152606560f81b602082015260400192915050565b60006108cb602083610a67565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572815260200192915050565b6000610904602283610a67565b7f526f6c65733a206163636f756e7420697320746865207a65726f206164647265815261737360f01b602082015260400192915050565b61077b61094782610a80565b610a80565b60006109588289610781565b6014820191506109688288610781565b601482019150610978828761093b565b6020820191506109888286610781565b601482019150610998828561093b565b6020820191506109a8828461093b565b506020019695505050505050565b602081016101ff8284610772565b602081016101ff8284610792565b602081016101ff828461079b565b602080825281016101ff816107a4565b602080825281016101ff816107dd565b602080825281016101ff81610825565b602080825281016101ff8161087b565b602080825281016101ff816108be565b602080825281016101ff816108f7565b60405181810167ffffffffffffffff81118282101715610a5f57600080fd5b604052919050565b90815260200190565b60006101ff82610a83565b151590565b90565b6001600160a01b031690565b60006101ff8260006101ff8260601b90565b610aaa81610a70565b81146102d357600080fd5b610aaa81610a80565b600581106102d357600080fdfea365627a7a72315820aa5601af19ab1e5293abaf4d8b2fd00c0df68c612deb796da2ea78e857eb4d656c6578706572696d656e74616cf564736f6c63430005110040";

type ExchangeStateV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExchangeStateV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExchangeStateV1__factory extends ContractFactory {
  constructor(...args: ExchangeStateV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ExchangeStateV1> {
    return super.deploy(overrides || {}) as Promise<ExchangeStateV1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ExchangeStateV1 {
    return super.attach(address) as ExchangeStateV1;
  }
  override connect(signer: Signer): ExchangeStateV1__factory {
    return super.connect(signer) as ExchangeStateV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExchangeStateV1Interface {
    return new utils.Interface(_abi) as ExchangeStateV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExchangeStateV1 {
    return new Contract(address, _abi, signerOrProvider) as ExchangeStateV1;
  }
}
