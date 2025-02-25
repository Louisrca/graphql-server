import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel } from "../models/TrackModel";
import { AuthorModel } from "../models/AuthorModel";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracks() {
    return this.get<TrackModel[]>("tracks");
  }

  getAuthorBy(authorId: string) {
    return this.get<AuthorModel>(`author/${authorId}`);
  }

  incrementTrackViews(trackId: string) {
    return this.patch<TrackModel>(`track/${trackId}/numberOfViews`);
  }

  incrementTrackLikes(trackId: string) {
    return this.patch<TrackModel>(`track/${trackId}/numberOfLikes`);
  }
}
