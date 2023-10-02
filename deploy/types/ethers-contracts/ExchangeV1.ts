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

export declare namespace ExchangeDomainV1 {
  export type AssetStruct = {
    token: PromiseOrValue<string>;
    tokenId: PromiseOrValue<BigNumberish>;
    assetType: PromiseOrValue<BigNumberish>;
  };

  export type AssetStructOutput = [string, BigNumber, number] & {
    token: string;
    tokenId: BigNumber;
    assetType: number;
  };

  export type OrderKeyStruct = {
    owner: PromiseOrValue<string>;
    salt: PromiseOrValue<BigNumberish>;
    sellAsset: ExchangeDomainV1.AssetStruct;
    buyAsset: ExchangeDomainV1.AssetStruct;
  };

  export type OrderKeyStructOutput = [
    string,
    BigNumber,
    ExchangeDomainV1.AssetStructOutput,
    ExchangeDomainV1.AssetStructOutput
  ] & {
    owner: string;
    salt: BigNumber;
    sellAsset: ExchangeDomainV1.AssetStructOutput;
    buyAsset: ExchangeDomainV1.AssetStructOutput;
  };

  export type OrderStruct = {
    key: ExchangeDomainV1.OrderKeyStruct;
    selling: PromiseOrValue<BigNumberish>;
    buying: PromiseOrValue<BigNumberish>;
    sellerFee: PromiseOrValue<BigNumberish>;
  };

  export type OrderStructOutput = [
    ExchangeDomainV1.OrderKeyStructOutput,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    key: ExchangeDomainV1.OrderKeyStructOutput;
    selling: BigNumber;
    buying: BigNumber;
    sellerFee: BigNumber;
  };

  export type SigStruct = {
    v: PromiseOrValue<BigNumberish>;
    r: PromiseOrValue<BytesLike>;
    s: PromiseOrValue<BytesLike>;
  };

  export type SigStructOutput = [number, string, string] & {
    v: number;
    r: string;
    s: string;
  };
}

