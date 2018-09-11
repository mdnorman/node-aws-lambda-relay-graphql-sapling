import { ApolloServer, gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query {
  }
`;

const resolvers = {
  Query: {},
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const handler = server.createHandler();
