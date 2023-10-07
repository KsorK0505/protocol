/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface LibOrderDataV2Interface extends utils.Interface {
  functions: {
    "V2()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "V2"): FunctionFragment;

  encodeFunctionData(functionFragment: "V2", values?: undefined): string;

  decodeFunctionResult(functionFragment: "V2", data: BytesLike): Result;

  events: {};
}

export interface LibOrderDataV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibOrderDataV2Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    V2(overrides?: CallOverrides): Promise<[string]>;
  };

  V2(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    V2(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    V2(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    V2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}