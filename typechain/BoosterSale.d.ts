/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface BoosterSaleInterface extends ethers.utils.Interface {
  functions: {
    "addToWhitelist(address[])": FunctionFragment;
    "boosterOwner()": FunctionFragment;
    "boosterToBoosterIndex(address)": FunctionFragment;
    "boosters(uint256)": FunctionFragment;
    "busd()": FunctionFragment;
    "busdPricePerBoosterInWei(uint256)": FunctionFragment;
    "buy(address,uint256)": FunctionFragment;
    "capPerBoosterInWei(uint256)": FunctionFragment;
    "configure(address[],uint256[],uint256[])": FunctionFragment;
    "isWhitelisted(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "removeFromWhitelist(address[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addToWhitelist",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "boosterOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "boosterToBoosterIndex",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "boosters",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "busd", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "busdPricePerBoosterInWei",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "capPerBoosterInWei",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "configure",
    values: [string[], BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeFromWhitelist",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addToWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "boosterOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "boosterToBoosterIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "boosters", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "busd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "busdPricePerBoosterInWei",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "capPerBoosterInWei",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "configure", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeFromWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class BoosterSale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BoosterSaleInterface;

  functions: {
    addToWhitelist(
      _buyers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    boosterOwner(overrides?: CallOverrides): Promise<[string]>;

    boosterToBoosterIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    boosters(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    busd(overrides?: CallOverrides): Promise<[string]>;

    busdPricePerBoosterInWei(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    buy(
      booster: string,
      _numberOfBoostersInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    capPerBoosterInWei(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    configure(
      _boosters: string[],
      _busdPricePerBoosterInWei: BigNumberish[],
      _capPerBoosterInWei: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isWhitelisted(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    removeFromWhitelist(
      _buyers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addToWhitelist(
    _buyers: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  boosterOwner(overrides?: CallOverrides): Promise<string>;

  boosterToBoosterIndex(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  boosters(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  busd(overrides?: CallOverrides): Promise<string>;

  busdPricePerBoosterInWei(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  buy(
    booster: string,
    _numberOfBoostersInWei: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  capPerBoosterInWei(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  configure(
    _boosters: string[],
    _busdPricePerBoosterInWei: BigNumberish[],
    _capPerBoosterInWei: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isWhitelisted(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  removeFromWhitelist(
    _buyers: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addToWhitelist(_buyers: string[], overrides?: CallOverrides): Promise<void>;

    boosterOwner(overrides?: CallOverrides): Promise<string>;

    boosterToBoosterIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    boosters(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    busd(overrides?: CallOverrides): Promise<string>;

    busdPricePerBoosterInWei(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buy(
      booster: string,
      _numberOfBoostersInWei: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    capPerBoosterInWei(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    configure(
      _boosters: string[],
      _busdPricePerBoosterInWei: BigNumberish[],
      _capPerBoosterInWei: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    isWhitelisted(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    removeFromWhitelist(
      _buyers: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    addToWhitelist(
      _buyers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    boosterOwner(overrides?: CallOverrides): Promise<BigNumber>;

    boosterToBoosterIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    boosters(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    busd(overrides?: CallOverrides): Promise<BigNumber>;

    busdPricePerBoosterInWei(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buy(
      booster: string,
      _numberOfBoostersInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    capPerBoosterInWei(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    configure(
      _boosters: string[],
      _busdPricePerBoosterInWei: BigNumberish[],
      _capPerBoosterInWei: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isWhitelisted(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    removeFromWhitelist(
      _buyers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addToWhitelist(
      _buyers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    boosterOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    boosterToBoosterIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    boosters(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    busd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    busdPricePerBoosterInWei(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buy(
      booster: string,
      _numberOfBoostersInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    capPerBoosterInWei(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    configure(
      _boosters: string[],
      _busdPricePerBoosterInWei: BigNumberish[],
      _capPerBoosterInWei: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isWhitelisted(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeFromWhitelist(
      _buyers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
