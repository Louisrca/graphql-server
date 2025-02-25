import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    getTracks: (_: unknown, __: unknown, { dataSources }, ___: unknown) => {
      return dataSources.trackAPI.getTracks();
    },
  },

  Track: {
    author: (parent, _: unknown, { dataSources }) => {
      return dataSources.trackAPI.getAuthorBy(parent.authorId);
    },
  },
};
