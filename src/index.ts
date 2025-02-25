import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./schema.js";
import { TrackAPI } from "./datasources/TrackApi.js";
import { GhibliAPI } from "./datasources/GhibliApi.js";
import { getUser } from "./modules/auth.js";
import db from "./datasources/db.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const cache = server.cache;
    const authorization = req.headers.authorization?.split("Bearer ")?.[1];
    const user = authorization ? getUser(authorization) : null;
    return {
      dataSources: {
        trackAPI: new TrackAPI({ cache }),
        ghibliAPI: new GhibliAPI({ cache }),
        db,
      },
      user,
    };
  },
});
console.log(`🚀  Server ready at: ${url}`);
