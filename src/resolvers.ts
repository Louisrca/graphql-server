import { Resolvers } from "./types";

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
};
