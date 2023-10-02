/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface EIP712MetaTransactionContract
  extends Truffle.Contract<EIP712MetaTransactionInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<EIP712MetaTransactionInstance>;
}

export interface MetaTransactionExecuted {
  name: "MetaTransactionExecuted";
  args: {
    userAddress: string;
    relayerAddress: string;
    functionSignature: string;
    0: string;
    1: string;
    2: string;
  };
}

type AllEvents = MetaTransactionExecuted;

export interface EIP712MetaTransactionInstance
  extends Truffle.ContractInstance {
  executeMetaTransaction: {
    (
      userAddress: string,
      functionSignature: string,
      sigR: string,
      sigS: string,
      sigV: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      userAddress: string,
      functionSignature: string,
      sigR: string,
      sigS: string,
      sigV: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    sendTransaction(
      userAddress: string,
      functionSignature: string,
      sigR: string,
      sigS: string,
      sigV: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      userAddress: string,
      functionSignature: string,
      sigR: string,
      sigS: string,
      sigV: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getNonce(user: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;

  methods: {
    executeMetaTransaction: {
      (
        userAddress: string,
        functionSignature: string,
        sigR: string,
        sigS: string,
        sigV: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        userAddress: string,
        functionSignature: string,
        sigR: string,
        sigS: string,
        sigV: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      sendTransaction(
        userAddress: string,
        functionSignature: string,
        sigR: string,
        sigS: string,
        sigV: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        userAddress: string,
        functionSignature: string,
        sigR: string,
        sigS: string,
        sigV: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getNonce(user: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;
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
