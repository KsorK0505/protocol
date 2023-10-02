/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ExchangeOrdersHolderV1Contract
  extends Truffle.Contract<ExchangeOrdersHolderV1Instance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<ExchangeOrdersHolderV1Instance>;
}

type AllEvents = never;

export interface ExchangeOrdersHolderV1Instance
  extends Truffle.ContractInstance {
  add: {
    (
      order: {
        key: {
          owner: string;
          salt: number | BN | string;
          sellAsset: {
            token: string;
            tokenId: number | BN | string;
            assetType: number | BN | string;
          };
          buyAsset: {
            token: string;
            tokenId: number | BN | string;
            assetType: number | BN | string;
          };
        };
        selling: number | BN | string;
        buying: number | BN | string;
        sellerFee: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      order: {
        key: {
          owner: string;
          salt: number | BN | string;
          sellAsset: {
            token: string;
            tokenId: number | BN | string;
            assetType: number | BN | string;
          };
          buyAsset: {
            token: string;
            tokenId: number | BN | string;
            assetType: number | BN | string;
          };
        };
        selling: number | BN | string;
        buying: number | BN | string;
        sellerFee: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      order: {
        key: {
          owner: string;
          salt: number | BN | string;
          sellAsset: {
            token: string;
            tokenId: number | BN | string;
            assetType: number | BN | string;
          };
          buyAsset: {
            token: string;
            tokenId: number | BN | string;
            assetType: number | BN | string;
          };
        };
        selling: number | BN | string;
        buying: number | BN | string;
        sellerFee: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      order: {
        key: {
          owner: string;
          salt: number | BN | string;
          sellAsset: {
            token: string;
            tokenId: number | BN | string;
            assetType: number | BN | string;
          };
          buyAsset: {
            token: string;
            tokenId: number | BN | string;
            assetType: number | BN | string;
          };
        };
        selling: number | BN | string;
        buying: number | BN | string;
        sellerFee: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  exists(
    order: {
      key: {
        owner: string;
        salt: number | BN | string;
        sellAsset: {
          token: string;
          tokenId: number | BN | string;
          assetType: number | BN | string;
        };
        buyAsset: {
          token: string;
          tokenId: number | BN | string;
          assetType: number | BN | string;
        };
      };
      selling: number | BN | string;
      buying: number | BN | string;
      sellerFee: number | BN | string;
    },
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  methods: {
    add: {
      (
        order: {
          key: {
            owner: string;
            salt: number | BN | string;
            sellAsset: {
              token: string;
              tokenId: number | BN | string;
              assetType: number | BN | string;
            };
            buyAsset: {
              token: string;
              tokenId: number | BN | string;
              assetType: number | BN | string;
            };
          };
          selling: number | BN | string;
          buying: number | BN | string;
          sellerFee: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        order: {
          key: {
            owner: string;
            salt: number | BN | string;
            sellAsset: {
              token: string;
              tokenId: number | BN | string;
              assetType: number | BN | string;
            };
            buyAsset: {
              token: string;
              tokenId: number | BN | string;
              assetType: number | BN | string;
            };
          };
          selling: number | BN | string;
          buying: number | BN | string;
          sellerFee: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        order: {
          key: {
            owner: string;
            salt: number | BN | string;
            sellAsset: {
              token: string;
              tokenId: number | BN | string;
              assetType: number | BN | string;
            };
            buyAsset: {
              token: string;
              tokenId: number | BN | string;
              assetType: number | BN | string;
            };
          };
          selling: number | BN | string;
          buying: number | BN | string;
          sellerFee: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        order: {
          key: {
            owner: string;
            salt: number | BN | string;
            sellAsset: {
              token: string;
              tokenId: number | BN | string;
              assetType: number | BN | string;
            };
            buyAsset: {
              token: string;
              tokenId: number | BN | string;
              assetType: number | BN | string;
            };
          };
          selling: number | BN | string;
          buying: number | BN | string;
          sellerFee: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    exists(
      order: {
        key: {
          owner: string;
          salt: number | BN | string;
          sellAsset: {
            token: string;
            tokenId: number | BN | string;
            assetType: number | BN | string;
          };
          buyAsset: {
            token: string;
            tokenId: number | BN | string;
            assetType: number | BN | string;
          };
        };
        selling: number | BN | string;
        buying: number | BN | string;
        sellerFee: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
