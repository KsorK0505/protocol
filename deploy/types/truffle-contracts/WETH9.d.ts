/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface WETH9Contract extends Truffle.Contract<WETH9Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<WETH9Instance>;
}

export interface Approval {
  name: "Approval";
  args: {
    src: string;
    guy: string;
    wad: BN;
    0: string;
    1: string;
    2: BN;
  };
}

export interface Transfer {
  name: "Transfer";
  args: {
    src: string;
    dst: string;
    wad: BN;
    0: string;
    1: string;
    2: BN;
  };
}

export interface Deposit {
  name: "Deposit";
  args: {
    dst: string;
    wad: BN;
    0: string;
    1: BN;
  };
}

export interface Withdrawal {
  name: "Withdrawal";
  args: {
    src: string;
    wad: BN;
    0: string;
    1: BN;
  };
}

type AllEvents = Approval | Transfer | Deposit | Withdrawal;

export interface WETH9Instance extends Truffle.ContractInstance {
  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  decimals(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  balanceOf(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;

  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

  allowance(
    arg0: string,
    arg1: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  deposit: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  withdraw: {
    (
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  approve: {
    (
      guy: string,
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      guy: string,
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      guy: string,
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      guy: string,
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transfer: {
    (
      dst: string,
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      dst: string,
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      dst: string,
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      dst: string,
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transferFrom: {
    (
      src: string,
      dst: string,
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      src: string,
      dst: string,
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      src: string,
      dst: string,
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      src: string,
      dst: string,
      wad: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    name(txDetails?: Truffle.TransactionDetails): Promise<string>;

    decimals(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    balanceOf(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

    allowance(
      arg0: string,
      arg1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    deposit: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    withdraw: {
      (
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    approve: {
      (
        guy: string,
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        guy: string,
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        guy: string,
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        guy: string,
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    transfer: {
      (
        dst: string,
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        dst: string,
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        dst: string,
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        dst: string,
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    transferFrom: {
      (
        src: string,
        dst: string,
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        src: string,
        dst: string,
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        src: string,
        dst: string,
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        src: string,
        dst: string,
        wad: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
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
