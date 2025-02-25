import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context#DataSourceContext",
        mappers: {
          Track: "./models/TrackModel#TrackModel",
          Author: "./models/AuthorModel#AuthorModel",
          Film: "./models/FilmsModel#FilmsModel",
          People: "./models/PeopleModel#PeopleModel",
        },
      },
    },
  },
};

export default config;
