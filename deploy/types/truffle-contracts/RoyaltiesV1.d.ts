/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface RoyaltiesV1Contract
  extends Truffle.Contract<RoyaltiesV1Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<RoyaltiesV1Instance>;
}

export interface SecondarySaleFees {
  name: "SecondarySaleFees";
  args: {
    tokenId: BN;
    recipients: string[];
    bps: BN[];
    0: BN;
    1: string[];
    2: BN[];
  };
}

type AllEvents = SecondarySaleFees;

export interface RoyaltiesV1Instance extends Truffle.ContractInstance {
  getFeeRecipients(
    id: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string[]>;

  getFeeBps(
    id: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN[]>;

  methods: {
    getFeeRecipients(
      id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string[]>;

    getFeeBps(
      id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN[]>;
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