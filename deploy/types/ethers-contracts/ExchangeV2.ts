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
  PayableOverrides,
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

export declare namespace LibAsset {
  export type AssetTypeStruct = {
    assetClass: PromiseOrValue<BytesLike>;
    data: PromiseOrValue<BytesLike>;
  };

  export type AssetTypeStructOutput = [string, string] & {
    assetClass: string;
    data: string;
  };

  export type AssetStruct = {
    assetType: LibAsset.AssetTypeStruct;
    value: PromiseOrValue<BigNumberish>;
  };

  export type AssetStructOutput = [
    LibAsset.AssetTypeStructOutput,
    BigNumber
  ] & { assetType: LibAsset.AssetTypeStructOutput; value: BigNumber };
}

export declare namespace LibOrder {
  export type OrderStruct = {
    maker: PromiseOrValue<string>;
    makeAsset: LibAsset.AssetStruct;
    taker: PromiseOrValue<string>;
    takeAsset: LibAsset.AssetStruct;
    salt: PromiseOrValue<BigNumberish>;
    start: PromiseOrValue<BigNumberish>;
    end: PromiseOrValue<BigNumberish>;
    dataType: PromiseOrValue<BytesLike>;
    data: PromiseOrValue<BytesLike>;
  };

  export type OrderStructOutput = [
    string,
    LibAsset.AssetStructOutput,
    string,
    LibAsset.AssetStructOutput,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
  ] & {
    maker: string;
    makeAsset: LibAsset.AssetStructOutput;
    taker: string;
    takeAsset: LibAsset.AssetStructOutput;
    salt: BigNumber;
    start: BigNumber;
    end: BigNumber;
    dataType: string;
    data: string;
  };
}

export declare namespace LibDirectTransfer {
  export type AcceptBidStruct = {
    bidMaker: PromiseOrValue<string>;
    bidNftAmount: PromiseOrValue<BigNumberish>;
    nftAssetClass: PromiseOrValue<BytesLike>;
    nftData: PromiseOrValue<BytesLike>;
    bidPaymentAmount: PromiseOrValue<BigNumberish>;
    paymentToken: PromiseOrValue<string>;
    bidSalt: PromiseOrValue<BigNumberish>;
    bidStart: PromiseOrValue<BigNumberish>;
    bidEnd: PromiseOrValue<BigNumberish>;
    bidDataType: PromiseOrValue<BytesLike>;
    bidData: PromiseOrValue<BytesLike>;
    bidSignature: PromiseOrValue<BytesLike>;
    sellOrderPaymentAmount: PromiseOrValue<BigNumberish>;
    sellOrderNftAmount: PromiseOrValue<BigNumberish>;
    sellOrderData: PromiseOrValue<BytesLike>;
  };

  export type AcceptBidStructOutput = [
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string
  ] & {
    bidMaker: string;
    bidNftAmount: BigNumber;
    nftAssetClass: string;
    nftData: string;
    bidPaymentAmount: BigNumber;
    paymentToken: string;
    bidSalt: BigNumber;
    bidStart: BigNumber;
    bidEnd: BigNumber;
    bidDataType: string;
    bidData: string;
    bidSignature: string;
    sellOrderPaymentAmount: BigNumber;
    sellOrderNftAmount: BigNumber;
    sellOrderData: string;
  };

  export type PurchaseStruct = {
    sellOrderMaker: PromiseOrValue<string>;
    sellOrderNftAmount: PromiseOrValue<BigNumberish>;
    nftAssetClass: PromiseOrValue<BytesLike>;
    nftData: PromiseOrValue<BytesLike>;
    sellOrderPaymentAmount: PromiseOrValue<BigNumberish>;
    paymentToken: PromiseOrValue<string>;
    sellOrderSalt: PromiseOrValue<BigNumberish>;
    sellOrderStart: PromiseOrValue<BigNumberish>;
    sellOrderEnd: PromiseOrValue<BigNumberish>;
    sellOrderDataType: PromiseOrValue<BytesLike>;
    sellOrderData: PromiseOrValue<BytesLike>;
    sellOrderSignature: PromiseOrValue<BytesLike>;
    buyOrderPaymentAmount: PromiseOrValue<BigNumberish>;
    buyOrderNftAmount: PromiseOrValue<BigNumberish>;
    buyOrderData: PromiseOrValue<BytesLike>;
  };

