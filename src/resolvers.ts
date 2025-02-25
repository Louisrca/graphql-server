import { Resolvers } from "./types";
import { createUser } from "./mutations/users/createUser.js";

export const resolvers: Resolvers = {
  Query: {
    getTracks: (_: unknown, __: unknown, { dataSources }, ___: unknown) => {
      return dataSources.trackAPI.getTracks();
    },
    getFilms: (_: unknown, __: unknown, { dataSources }, ___: unknown) => {
      return dataSources.ghibliAPI.getFilm();
    },
    getPeople: (_: unknown, __: unknown, { dataSources }, ___: unknown) => {
      return dataSources.ghibliAPI.getPeople();
    },
  },

  Film: {
    originalTitle: ({ original_title }) => original_title,
    people: ({ people }, _: unknown, { dataSources }) => {
      return dataSources.ghibliAPI.getPeopleByURL(people);
    },
  },

  People: {
    eyeColor: ({ eye_color }) => eye_color,
    films: (parent, _: unknown, { dataSources }) => {
      return dataSources.ghibliAPI.getFilmByURL(parent.films);
    },
  },

  Track: {
    author: (parent, _: unknown, { dataSources }) => {
      return dataSources.trackAPI.getAuthorBy(parent.authorId);
    },
  },

  Mutation: {
    async incrementTrackViews(_, { id }, context, info) {
      try {
        const track = await context.dataSources.trackAPI.incrementTrackViews(
          id
        );
        const message = `Successfully incremented number of views for track ${id}`;

        return {
          code: 200,
          message,
          success: Boolean(track),
          track,
        };
      } catch (err) {
        return {
          code: 304,
          message:
            (err as Error)?.message ??
            "Resource not modified, an internal error occured",
          success: false,
          track: null,
        };
      }
    },
    async incrementTrackLikes(_, { id }, context, info) {
      try {
        const track = await context.dataSources.trackAPI.incrementTrackLikes(
          id
        );
        const message = `Successfully incremented number of views for track ${id}`;

        return {
          code: 200,
          message,
          success: Boolean(track),
          track,
        };
      } catch (err) {
        return {
          code: 304,
          message:
            (err as Error)?.message ??
            "Resource not modified, an internal error occured",
          success: false,
          track: null,
        };
      }
    },
    createUser,
  },
};
