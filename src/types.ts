import { GraphQLResolveInfo } from 'graphql';
import { TrackModel } from './models/TrackModel';
import { AuthorModel } from './models/AuthorModel';
import { FilmsModel } from './models/FilmsModel';
import { PeopleModel } from './models/PeopleModel';
import { Context } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photo?: Maybe<Scalars['String']['output']>;
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type Film = {
  __typename?: 'Film';
  id: Scalars['ID']['output'];
  originalTitle: Scalars['String']['output'];
  people: Array<Maybe<People>>;
  title: Scalars['String']['output'];
};

export type IncrementTrackLikesResponse = {
  __typename?: 'IncrementTrackLikesResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  track?: Maybe<Track>;
};

export type IncrementTrackViewsResponse = {
  __typename?: 'IncrementTrackViewsResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  track?: Maybe<Track>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<CreateUserResponse>;
  incrementTrackLikes: IncrementTrackLikesResponse;
  incrementTrackViews: IncrementTrackViewsResponse;
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationIncrementTrackLikesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementTrackViewsArgs = {
  id: Scalars['ID']['input'];
};

export type People = {
  __typename?: 'People';
  eyeColor: Scalars['String']['output'];
  films: Array<Maybe<Film>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAuthor?: Maybe<Author>;
  getFilms: Array<Film>;
  getPeople: Array<People>;
  getTracks: Array<Track>;
};


export type QueryGetAuthorArgs = {
  authorId: Scalars['ID']['input'];
};

export type Track = {
  __typename?: 'Track';
  author: Author;
  id: Scalars['ID']['output'];
  numberOfLikes: Scalars['Int']['output'];
  numberOfViews: Scalars['Int']['output'];
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Author: ResolverTypeWrapper<AuthorModel>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
  Film: ResolverTypeWrapper<FilmsModel>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IncrementTrackLikesResponse: ResolverTypeWrapper<Omit<IncrementTrackLikesResponse, 'track'> & { track?: Maybe<ResolversTypes['Track']> }>;
  IncrementTrackViewsResponse: ResolverTypeWrapper<Omit<IncrementTrackViewsResponse, 'track'> & { track?: Maybe<ResolversTypes['Track']> }>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  People: ResolverTypeWrapper<PeopleModel>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Track: ResolverTypeWrapper<TrackModel>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Author: AuthorModel;
  Boolean: Scalars['Boolean']['output'];
  CreateUserResponse: CreateUserResponse;
  Film: FilmsModel;
  ID: Scalars['ID']['output'];
  IncrementTrackLikesResponse: Omit<IncrementTrackLikesResponse, 'track'> & { track?: Maybe<ResolversParentTypes['Track']> };
  IncrementTrackViewsResponse: Omit<IncrementTrackViewsResponse, 'track'> & { track?: Maybe<ResolversParentTypes['Track']> };
  Int: Scalars['Int']['output'];
  Mutation: {};
  People: PeopleModel;
  Query: {};
  String: Scalars['String']['output'];
  Track: TrackModel;
  User: User;
};

export type AuthorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilmResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Film'] = ResolversParentTypes['Film']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  originalTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  people?: Resolver<Array<Maybe<ResolversTypes['People']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncrementTrackLikesResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['IncrementTrackLikesResponse'] = ResolversParentTypes['IncrementTrackLikesResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  track?: Resolver<Maybe<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncrementTrackViewsResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['IncrementTrackViewsResponse'] = ResolversParentTypes['IncrementTrackViewsResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  track?: Resolver<Maybe<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserResponse']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'password' | 'username'>>;
  incrementTrackLikes?: Resolver<ResolversTypes['IncrementTrackLikesResponse'], ParentType, ContextType, RequireFields<MutationIncrementTrackLikesArgs, 'id'>>;
  incrementTrackViews?: Resolver<ResolversTypes['IncrementTrackViewsResponse'], ParentType, ContextType, RequireFields<MutationIncrementTrackViewsArgs, 'id'>>;
};

export type PeopleResolvers<ContextType = Context, ParentType extends ResolversParentTypes['People'] = ResolversParentTypes['People']> = {
  eyeColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  films?: Resolver<Array<Maybe<ResolversTypes['Film']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<QueryGetAuthorArgs, 'authorId'>>;
  getFilms?: Resolver<Array<ResolversTypes['Film']>, ParentType, ContextType>;
  getPeople?: Resolver<Array<ResolversTypes['People']>, ParentType, ContextType>;
  getTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
};

export type TrackResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numberOfLikes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numberOfViews?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Author?: AuthorResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  Film?: FilmResolvers<ContextType>;
  IncrementTrackLikesResponse?: IncrementTrackLikesResponseResolvers<ContextType>;
  IncrementTrackViewsResponse?: IncrementTrackViewsResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  People?: PeopleResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

