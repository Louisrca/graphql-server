import { doctorsData } from "./data.js";
export const resolvers = {
  Query: {
    doctors: () => doctorsData,
  },
};
