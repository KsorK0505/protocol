/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface AuctionHouseBase1155Interface extends utils.Interface {
  functions: {
    "auctionId()": FunctionFragment;
    "changeMinimalDuration(uint96)": FunctionFragment;
    "changeMinimalStep(uint96)": FunctionFragment;
    "minimalDuration()": FunctionFragment;
    "minimalStepBasePoint()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "royaltiesRegistry()": FunctionFragment;
    "setRoyaltiesRegistry(address)": FunctionFragment;
    "setTransferProxy(bytes4,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawFaultyBid(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "auctionId"
      | "changeMinimalDuration"
      | "changeMinimalStep"
      | "minimalDuration"
      | "minimalStepBasePoint"
      | "owner"
      | "renounceOwnership"
      | "royaltiesRegistry"
      | "setRoyaltiesRegistry"
      | "setTransferProxy"
      | "transferOwnership"
      | "withdrawFaultyBid"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "auctionId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeMinimalDuration",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeMinimalStep",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "minimalDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimalStepBasePoint",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "royaltiesRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRoyaltiesRegistry",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTransferProxy",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFaultyBid",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "auctionId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeMinimalDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeMinimalStep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimalDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimalStepBasePoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltiesRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoyaltiesRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTransferProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFaultyBid",
    data: BytesLike
  ): Result;

  events: {
    "AuctionBuyOut(uint256,address)": EventFragment;
    "AuctionCancelled(uint256)": EventFragment;
    "AuctionCreated(uint256,address)": EventFragment;
    "AuctionFinished(uint256)": EventFragment;
    "AvailableToWithdraw(address,uint256,uint256)": EventFragment;
    "BidPlaced(uint256,address,uint256)": EventFragment;
    "MinimalDurationChanged(uint256,uint256)": EventFragment;
    "MinimalStepChanged(uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ProxyChange(bytes4,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionBuyOut"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionFinished"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AvailableToWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BidPlaced"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinimalDurationChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinimalStepChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProxyChange"): EventFragment;
}

export interface AuctionBuyOutEventObject {
  auctionId: BigNumber;
  buyer: string;
}
export type AuctionBuyOutEvent = TypedEvent<
  [BigNumber, string],
  AuctionBuyOutEventObject
>;

export type AuctionBuyOutEventFilter = TypedEventFilter<AuctionBuyOutEvent>;

export interface AuctionCancelledEventObject {
  auctionId: BigNumber;
}
export type AuctionCancelledEvent = TypedEvent<
  [BigNumber],
  AuctionCancelledEventObject
>;

export type AuctionCancelledEventFilter =
  TypedEventFilter<AuctionCancelledEvent>;

export interface AuctionCreatedEventObject {
  auctionId: BigNumber;
  seller: string;
}
export type AuctionCreatedEvent = TypedEvent<
  [BigNumber, string],
  AuctionCreatedEventObject
>;

export type AuctionCreatedEventFilter = TypedEventFilter<AuctionCreatedEvent>;

export interface AuctionFinishedEventObject {
  auctionId: BigNumber;
}
export type AuctionFinishedEvent = TypedEvent<
  [BigNumber],
  AuctionFinishedEventObject
>;

export type AuctionFinishedEventFilter = TypedEventFilter<AuctionFinishedEvent>;

export interface AvailableToWithdrawEventObject {
  owner: string;
  added: BigNumber;
  total: BigNumber;
}
export type AvailableToWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  AvailableToWithdrawEventObject
>;

export type AvailableToWithdrawEventFilter =
  TypedEventFilter<AvailableToWithdrawEvent>;

export interface BidPlacedEventObject {
  auctionId: BigNumber;
  buyer: string;
  endTime: BigNumber;
}
export type BidPlacedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  BidPlacedEventObject
>;

export type BidPlacedEventFilter = TypedEventFilter<BidPlacedEvent>;

export interface MinimalDurationChangedEventObject {
  oldValue: BigNumber;
  newValue: BigNumber;
}
export type MinimalDurationChangedEvent = TypedEvent<
  [BigNumber, BigNumber],
  MinimalDurationChangedEventObject
>;

export type MinimalDurationChangedEventFilter =
  TypedEventFilter<MinimalDurationChangedEvent>;

export interface MinimalStepChangedEventObject {
  oldValue: BigNumber;
  newValue: BigNumber;
}
export type MinimalStepChangedEvent = TypedEvent<
  [BigNumber, BigNumber],
  MinimalStepChangedEventObject
>;

export type MinimalStepChangedEventFilter =
  TypedEventFilter<MinimalStepChangedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ProxyChangeEventObject {
  assetType: string;
  proxy: string;
}
export type ProxyChangeEvent = TypedEvent<
  [string, string],
  ProxyChangeEventObject
>;

export type ProxyChangeEventFilter = TypedEventFilter<ProxyChangeEvent>;

export interface AuctionHouseBase1155 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AuctionHouseBase1155Interface;

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
    auctionId(overrides?: CallOverrides): Promise<[BigNumber]>;

    changeMinimalDuration(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeMinimalStep(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    minimalDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    minimalStepBasePoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    royaltiesRegistry(overrides?: CallOverrides): Promise<[string]>;

    setRoyaltiesRegistry(
      newRoyaltiesRegistry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTransferProxy(
      assetType: PromiseOrValue<BytesLike>,
      proxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Used to withdraw faulty bids (bids that failed to return after out-bidding)
     */
    withdrawFaultyBid(
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  auctionId(overrides?: CallOverrides): Promise<BigNumber>;

  changeMinimalDuration(
    newValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeMinimalStep(
    newValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  minimalDuration(overrides?: CallOverrides): Promise<BigNumber>;

  minimalStepBasePoint(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  royaltiesRegistry(overrides?: CallOverrides): Promise<string>;

  setRoyaltiesRegistry(
    newRoyaltiesRegistry: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTransferProxy(
    assetType: PromiseOrValue<BytesLike>,
    proxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Used to withdraw faulty bids (bids that failed to return after out-bidding)
   */
  withdrawFaultyBid(
    _to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    auctionId(overrides?: CallOverrides): Promise<BigNumber>;

    changeMinimalDuration(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    changeMinimalStep(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    minimalDuration(overrides?: CallOverrides): Promise<BigNumber>;

    minimalStepBasePoint(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    royaltiesRegistry(overrides?: CallOverrides): Promise<string>;

    setRoyaltiesRegistry(
      newRoyaltiesRegistry: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTransferProxy(
      assetType: PromiseOrValue<BytesLike>,
      proxy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Used to withdraw faulty bids (bids that failed to return after out-bidding)
     */
    withdrawFaultyBid(
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuctionBuyOut(uint256,address)"(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      buyer?: null
    ): AuctionBuyOutEventFilter;
    AuctionBuyOut(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      buyer?: null
    ): AuctionBuyOutEventFilter;

    "AuctionCancelled(uint256)"(
      auctionId?: PromiseOrValue<BigNumberish> | null
    ): AuctionCancelledEventFilter;
    AuctionCancelled(
      auctionId?: PromiseOrValue<BigNumberish> | null
    ): AuctionCancelledEventFilter;

    "AuctionCreated(uint256,address)"(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      seller?: null
    ): AuctionCreatedEventFilter;
    AuctionCreated(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      seller?: null
    ): AuctionCreatedEventFilter;

    "AuctionFinished(uint256)"(
      auctionId?: PromiseOrValue<BigNumberish> | null
    ): AuctionFinishedEventFilter;
    AuctionFinished(
      auctionId?: PromiseOrValue<BigNumberish> | null
    ): AuctionFinishedEventFilter;

    "AvailableToWithdraw(address,uint256,uint256)"(
      owner?: PromiseOrValue<string> | null,
      added?: null,
      total?: null
    ): AvailableToWithdrawEventFilter;
    AvailableToWithdraw(
      owner?: PromiseOrValue<string> | null,
      added?: null,
      total?: null
    ): AvailableToWithdrawEventFilter;

    "BidPlaced(uint256,address,uint256)"(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      buyer?: null,
      endTime?: null
    ): BidPlacedEventFilter;
    BidPlaced(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      buyer?: null,
      endTime?: null
    ): BidPlacedEventFilter;

    "MinimalDurationChanged(uint256,uint256)"(
      oldValue?: null,
      newValue?: null
    ): MinimalDurationChangedEventFilter;
    MinimalDurationChanged(
      oldValue?: null,
      newValue?: null
    ): MinimalDurationChangedEventFilter;

    "MinimalStepChanged(uint256,uint256)"(
      oldValue?: null,
      newValue?: null
    ): MinimalStepChangedEventFilter;
    MinimalStepChanged(
      oldValue?: null,
      newValue?: null
    ): MinimalStepChangedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "ProxyChange(bytes4,address)"(
      assetType?: PromiseOrValue<BytesLike> | null,
      proxy?: null
    ): ProxyChangeEventFilter;
    ProxyChange(
      assetType?: PromiseOrValue<BytesLike> | null,
      proxy?: null
    ): ProxyChangeEventFilter;
  };

  estimateGas: {
    auctionId(overrides?: CallOverrides): Promise<BigNumber>;

    changeMinimalDuration(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeMinimalStep(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    minimalDuration(overrides?: CallOverrides): Promise<BigNumber>;

    minimalStepBasePoint(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    royaltiesRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    setRoyaltiesRegistry(
      newRoyaltiesRegistry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTransferProxy(
      assetType: PromiseOrValue<BytesLike>,
      proxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Used to withdraw faulty bids (bids that failed to return after out-bidding)
     */
    withdrawFaultyBid(
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    auctionId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeMinimalDuration(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeMinimalStep(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    minimalDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimalStepBasePoint(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    royaltiesRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRoyaltiesRegistry(
      newRoyaltiesRegistry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTransferProxy(
      assetType: PromiseOrValue<BytesLike>,
      proxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Used to withdraw faulty bids (bids that failed to return after out-bidding)
     */
    withdrawFaultyBid(
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}