export interface ExchangeV1Interface extends utils.Interface {
  functions: {
    "beneficiary()": FunctionFragment;
    "buyerFeeSigner()": FunctionFragment;
    "erc20TransferProxy()": FunctionFragment;
    "isOwner()": FunctionFragment;
    "ordersHolder()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "state()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferProxy()": FunctionFragment;
    "transferProxyForDeprecated()": FunctionFragment;
    "setBeneficiary(address)": FunctionFragment;
    "setBuyerFeeSigner(address)": FunctionFragment;
    "exchange(((address,uint256,(address,uint256,uint8),(address,uint256,uint8)),uint256,uint256,uint256),(uint8,bytes32,bytes32),uint256,(uint8,bytes32,bytes32),uint256,address)": FunctionFragment;
    "cancel((address,uint256,(address,uint256,uint8),(address,uint256,uint8)))": FunctionFragment;
    "prepareBuyerFeeMessage(((address,uint256,(address,uint256,uint8),(address,uint256,uint8)),uint256,uint256,uint256),uint256)": FunctionFragment;
    "prepareMessage(((address,uint256,(address,uint256,uint8),(address,uint256,uint8)),uint256,uint256,uint256))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "beneficiary"
      | "buyerFeeSigner"
      | "erc20TransferProxy"
      | "isOwner"
      | "ordersHolder"
      | "owner"
      | "renounceOwnership"
      | "state"
      | "transferOwnership"
      | "transferProxy"
      | "transferProxyForDeprecated"
      | "setBeneficiary"
      | "setBuyerFeeSigner"
      | "exchange"
      | "cancel"
      | "prepareBuyerFeeMessage"
      | "prepareMessage"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyerFeeSigner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "erc20TransferProxy",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ordersHolder",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferProxy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferProxyForDeprecated",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBeneficiary",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBuyerFeeSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "exchange",
    values: [
      ExchangeDomainV1.OrderStruct,
      ExchangeDomainV1.SigStruct,
      PromiseOrValue<BigNumberish>,
      ExchangeDomainV1.SigStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [ExchangeDomainV1.OrderKeyStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "prepareBuyerFeeMessage",
    values: [ExchangeDomainV1.OrderStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "prepareMessage",
    values: [ExchangeDomainV1.OrderStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyerFeeSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "erc20TransferProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ordersHolder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferProxyForDeprecated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBuyerFeeSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "prepareBuyerFeeMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "prepareMessage",
    data: BytesLike
  ): Result;

  events: {
    "Buy(address,uint256,uint256,address,address,uint256,uint256,address,uint256,uint256)": EventFragment;
    "Cancel(address,uint256,address,address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Buy"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Cancel"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface BuyEventObject {
  sellToken: string;
  sellTokenId: BigNumber;
  sellValue: BigNumber;
  owner: string;
  buyToken: string;
  buyTokenId: BigNumber;
  buyValue: BigNumber;
  buyer: string;
  amount: BigNumber;
  salt: BigNumber;
}
export type BuyEvent = TypedEvent<
  [
    string,
    BigNumber,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber
  ],
  BuyEventObject
>;

export type BuyEventFilter = TypedEventFilter<BuyEvent>;

export interface CancelEventObject {
  sellToken: string;
  sellTokenId: BigNumber;
  owner: string;
  buyToken: string;
  buyTokenId: BigNumber;
  salt: BigNumber;
}
export type CancelEvent = TypedEvent<
  [string, BigNumber, string, string, BigNumber, BigNumber],
  CancelEventObject
>;

export type CancelEventFilter = TypedEventFilter<CancelEvent>;

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

export interface ExchangeV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExchangeV1Interface;

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
    beneficiary(overrides?: CallOverrides): Promise<[string]>;

    buyerFeeSigner(overrides?: CallOverrides): Promise<[string]>;

    erc20TransferProxy(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns true if the caller is the current owner.
     */
    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    ordersHolder(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    state(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferProxy(overrides?: CallOverrides): Promise<[string]>;

    transferProxyForDeprecated(overrides?: CallOverrides): Promise<[string]>;

    setBeneficiary(
      newBeneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBuyerFeeSigner(
      newBuyerFeeSigner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchange(
      order: ExchangeDomainV1.OrderStruct,
      sig: ExchangeDomainV1.SigStruct,
      buyerFee: PromiseOrValue<BigNumberish>,
      buyerFeeSig: ExchangeDomainV1.SigStruct,
      amount: PromiseOrValue<BigNumberish>,
      buyer: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancel(
      key: ExchangeDomainV1.OrderKeyStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    prepareBuyerFeeMessage(
      order: ExchangeDomainV1.OrderStruct,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    prepareMessage(
      order: ExchangeDomainV1.OrderStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  beneficiary(overrides?: CallOverrides): Promise<string>;

  buyerFeeSigner(overrides?: CallOverrides): Promise<string>;

  erc20TransferProxy(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns true if the caller is the current owner.
   */
  isOwner(overrides?: CallOverrides): Promise<boolean>;

  ordersHolder(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  state(overrides?: CallOverrides): Promise<string>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferProxy(overrides?: CallOverrides): Promise<string>;

  transferProxyForDeprecated(overrides?: CallOverrides): Promise<string>;

  setBeneficiary(
    newBeneficiary: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBuyerFeeSigner(
    newBuyerFeeSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchange(
    order: ExchangeDomainV1.OrderStruct,
    sig: ExchangeDomainV1.SigStruct,
    buyerFee: PromiseOrValue<BigNumberish>,
    buyerFeeSig: ExchangeDomainV1.SigStruct,
    amount: PromiseOrValue<BigNumberish>,
    buyer: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancel(
    key: ExchangeDomainV1.OrderKeyStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  prepareBuyerFeeMessage(
    order: ExchangeDomainV1.OrderStruct,
    fee: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  prepareMessage(
    order: ExchangeDomainV1.OrderStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    beneficiary(overrides?: CallOverrides): Promise<string>;

    buyerFeeSigner(overrides?: CallOverrides): Promise<string>;

    erc20TransferProxy(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns true if the caller is the current owner.
     */
    isOwner(overrides?: CallOverrides): Promise<boolean>;

    ordersHolder(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    state(overrides?: CallOverrides): Promise<string>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferProxy(overrides?: CallOverrides): Promise<string>;

    transferProxyForDeprecated(overrides?: CallOverrides): Promise<string>;

    setBeneficiary(
      newBeneficiary: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setBuyerFeeSigner(
      newBuyerFeeSigner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    exchange(
      order: ExchangeDomainV1.OrderStruct,
      sig: ExchangeDomainV1.SigStruct,
      buyerFee: PromiseOrValue<BigNumberish>,
      buyerFeeSig: ExchangeDomainV1.SigStruct,
      amount: PromiseOrValue<BigNumberish>,
      buyer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    cancel(
      key: ExchangeDomainV1.OrderKeyStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    prepareBuyerFeeMessage(
      order: ExchangeDomainV1.OrderStruct,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    prepareMessage(
      order: ExchangeDomainV1.OrderStruct,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Buy(address,uint256,uint256,address,address,uint256,uint256,address,uint256,uint256)"(
      sellToken?: PromiseOrValue<string> | null,
      sellTokenId?: PromiseOrValue<BigNumberish> | null,
      sellValue?: null,
      owner?: null,
      buyToken?: null,
      buyTokenId?: null,
      buyValue?: null,
      buyer?: null,
      amount?: null,
      salt?: null
    ): BuyEventFilter;
    Buy(
      sellToken?: PromiseOrValue<string> | null,
      sellTokenId?: PromiseOrValue<BigNumberish> | null,
      sellValue?: null,
      owner?: null,
      buyToken?: null,
      buyTokenId?: null,
      buyValue?: null,
      buyer?: null,
      amount?: null,
      salt?: null
    ): BuyEventFilter;

    "Cancel(address,uint256,address,address,uint256,uint256)"(
      sellToken?: PromiseOrValue<string> | null,
      sellTokenId?: PromiseOrValue<BigNumberish> | null,
      owner?: null,
      buyToken?: null,
      buyTokenId?: null,
      salt?: null
    ): CancelEventFilter;
    Cancel(
      sellToken?: PromiseOrValue<string> | null,
      sellTokenId?: PromiseOrValue<BigNumberish> | null,
      owner?: null,
      buyToken?: null,
      buyTokenId?: null,
      salt?: null
    ): CancelEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    buyerFeeSigner(overrides?: CallOverrides): Promise<BigNumber>;

    erc20TransferProxy(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns true if the caller is the current owner.
     */
    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    ordersHolder(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferProxy(overrides?: CallOverrides): Promise<BigNumber>;

    transferProxyForDeprecated(overrides?: CallOverrides): Promise<BigNumber>;

    setBeneficiary(
      newBeneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBuyerFeeSigner(
      newBuyerFeeSigner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchange(
      order: ExchangeDomainV1.OrderStruct,
      sig: ExchangeDomainV1.SigStruct,
      buyerFee: PromiseOrValue<BigNumberish>,
      buyerFeeSig: ExchangeDomainV1.SigStruct,
      amount: PromiseOrValue<BigNumberish>,
      buyer: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancel(
      key: ExchangeDomainV1.OrderKeyStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    prepareBuyerFeeMessage(
      order: ExchangeDomainV1.OrderStruct,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    prepareMessage(
      order: ExchangeDomainV1.OrderStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyerFeeSigner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    erc20TransferProxy(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns true if the caller is the current owner.
     */
    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ordersHolder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferProxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferProxyForDeprecated(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBeneficiary(
      newBeneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBuyerFeeSigner(
      newBuyerFeeSigner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchange(
      order: ExchangeDomainV1.OrderStruct,
      sig: ExchangeDomainV1.SigStruct,
      buyerFee: PromiseOrValue<BigNumberish>,
      buyerFeeSig: ExchangeDomainV1.SigStruct,
      amount: PromiseOrValue<BigNumberish>,
      buyer: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancel(
      key: ExchangeDomainV1.OrderKeyStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    prepareBuyerFeeMessage(
      order: ExchangeDomainV1.OrderStruct,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    prepareMessage(
      order: ExchangeDomainV1.OrderStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
