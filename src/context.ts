import { TrackAPI } from "./datasources/TrackApi";
import { GhibliAPI } from "./datasources/GhibliApi";

export type DataSourceContext = {
  dataSources: {
    trackAPI: TrackAPI;
    ghibliAPI: GhibliAPI;
  };
};