  export type PurchaseStructOutput = [
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string
  ] & {
    sellOrderMaker: string;
    sellOrderNftAmount: BigNumber;
    nftAssetClass: string;
    nftData: string;
    sellOrderPaymentAmount: BigNumber;
    paymentToken: string;
    sellOrderSalt: BigNumber;
    sellOrderStart: BigNumber;
    sellOrderEnd: BigNumber;
    sellOrderDataType: string;
    sellOrderData: string;
    sellOrderSignature: string;
    buyOrderPaymentAmount: BigNumber;
    buyOrderNftAmount: BigNumber;
    buyOrderData: string;
  };
}

export interface ExchangeV2Interface extends utils.Interface {
  functions: {
    "cancel((address,((bytes4,bytes),uint256),address,((bytes4,bytes),uint256),uint256,uint256,uint256,bytes4,bytes))": FunctionFragment;
    "directAcceptBid((address,uint256,bytes4,bytes,uint256,address,uint256,uint256,uint256,bytes4,bytes,bytes,uint256,uint256,bytes))": FunctionFragment;
    "directPurchase((address,uint256,bytes4,bytes,uint256,address,uint256,uint256,uint256,bytes4,bytes,bytes,uint256,uint256,bytes))": FunctionFragment;
    "fills(bytes32)": FunctionFragment;
    "matchOrders((address,((bytes4,bytes),uint256),address,((bytes4,bytes),uint256),uint256,uint256,uint256,bytes4,bytes),bytes,(address,((bytes4,bytes),uint256),address,((bytes4,bytes),uint256),uint256,uint256,uint256,bytes4,bytes),bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "royaltiesRegistry()": FunctionFragment;
    "setAssetMatcher(bytes4,address)": FunctionFragment;
    "setRoyaltiesRegistry(address)": FunctionFragment;
    "setTransferProxy(bytes4,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "__ExchangeV2_init(address,address,uint256,address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancel"
      | "directAcceptBid"
      | "directPurchase"
      | "fills"
      | "matchOrders"
      | "owner"
      | "renounceOwnership"
      | "royaltiesRegistry"
      | "setAssetMatcher"
      | "setRoyaltiesRegistry"
      | "setTransferProxy"
      | "transferOwnership"
      | "__ExchangeV2_init"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancel",
    values: [LibOrder.OrderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "directAcceptBid",
    values: [LibDirectTransfer.AcceptBidStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "directPurchase",
    values: [LibDirectTransfer.PurchaseStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "fills",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "matchOrders",
    values: [
      LibOrder.OrderStruct,
      PromiseOrValue<BytesLike>,
      LibOrder.OrderStruct,
      PromiseOrValue<BytesLike>
    ]
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
    functionFragment: "setAssetMatcher",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
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
    functionFragment: "__ExchangeV2_init",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "directAcceptBid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "directPurchase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fills", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "matchOrders",
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
    functionFragment: "setAssetMatcher",
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
    functionFragment: "__ExchangeV2_init",
    data: BytesLike
  ): Result;

  events: {
    "Cancel(bytes32)": EventFragment;
    "Match(bytes32,bytes32,uint256,uint256)": EventFragment;
    "MatcherChange(bytes4,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ProxyChange(bytes4,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Cancel"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Match"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MatcherChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProxyChange"): EventFragment;
}

export interface CancelEventObject {
  hash: string;
}
export type CancelEvent = TypedEvent<[string], CancelEventObject>;

export type CancelEventFilter = TypedEventFilter<CancelEvent>;

export interface MatchEventObject {
  leftHash: string;
  rightHash: string;
  newLeftFill: BigNumber;
  newRightFill: BigNumber;
}
export type MatchEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  MatchEventObject
>;

export type MatchEventFilter = TypedEventFilter<MatchEvent>;

export interface MatcherChangeEventObject {
  assetType: string;
  matcher: string;
}
export type MatcherChangeEvent = TypedEvent<
  [string, string],
  MatcherChangeEventObject
>;

export type MatcherChangeEventFilter = TypedEventFilter<MatcherChangeEvent>;

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

export interface ExchangeV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExchangeV2Interface;

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
    cancel(
      order: LibOrder.OrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    directAcceptBid(
      direct: LibDirectTransfer.AcceptBidStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    directPurchase(
      direct: LibDirectTransfer.PurchaseStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fills(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    matchOrders(
      orderLeft: LibOrder.OrderStruct,
      signatureLeft: PromiseOrValue<BytesLike>,
      orderRight: LibOrder.OrderStruct,
      signatureRight: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

    setAssetMatcher(
      assetType: PromiseOrValue<BytesLike>,
      matcher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

    __ExchangeV2_init(
      _transferProxy: PromiseOrValue<string>,
      _erc20TransferProxy: PromiseOrValue<string>,
      newProtocolFee: PromiseOrValue<BigNumberish>,
      newDefaultFeeReceiver: PromiseOrValue<string>,
      newRoyaltiesProvider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  cancel(
    order: LibOrder.OrderStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  directAcceptBid(
    direct: LibDirectTransfer.AcceptBidStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  directPurchase(
    direct: LibDirectTransfer.PurchaseStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fills(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  matchOrders(
    orderLeft: LibOrder.OrderStruct,
    signatureLeft: PromiseOrValue<BytesLike>,
    orderRight: LibOrder.OrderStruct,
    signatureRight: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

  setAssetMatcher(
    assetType: PromiseOrValue<BytesLike>,
    matcher: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

  __ExchangeV2_init(
    _transferProxy: PromiseOrValue<string>,
    _erc20TransferProxy: PromiseOrValue<string>,
    newProtocolFee: PromiseOrValue<BigNumberish>,
    newDefaultFeeReceiver: PromiseOrValue<string>,
    newRoyaltiesProvider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancel(
      order: LibOrder.OrderStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    directAcceptBid(
      direct: LibDirectTransfer.AcceptBidStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    directPurchase(
      direct: LibDirectTransfer.PurchaseStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    fills(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    matchOrders(
      orderLeft: LibOrder.OrderStruct,
      signatureLeft: PromiseOrValue<BytesLike>,
      orderRight: LibOrder.OrderStruct,
      signatureRight: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    royaltiesRegistry(overrides?: CallOverrides): Promise<string>;

    setAssetMatcher(
      assetType: PromiseOrValue<BytesLike>,
      matcher: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

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

    __ExchangeV2_init(
      _transferProxy: PromiseOrValue<string>,
      _erc20TransferProxy: PromiseOrValue<string>,
      newProtocolFee: PromiseOrValue<BigNumberish>,
      newDefaultFeeReceiver: PromiseOrValue<string>,
      newRoyaltiesProvider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Cancel(bytes32)"(hash?: null): CancelEventFilter;
    Cancel(hash?: null): CancelEventFilter;

    "Match(bytes32,bytes32,uint256,uint256)"(
      leftHash?: null,
      rightHash?: null,
      newLeftFill?: null,
      newRightFill?: null
    ): MatchEventFilter;
    Match(
      leftHash?: null,
      rightHash?: null,
      newLeftFill?: null,
      newRightFill?: null
    ): MatchEventFilter;

    "MatcherChange(bytes4,address)"(
      assetType?: PromiseOrValue<BytesLike> | null,
      matcher?: null
    ): MatcherChangeEventFilter;
    MatcherChange(
      assetType?: PromiseOrValue<BytesLike> | null,
      matcher?: null
    ): MatcherChangeEventFilter;

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
    cancel(
      order: LibOrder.OrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    directAcceptBid(
      direct: LibDirectTransfer.AcceptBidStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    directPurchase(
      direct: LibDirectTransfer.PurchaseStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fills(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    matchOrders(
      orderLeft: LibOrder.OrderStruct,
      signatureLeft: PromiseOrValue<BytesLike>,
      orderRight: LibOrder.OrderStruct,
      signatureRight: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

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

    setAssetMatcher(
      assetType: PromiseOrValue<BytesLike>,
      matcher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

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

    __ExchangeV2_init(
      _transferProxy: PromiseOrValue<string>,
      _erc20TransferProxy: PromiseOrValue<string>,
      newProtocolFee: PromiseOrValue<BigNumberish>,
      newDefaultFeeReceiver: PromiseOrValue<string>,
      newRoyaltiesProvider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancel(
      order: LibOrder.OrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    directAcceptBid(
      direct: LibDirectTransfer.AcceptBidStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    directPurchase(
      direct: LibDirectTransfer.PurchaseStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fills(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    matchOrders(
      orderLeft: LibOrder.OrderStruct,
      signatureLeft: PromiseOrValue<BytesLike>,
      orderRight: LibOrder.OrderStruct,
      signatureRight: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
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

    setAssetMatcher(
      assetType: PromiseOrValue<BytesLike>,
      matcher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

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

    __ExchangeV2_init(
      _transferProxy: PromiseOrValue<string>,
      _erc20TransferProxy: PromiseOrValue<string>,
      newProtocolFee: PromiseOrValue<BigNumberish>,
      newDefaultFeeReceiver: PromiseOrValue<string>,
      newRoyaltiesProvider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
