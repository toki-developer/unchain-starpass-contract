/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
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

export declare namespace ISocialNetwork {
  export type PostDetailStruct = {
    postId: PromiseOrValue<BigNumberish>;
    author: PromiseOrValue<string>;
    message: PromiseOrValue<string>;
    totalLikes: PromiseOrValue<BigNumberish>;
    time: PromiseOrValue<BigNumberish>;
  };

  export type PostDetailStructOutput = [
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber
  ] & {
    postId: BigNumber;
    author: string;
    message: string;
    totalLikes: BigNumber;
    time: BigNumber;
  };
}

export interface SocialNetworkInterface extends utils.Interface {
  functions: {
    "getLastPostId()": FunctionFragment;
    "getPost(uint256)": FunctionFragment;
    "getPosts(uint256)": FunctionFragment;
    "like(uint256)": FunctionFragment;
    "post(string)": FunctionFragment;
    "unlike(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getLastPostId"
      | "getPost"
      | "getPosts"
      | "like"
      | "post"
      | "unlike"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getLastPostId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPost",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPosts",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "like",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "post",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unlike",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getLastPostId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPost", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPosts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "like", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "post", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unlike", data: BytesLike): Result;

  events: {};
}

export interface SocialNetwork extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SocialNetworkInterface;

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
    getLastPostId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPost(
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ISocialNetwork.PostDetailStructOutput]>;

    getPosts(
      order: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ISocialNetwork.PostDetailStructOutput[]]>;

    like(
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    post(
      _message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unlike(
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getLastPostId(overrides?: CallOverrides): Promise<BigNumber>;

  getPost(
    _postId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ISocialNetwork.PostDetailStructOutput>;

  getPosts(
    order: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ISocialNetwork.PostDetailStructOutput[]>;

  like(
    _postId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  post(
    _message: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unlike(
    _postId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getLastPostId(overrides?: CallOverrides): Promise<BigNumber>;

    getPost(
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ISocialNetwork.PostDetailStructOutput>;

    getPosts(
      order: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ISocialNetwork.PostDetailStructOutput[]>;

    like(
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    post(
      _message: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unlike(
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getLastPostId(overrides?: CallOverrides): Promise<BigNumber>;

    getPost(
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPosts(
      order: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    like(
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    post(
      _message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unlike(
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getLastPostId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPost(
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPosts(
      order: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    like(
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    post(
      _message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unlike(
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
