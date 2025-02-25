import { RESTDataSource } from "@apollo/datasource-rest";
import { FilmsModel } from "../models/FilmsModel";
import { PeopleModel } from "../models/PeopleModel";

export class GhibliAPI extends RESTDataSource {
  baseURL = "https://ghibliapi.dev";

  getFilm() {
    return this.get<FilmsModel[]>("films");
  }

  getPeople() {
    return this.get<PeopleModel[]>("people");
  }

  getPeopleByURL(urls: string[]) {
    return urls
      .filter((url) => url !== `${this.baseURL}/people/`)
      .map((url) => this.get<PeopleModel>(url));
  }

  getFilmByURL(urls: string[]) {
    return urls
      .filter((url) => url !== `${this.baseURL}/films/`)
      .map((url) => this.get<FilmsModel>(url));
  }
}
