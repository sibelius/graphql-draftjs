import { GraphQLInputObjectType, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } from 'graphql';

type Data = {
  href: string;
  url: string;
};

type Entity = {
  type: string;
  mutability: string;
  data: Data;
};

export type InlineStyleRange = {
  offset: number;
  length: number;
  style: string;
};

export type EntityRange = {
  offset: number;
  length: number;
  key: number;
};

type Block = {
  key: string;
  text: string;
  type: string;
  depth: number;
  entityRanges: EntityRange[];
  inlineStyleRanges: InlineStyleRange[];
};

export type ContentStateData = {
  entityMap: Entity[];
  blocks: Block[];
};

export const DraftInlineStyleRangeInput = new GraphQLInputObjectType({
  name: 'DraftInlineStyleRangeInput',
  fields: () => ({
    offset: {
      type: GraphQLInt,
    },
    length: {
      type: GraphQLInt,
    },
    style: {
      type: GraphQLString,
    },
  }),
});

export const DraftInlineStyleRange = new GraphQLObjectType({
  name: 'DraftInlineStyleRange',
  fields: () => ({
    offset: {
      type: GraphQLInt,
    },
    length: {
      type: GraphQLInt,
    },
    style: {
      type: GraphQLString,
    },
  }),
});

export const DraftEntityRangeInput = new GraphQLInputObjectType({
  name: 'DraftEntityRangeInput',
  fields: () => ({
    offset: {
      type: GraphQLInt,
    },
    length: {
      type: GraphQLInt,
    },
    key: {
      type: GraphQLInt,
    },
  }),
});

export const DraftEntityRange = new GraphQLObjectType({
  name: 'DraftEntityRange',
  fields: () => ({
    offset: {
      type: GraphQLInt,
    },
    length: {
      type: GraphQLInt,
    },
    key: {
      type: GraphQLInt,
    },
  }),
});

export const DraftDataInput = new GraphQLInputObjectType({
  name: 'DraftDataInput',
  fields: () => ({
    href: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
  }),
});

export const DraftData = new GraphQLObjectType({
  name: 'DraftData',
  fields: () => ({
    href: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
  }),
});

export const DraftEntityInput = new GraphQLInputObjectType({
  name: 'DraftEntityInput',
  fields: () => ({
    type: {
      type: GraphQLString,
    },
    mutability: {
      type: GraphQLString,
    },
    data: {
      type: DraftDataInput,
    },
  }),
});

export const DraftEntity = new GraphQLObjectType({
  name: 'DraftEntity',
  fields: () => ({
    type: {
      type: GraphQLString,
    },
    mutability: {
      type: GraphQLString,
    },
    data: {
      type: DraftData,
    },
  }),
});

export const DraftBlockInput = new GraphQLInputObjectType({
  name: 'DraftBlockInput',
  fields: () => ({
    key: {
      type: GraphQLString,
    },
    text: {
      type: GraphQLString,
    },
    type: {
      type: GraphQLString,
    },
    depth: {
      type: GraphQLInt,
    },
    entityRanges: {
      type: GraphQLList(DraftEntityRangeInput),
    },
    inlineStyleRanges: {
      type: GraphQLList(DraftInlineStyleRangeInput),
    },
  }),
});

export const DraftBlock = new GraphQLObjectType({
  name: 'DraftBlock',
  fields: () => ({
    key: {
      type: GraphQLString,
    },
    text: {
      type: GraphQLString,
    },
    type: {
      type: GraphQLString,
    },
    depth: {
      type: GraphQLInt,
    },
    entityRanges: {
      type: GraphQLList(DraftEntityRange),
    },
    inlineStyleRanges: {
      type: GraphQLList(DraftInlineStyleRange),
    },
  }),
});

export const DraftContentStateInput = new GraphQLInputObjectType({
  name: 'DraftContentStateInput',
  fields: () => ({
    entityMap: {
      type: GraphQLList(DraftEntityInput),
    },
    blocks: {
      type: GraphQLList(DraftBlock),
    },
  }),
});

export const DraftContentStateType = new GraphQLObjectType({
  name: 'DraftContentState',
  fields: () => ({
    entityMap: {
      type: GraphQLList(DraftEntity),
    },
    blocks: {
      type: GraphQLList(DraftBlock),
    },
  }),
});
