import gql from "graphql-tag";

export const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
  }

  type Query {
    getTracks: [Track!]!
    getAuthor(authorId: ID!): Author
  }
`;
