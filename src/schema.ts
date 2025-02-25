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

  type Film {
    id: ID!
    title: String!
    originalTitle: String!
    people: [People]!
  }

  type People {
    id: ID!
    name: String!
    eyeColor: String!
    films: [Film]!
  }

  type Query {
    getTracks: [Track!]!
    getAuthor(authorId: ID!): Author
    getFilms: [Film!]!
    getPeople: [People!]!
  }
`;
