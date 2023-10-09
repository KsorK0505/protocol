/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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
  PromiseOrValue,
} from "./common";

export interface LinearCurveInterface extends utils.Interface {
  functions: {
    "validateDelta(uint128)": FunctionFragment;
    "validateSpotPrice(uint128)": FunctionFragment;
    "getBuyInfo(uint128,uint128,uint256,uint256,uint256)": FunctionFragment;
    "getSellInfo(uint128,uint128,uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "validateDelta"
      | "validateSpotPrice"
      | "getBuyInfo"
      | "getSellInfo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "validateDelta",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "validateSpotPrice",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBuyInfo",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSellInfo",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "validateDelta",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateSpotPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBuyInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSellInfo",
    data: BytesLike
  ): Result;

  events: {};
}

export interface LinearCurve extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LinearCurveInterface;

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
    /**
     * See {ICurve-validateDelta}
     */
    validateDelta(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { valid: boolean }>;

    /**
     * See {ICurve-validateSpotPrice}
     */
    validateSpotPrice(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * See {ICurve-getBuyInfo}
     */
    getBuyInfo(
      spotPrice: PromiseOrValue<BigNumberish>,
      delta: PromiseOrValue<BigNumberish>,
      numItems: PromiseOrValue<BigNumberish>,
      feeMultiplier: PromiseOrValue<BigNumberish>,
      protocolFeeMultiplier: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, BigNumber, BigNumber] & {
        error: number;
        newSpotPrice: BigNumber;
        newDelta: BigNumber;
        inputValue: BigNumber;
        protocolFee: BigNumber;
      }
    >;

    /**
     * See {ICurve-getSellInfo}
     */
    getSellInfo(
      spotPrice: PromiseOrValue<BigNumberish>,
      delta: PromiseOrValue<BigNumberish>,
      numItems: PromiseOrValue<BigNumberish>,
      feeMultiplier: PromiseOrValue<BigNumberish>,
      protocolFeeMultiplier: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, BigNumber, BigNumber] & {
        error: number;
        newSpotPrice: BigNumber;
        newDelta: BigNumber;
        outputValue: BigNumber;
        protocolFee: BigNumber;
      }
    >;
  };

  /**
   * See {ICurve-validateDelta}
   */
  validateDelta(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * See {ICurve-validateSpotPrice}
   */
  validateSpotPrice(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * See {ICurve-getBuyInfo}
   */
  getBuyInfo(
    spotPrice: PromiseOrValue<BigNumberish>,
    delta: PromiseOrValue<BigNumberish>,
    numItems: PromiseOrValue<BigNumberish>,
    feeMultiplier: PromiseOrValue<BigNumberish>,
    protocolFeeMultiplier: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber, BigNumber, BigNumber, BigNumber] & {
      error: number;
      newSpotPrice: BigNumber;
      newDelta: BigNumber;
      inputValue: BigNumber;
      protocolFee: BigNumber;
    }
  >;

  /**
   * See {ICurve-getSellInfo}
   */
  getSellInfo(
    spotPrice: PromiseOrValue<BigNumberish>,
    delta: PromiseOrValue<BigNumberish>,
    numItems: PromiseOrValue<BigNumberish>,
    feeMultiplier: PromiseOrValue<BigNumberish>,
    protocolFeeMultiplier: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber, BigNumber, BigNumber, BigNumber] & {
      error: number;
      newSpotPrice: BigNumber;
      newDelta: BigNumber;
      outputValue: BigNumber;
      protocolFee: BigNumber;
    }
  >;

  callStatic: {
    /**
     * See {ICurve-validateDelta}
     */
    validateDelta(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * See {ICurve-validateSpotPrice}
     */
    validateSpotPrice(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * See {ICurve-getBuyInfo}
     */
    getBuyInfo(
      spotPrice: PromiseOrValue<BigNumberish>,
      delta: PromiseOrValue<BigNumberish>,
      numItems: PromiseOrValue<BigNumberish>,
      feeMultiplier: PromiseOrValue<BigNumberish>,
      protocolFeeMultiplier: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, BigNumber, BigNumber] & {
        error: number;
        newSpotPrice: BigNumber;
        newDelta: BigNumber;
        inputValue: BigNumber;
        protocolFee: BigNumber;
      }
    >;

    /**
     * See {ICurve-getSellInfo}
     */
    getSellInfo(
      spotPrice: PromiseOrValue<BigNumberish>,
      delta: PromiseOrValue<BigNumberish>,
      numItems: PromiseOrValue<BigNumberish>,
      feeMultiplier: PromiseOrValue<BigNumberish>,
      protocolFeeMultiplier: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, BigNumber, BigNumber] & {
        error: number;
        newSpotPrice: BigNumber;
        newDelta: BigNumber;
        outputValue: BigNumber;
        protocolFee: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    /**
     * See {ICurve-validateDelta}
     */
    validateDelta(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {ICurve-validateSpotPrice}
     */
    validateSpotPrice(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {ICurve-getBuyInfo}
     */
    getBuyInfo(
      spotPrice: PromiseOrValue<BigNumberish>,
      delta: PromiseOrValue<BigNumberish>,
      numItems: PromiseOrValue<BigNumberish>,
      feeMultiplier: PromiseOrValue<BigNumberish>,
      protocolFeeMultiplier: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {ICurve-getSellInfo}
     */
    getSellInfo(
      spotPrice: PromiseOrValue<BigNumberish>,
      delta: PromiseOrValue<BigNumberish>,
      numItems: PromiseOrValue<BigNumberish>,
      feeMultiplier: PromiseOrValue<BigNumberish>,
      protocolFeeMultiplier: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * See {ICurve-validateDelta}
     */
    validateDelta(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {ICurve-validateSpotPrice}
     */
    validateSpotPrice(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {ICurve-getBuyInfo}
     */
    getBuyInfo(
      spotPrice: PromiseOrValue<BigNumberish>,
      delta: PromiseOrValue<BigNumberish>,
      numItems: PromiseOrValue<BigNumberish>,
      feeMultiplier: PromiseOrValue<BigNumberish>,
      protocolFeeMultiplier: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {ICurve-getSellInfo}
     */
    getSellInfo(
      spotPrice: PromiseOrValue<BigNumberish>,
      delta: PromiseOrValue<BigNumberish>,
      numItems: PromiseOrValue<BigNumberish>,
      feeMultiplier: PromiseOrValue<BigNumberish>,
      protocolFeeMultiplier: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
