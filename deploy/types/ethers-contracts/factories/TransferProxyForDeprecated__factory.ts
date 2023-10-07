/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TransferProxyForDeprecated,
  TransferProxyForDeprecatedInterface,
} from "../TransferProxyForDeprecated";

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
    constant: false,
    inputs: [
      {
        internalType: "contract IERC721",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "erc721TransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260006100176001600160e01b0361006616565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006a565b3390565b6107b3806100796000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638f32d59b1161005b5780638f32d59b146101315780639870d7fe14610139578063ac8a584a1461015f578063f2fde38b1461018557610088565b80636d70f7ae1461008d578063715018a6146100c75780638450ebe4146100d15780638da5cb5b1461010d575b600080fd5b6100b3600480360360208110156100a357600080fd5b50356001600160a01b03166101ab565b604080519115158252519081900360200190f35b6100cf6101c4565b005b6100cf600480360360808110156100e757600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135610255565b610115610318565b604080516001600160a01b039092168252519081900360200190f35b6100b3610327565b6100cf6004803603602081101561014f57600080fd5b50356001600160a01b031661034b565b6100cf6004803603602081101561017557600080fd5b50356001600160a01b031661039e565b6100cf6004803603602081101561019b57600080fd5b50356001600160a01b03166103ee565b60006101be60018363ffffffff61043e16565b92915050565b6101cc610327565b61020b576040805162461bcd60e51b8152602060048201819052602482015260008051602061073d833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6102656102606104a5565b6101ab565b6102a05760405162461bcd60e51b81526004018080602001828103825260348152602001806106e86034913960400191505060405180910390fd5b604080516323b872dd60e01b81526001600160a01b0385811660048301528481166024830152604482018490529151918616916323b872dd9160648082019260009290919082900301818387803b1580156102fa57600080fd5b505af115801561030e573d6000803e3d6000fd5b5050505050505050565b6000546001600160a01b031690565b600080546001600160a01b031661033c6104a5565b6001600160a01b031614905090565b610353610327565b610392576040805162461bcd60e51b8152602060048201819052602482015260008051602061073d833981519152604482015290519081900360640190fd5b61039b816104a9565b50565b6103a6610327565b6103e5576040805162461bcd60e51b8152602060048201819052602482015260008051602061073d833981519152604482015290519081900360640190fd5b61039b816104f1565b6103f6610327565b610435576040805162461bcd60e51b8152602060048201819052602482015260008051602061073d833981519152604482015290519081900360640190fd5b61039b81610539565b60006001600160a01b0382166104855760405162461bcd60e51b815260040180806020018281038252602281526020018061075d6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b3390565b6104ba60018263ffffffff6105d916565b6040516001600160a01b038216907fac6fa858e9350a46cec16539926e0fde25b7629f84b5a72bffaae4df888ae86d90600090a250565b61050260018263ffffffff61065a16565b6040516001600160a01b038216907f80c0b871b97b595b16a7741c1b06fed0c6f6f558639f18ccbce50724325dc40d90600090a250565b6001600160a01b03811661057e5760405162461bcd60e51b81526004018080602001828103825260268152602001806106c26026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6105e3828261043e565b15610635576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b610664828261043e565b61069f5760405162461bcd60e51b815260040180806020018281038252602181526020018061071c6021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff1916905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f70657261746f72526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204f70657261746f7220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373a265627a7a7231582050b44f69293564c0757fe0bdb95fcf0d6e291d7bbe191811d1b0b505abc57bbe64736f6c63430005110032";

type TransferProxyForDeprecatedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransferProxyForDeprecatedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TransferProxyForDeprecated__factory extends ContractFactory {
  constructor(...args: TransferProxyForDeprecatedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TransferProxyForDeprecated> {
    return super.deploy(overrides || {}) as Promise<TransferProxyForDeprecated>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TransferProxyForDeprecated {
    return super.attach(address) as TransferProxyForDeprecated;
  }
  override connect(signer: Signer): TransferProxyForDeprecated__factory {
    return super.connect(signer) as TransferProxyForDeprecated__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransferProxyForDeprecatedInterface {
    return new utils.Interface(_abi) as TransferProxyForDeprecatedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransferProxyForDeprecated {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TransferProxyForDeprecated;
  }
}