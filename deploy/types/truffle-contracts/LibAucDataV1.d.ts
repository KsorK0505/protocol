/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface LibAucDataV1Contract
  extends Truffle.Contract<LibAucDataV1Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<LibAucDataV1Instance>;
}

type AllEvents = never;

export interface LibAucDataV1Instance extends Truffle.ContractInstance {
  V1(txDetails?: Truffle.TransactionDetails): Promise<string>;

  methods: {
    V1(txDetails?: Truffle.TransactionDetails): Promise<string>;
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
