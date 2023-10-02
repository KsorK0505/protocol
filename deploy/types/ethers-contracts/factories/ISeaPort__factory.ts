/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISeaPort, ISeaPortInterface } from "../ISeaPort";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "offerer",
                type: "address",
              },
              {
                internalType: "address",
                name: "zone",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "enum LibSeaPort.ItemType",
                    name: "itemType",
                    type: "uint8",
                  },
                  {
                    internalType: "address",
                    name: "token",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "identifierOrCriteria",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "startAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "endAmount",
                    type: "uint256",
                  },
                ],
                internalType: "struct LibSeaPort.OfferItem[]",
                name: "offer",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "enum LibSeaPort.ItemType",
                    name: "itemType",
                    type: "uint8",
                  },
                  {
                    internalType: "address",
                    name: "token",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "identifierOrCriteria",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "startAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "endAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "address payable",
                    name: "recipient",
                    type: "address",
                  },
                ],
                internalType: "struct LibSeaPort.ConsiderationItem[]",
                name: "consideration",
                type: "tuple[]",
              },
              {
                internalType: "enum LibSeaPort.OrderType",
                name: "orderType",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "startTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endTime",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "zoneHash",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "salt",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "conduitKey",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "totalOriginalConsiderationItems",
                type: "uint256",
              },
            ],
            internalType: "struct LibSeaPort.OrderParameters",
            name: "parameters",
            type: "tuple",
          },
          {
            internalType: "uint120",
            name: "numerator",
            type: "uint120",
          },
          {
            internalType: "uint120",
            name: "denominator",
            type: "uint120",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
        ],
        internalType: "struct LibSeaPort.AdvancedOrder",
        name: "advancedOrder",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "orderIndex",
            type: "uint256",
          },
          {
            internalType: "enum LibSeaPort.Side",
            name: "side",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "bytes32[]",
            name: "criteriaProof",
            type: "bytes32[]",
          },
        ],
        internalType: "struct LibSeaPort.CriteriaResolver[]",
        name: "criteriaResolvers",
        type: "tuple[]",
      },
      {
        internalType: "bytes32",
        name: "fulfillerConduitKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "fulfillAdvancedOrder",
    outputs: [
      {
        internalType: "bool",
        name: "fulfilled",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "offerer",
                type: "address",
              },
              {
                internalType: "address",
                name: "zone",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "enum LibSeaPort.ItemType",
                    name: "itemType",
                    type: "uint8",
                  },
                  {
                    internalType: "address",
                    name: "token",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "identifierOrCriteria",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "startAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "endAmount",
                    type: "uint256",
                  },
                ],
                internalType: "struct LibSeaPort.OfferItem[]",
                name: "offer",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "enum LibSeaPort.ItemType",
                    name: "itemType",
                    type: "uint8",
                  },
                  {
                    internalType: "address",
                    name: "token",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "identifierOrCriteria",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "startAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "endAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "address payable",
                    name: "recipient",
                    type: "address",
                  },
                ],
                internalType: "struct LibSeaPort.ConsiderationItem[]",
                name: "consideration",
                type: "tuple[]",
              },
              {
                internalType: "enum LibSeaPort.OrderType",
                name: "orderType",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "startTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endTime",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "zoneHash",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "salt",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "conduitKey",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "totalOriginalConsiderationItems",
                type: "uint256",
              },
            ],
            internalType: "struct LibSeaPort.OrderParameters",
            name: "parameters",
            type: "tuple",
          },
          {
            internalType: "uint120",
            name: "numerator",
            type: "uint120",
          },
          {
            internalType: "uint120",
            name: "denominator",
            type: "uint120",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
        ],
        internalType: "struct LibSeaPort.AdvancedOrder[]",
        name: "advancedOrders",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "orderIndex",
            type: "uint256",
          },
          {
            internalType: "enum LibSeaPort.Side",
            name: "side",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "bytes32[]",
            name: "criteriaProof",
            type: "bytes32[]",
          },
        ],
        internalType: "struct LibSeaPort.CriteriaResolver[]",
        name: "criteriaResolvers",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "orderIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "itemIndex",
            type: "uint256",
          },
        ],
        internalType: "struct LibSeaPort.FulfillmentComponent[][]",
        name: "offerFulfillments",
        type: "tuple[][]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "orderIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "itemIndex",
            type: "uint256",
          },
        ],
        internalType: "struct LibSeaPort.FulfillmentComponent[][]",
        name: "considerationFulfillments",
        type: "tuple[][]",
      },
      {
        internalType: "bytes32",
        name: "fulfillerConduitKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maximumFulfilled",
        type: "uint256",
      },
    ],
    name: "fulfillAvailableAdvancedOrders",
    outputs: [
      {
        internalType: "bool[]",
        name: "availableOrders",
        type: "bool[]",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "enum LibSeaPort.ItemType",
                name: "itemType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "identifier",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "address payable",
                name: "recipient",
                type: "address",
              },
            ],
            internalType: "struct LibSeaPort.ReceivedItem",
            name: "item",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "offerer",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "conduitKey",
            type: "bytes32",
          },
        ],
        internalType: "struct LibSeaPort.Execution[]",
        name: "executions",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "considerationToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "considerationIdentifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "considerationAmount",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "offerer",
            type: "address",
          },
          {
            internalType: "address",
            name: "zone",
            type: "address",
          },
          {
            internalType: "address",
            name: "offerToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "offerIdentifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "offerAmount",
            type: "uint256",
          },
          {
            internalType: "enum LibSeaPort.BasicOrderType",
            name: "basicOrderType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "zoneHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "offererConduitKey",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "fulfillerConduitKey",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "totalOriginalAdditionalRecipients",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "address payable",
                name: "recipient",
                type: "address",
              },
            ],
            internalType: "struct LibSeaPort.AdditionalRecipient[]",
            name: "additionalRecipients",
            type: "tuple[]",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct LibSeaPort.BasicOrderParameters",
        name: "parameters",
        type: "tuple",
      },
    ],
    name: "fulfillBasicOrder",
    outputs: [
      {
        internalType: "bool",
        name: "fulfilled",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class ISeaPort__factory {
  static readonly abi = _abi;
  static createInterface(): ISeaPortInterface {
    return new utils.Interface(_abi) as ISeaPortInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISeaPort {
    return new Contract(address, _abi, signerOrProvider) as ISeaPort;
  }
}
