import { TrackAPI } from "./datasources/TrackApi";
import { GhibliAPI } from "./datasources/GhibliApi";
import { AuthenticatedUser } from "./modules/auth.js";
import { PrismaClient } from "@prisma/client";

export type Context = {
  dataSources: {
    trackAPI: TrackAPI;
    ghibliAPI: GhibliAPI;
    db: PrismaClient;
  };
  user: AuthenticatedUser | null;
};
