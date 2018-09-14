import { fromGlobalId, nodeDefinitions } from 'graphql-relay';

export const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    return null;
  },
  obj => {
    return null;
  },
);
