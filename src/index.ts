import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./schema.js";
import { TrackAPI } from "./datasources/TrackApi.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    const cache = server.cache;
    return {
      dataSources: {
        trackAPI: new TrackAPI({ cache }),
      },
    };
  },
});
console.log(`🚀  Server ready at: ${url}`);
