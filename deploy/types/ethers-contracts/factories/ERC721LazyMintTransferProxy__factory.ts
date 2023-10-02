/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ERC721LazyMintTransferProxy,
  ERC721LazyMintTransferProxyInterface,
} from "../ERC721LazyMintTransferProxy";

const _abi = [
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
    inputs: [],
    name: "__OperatorRole_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "addOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "removeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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

const _bytecode =
  "0x608060405234801561001057600080fd5b50610e65806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100a75780639870d7fe146100c5578063ac8a584a146100d8578063f2fde38b146100eb5761007d565b80632ff26a0a1461008257806354bc0cf11461008c578063715018a61461009f575b600080fd5b61008a6100fe565b005b61008a61009a3660046109fb565b6101b0565b61008a6102ce565b6100af61037a565b6040516100bc9190610bc4565b60405180910390f35b61008a6100d33660046108eb565b610389565b61008a6100e63660046108eb565b61040f565b61008a6100f93660046108eb565b610492565b600054610100900460ff16806101175750610117610595565b80610125575060005460ff16155b6101605760405162461bcd60e51b815260040180806020018281038252602e815260200180610dba602e913960400191505060405180910390fd5b600054610100900460ff1615801561018b576000805460ff1961ff0019909116610100171660011790555b6101936105a6565b61019b610646565b80156101ad576000805461ff00191690555b50565b606560006101bc61073f565b6001600160a01b0316815260208101919091526040016000205460ff166102145760405162461bcd60e51b8152600401808060200182810382526028815260200180610e086028913960400191505060405180910390fd5b82602001516001146102415760405162461bcd60e51b815260040161023890610bd8565b60405180910390fd5b6000808460000151602001518060200190518101906102609190610907565b60405163832fbb2960e01b815291935091506001600160a01b0383169063832fbb299061029590849088908890600401610c04565b600060405180830381600087803b1580156102af57600080fd5b505af11580156102c3573d6000803e3d6000fd5b505050505050505050565b6102d661073f565b6001600160a01b03166102e761037a565b6001600160a01b031614610330576040805162461bcd60e51b81526020600482018190526024820152600080516020610de8833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6033546001600160a01b031690565b61039161073f565b6001600160a01b03166103a261037a565b6001600160a01b0316146103eb576040805162461bcd60e51b81526020600482018190526024820152600080516020610de8833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152606560205260409020805460ff19166001179055565b61041761073f565b6001600160a01b031661042861037a565b6001600160a01b031614610471576040805162461bcd60e51b81526020600482018190526024820152600080516020610de8833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152606560205260409020805460ff19169055565b61049a61073f565b6001600160a01b03166104ab61037a565b6001600160a01b0316146104f4576040805162461bcd60e51b81526020600482018190526024820152600080516020610de8833981519152604482015290519081900360640190fd5b6001600160a01b0381166105395760405162461bcd60e51b8152600401808060200182810382526026815260200180610d946026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b60006105a030610743565b15905090565b600054610100900460ff16806105bf57506105bf610595565b806105cd575060005460ff16155b6106085760405162461bcd60e51b815260040180806020018281038252602e815260200180610dba602e913960400191505060405180910390fd5b600054610100900460ff1615801561019b576000805460ff1961ff00199091166101001716600117905580156101ad576000805461ff001916905550565b600054610100900460ff168061065f575061065f610595565b8061066d575060005460ff16155b6106a85760405162461bcd60e51b815260040180806020018281038252602e815260200180610dba602e913960400191505060405180910390fd5b600054610100900460ff161580156106d3576000805460ff1961ff0019909116610100171660011790555b60006106dd61073f565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35080156101ad576000805461ff001916905550565b3390565b803b15155b919050565b600061076061075b84610d2c565b610cea565b905082815283838301111561077457600080fd5b610782836020830184610d4e565b9392505050565b803561074881610d7e565b600082601f8301126107a4578081fd5b815160206107b461075b83610d0e565b82815281810190858301855b858110156107fe578151880189603f8201126107da578788fd5b6107eb8a878301516040840161074d565b85525092840192908401906001016107c0565b5090979650505050505050565b600082601f83011261081b578081fd5b8151602061082b61075b83610d0e565b82815281810190858301604080860288018501891015610849578687fd5b865b868110156108be5781838b031215610861578788fd5b815182810181811067ffffffffffffffff8211171561087c57fe5b8352835161088981610d7e565b8152838701516bffffffffffffffffffffffff811681146108a857898afd5b818801528552938501939181019160010161084b565b509198975050505050505050565b600082601f8301126108dc578081fd5b6107828383516020850161074d565b6000602082840312156108fc578081fd5b813561078281610d7e565b60008060408385031215610919578081fd5b825161092481610d7e565b602084015190925067ffffffffffffffff80821115610941578283fd5b9084019060a08287031215610954578283fd5b61095e60a0610cea565b82518152602083015182811115610973578485fd5b61097f888286016108cc565b602083015250604083015182811115610996578485fd5b6109a28882860161080b565b6040830152506060830151828111156109b9578485fd5b6109c58882860161080b565b6060830152506080830151828111156109dc578485fd5b6109e888828601610794565b6080830152508093505050509250929050565b600080600060608486031215610a0f578081fd5b833567ffffffffffffffff80821115610a26578283fd5b81860191506040808389031215610a3b578384fd5b80518181018181108482111715610a4e57fe5b808352843584811115610a5f578687fd5b8501808b03841315610a6f578687fd5b608083018281108682111715610a8157fe5b845280356001600160e01b031981168114610a9a578788fd5b825260208181013586811115610aae578889fd5b82019550601f86018c13610ac0578788fd5b85359150610ad061075b83610d2c565b8281528c82848901011115610ae3578889fd5b828288018383013788828483010152806060860152508284528087013581850152839950610b12818c01610789565b985050505050610b23818801610789565b93505050509250925092565b6001600160a01b03169052565b6000815180845260208085019450808401835b83811015610b8d57815180516001600160a01b031688528301516bffffffffffffffffffffffff168388015260409096019590820190600101610b4f565b509495945050505050565b60008151808452610bb0816020860160208601610d4e565b601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b60208082526012908201527132b9319b9918903b30b63ab29032b93937b960711b604082015260600190565b6000606082528451606083015260208086015160a06080850152610c2c610100850182610b98565b90506040870151605f19808684030160a0870152610c4a8383610b3c565b925060608901519150808684030160c0870152610c678383610b3c565b60808a015187820390920160e0880152815180825290935090840191508383019084810284018501865b82811015610cbf57601f19868303018452610cad828651610b98565b94870194938701939150600101610c91565b508096505050505050610cd481840186610b2f565b50610ce26040830184610b2f565b949350505050565b60405181810167ffffffffffffffff81118282101715610d0657fe5b604052919050565b600067ffffffffffffffff821115610d2257fe5b5060209081020190565b600067ffffffffffffffff821115610d4057fe5b50601f01601f191660200190565b60005b83811015610d69578181015183820152602001610d51565b83811115610d78576000848401525b50505050565b6001600160a01b03811681146101ad57600080fdfe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65724f70657261746f72526f6c653a2063616c6c6572206973206e6f7420746865206f70657261746f72a26469706673582212203f3328f63a2a394db83b7db92b29fd017b1047b5279761fca66a1e15de86621164736f6c63430007060033";

type ERC721LazyMintTransferProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721LazyMintTransferProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721LazyMintTransferProxy__factory extends ContractFactory {
  constructor(...args: ERC721LazyMintTransferProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721LazyMintTransferProxy> {
    return super.deploy(
      overrides || {}
    ) as Promise<ERC721LazyMintTransferProxy>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721LazyMintTransferProxy {
    return super.attach(address) as ERC721LazyMintTransferProxy;
  }
  override connect(signer: Signer): ERC721LazyMintTransferProxy__factory {
    return super.connect(signer) as ERC721LazyMintTransferProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721LazyMintTransferProxyInterface {
    return new utils.Interface(_abi) as ERC721LazyMintTransferProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721LazyMintTransferProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721LazyMintTransferProxy;
  }
}
