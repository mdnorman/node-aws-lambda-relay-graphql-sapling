import { GraphQLObjectType } from 'graphql';

import { nodeField } from './nodeDefinitions';

export const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    node: nodeField,
  },
});
