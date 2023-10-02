/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ExchangeOrdersHolderV1,
  ExchangeOrdersHolderV1Interface,
} from "../ExchangeOrdersHolderV1";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        components: [
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
            name: "selling",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buying",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerFee",
            type: "uint256",
          },
        ],
        internalType: "struct ExchangeDomainV1.Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "add",
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
            name: "selling",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buying",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerFee",
            type: "uint256",
          },
        ],
        internalType: "struct ExchangeDomainV1.Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "exists",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610592806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632aee7a311461003b5780639f6cc6d614610064575b600080fd5b61004e6100493660046103b8565b610079565b60405161005b91906104b5565b60405180910390f35b6100776100723660046103b8565b610106565b005b60008061009361008e368590038501856103d7565b6101b2565b905061009d61020b565b50600081815260208181526040918290208251606081018452815481526001820154928101839052600290910154928101929092526101208501351480156100ea57508051610100850135145b80156100fe57508361014001358160400151145b949350505050565b610113602082018261039a565b6001600160a01b0316336001600160a01b03161461014c5760405162461bcd60e51b8152600401610143906104c3565b60405180910390fd5b600061016061008e368490038401846103d7565b6040805160608101825261010085013581526101208501356020808301918252610140909601358284019081526000948552958490529190922091518255516001820155915160029092019190915550565b80516040808201518051602091820151845160608601518051908501519685015195516000976101ee979596949593949293909290910161045b565b604051602081830303815290604052805190602001209050919050565b60405180606001604052806000815260200160008152602001600081525090565b803561023781610522565b92915050565b803561023781610539565b60006060828403121561025a57600080fd5b61026460606104d3565b90506000610272848461022c565b82525060206102838484830161038f565b60208301525060406102978482850161023d565b60408301525092915050565b600061010082840312156102b657600080fd5b6102c060806104d3565b905060006102ce848461022c565b82525060206102df8484830161038f565b60208301525060406102f384828501610248565b60408301525060a061030784828501610248565b60608301525092915050565b6000610160828403121561032657600080fd5b50919050565b6000610160828403121561033f57600080fd5b61034960806104d3565b9050600061035784846102a3565b8252506101006103698484830161038f565b60208301525061012061037e8482850161038f565b604083015250610140610307848285015b803561023781610546565b6000602082840312156103ac57600080fd5b60006100fe848461022c565b600061016082840312156103cb57600080fd5b60006100fe8484610313565b600061016082840312156103ea57600080fd5b60006100fe848461032c565b6103ff81610503565b82525050565b6103ff8161050e565b600061041b6022836104fa565b7f6f7264657220636f756c64206265206164646564206279206f776e6572206f6e8152616c7960f01b602082015260400192915050565b6103ff8161051f565b60c0810161046982896103f6565b6104766020830188610452565b61048360408301876103f6565b61049060608301866103f6565b61049d6080830185610452565b6104aa60a0830184610452565b979650505050505050565b602081016102378284610405565b602080825281016102378161040e565b60405181810167ffffffffffffffff811182821017156104f257600080fd5b604052919050565b90815260200190565b600061023782610513565b151590565b6001600160a01b031690565b90565b61052b81610503565b811461053657600080fd5b50565b6005811061053657600080fd5b61052b8161051f56fea365627a7a72315820b16c6b72e7ca769c175d42e2cc6e94fcae2628da897a6980872531275fa1280c6c6578706572696d656e74616cf564736f6c63430005110040";

type ExchangeOrdersHolderV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExchangeOrdersHolderV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExchangeOrdersHolderV1__factory extends ContractFactory {
  constructor(...args: ExchangeOrdersHolderV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ExchangeOrdersHolderV1> {
    return super.deploy(overrides || {}) as Promise<ExchangeOrdersHolderV1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ExchangeOrdersHolderV1 {
    return super.attach(address) as ExchangeOrdersHolderV1;
  }
  override connect(signer: Signer): ExchangeOrdersHolderV1__factory {
    return super.connect(signer) as ExchangeOrdersHolderV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExchangeOrdersHolderV1Interface {
    return new utils.Interface(_abi) as ExchangeOrdersHolderV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExchangeOrdersHolderV1 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ExchangeOrdersHolderV1;
  }
}
