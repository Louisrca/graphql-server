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

  getFilmByURL(films: string[]) {
    const req = films.map((url) => {
      const urlSplit = url.split("https://ghibliapi.dev/films/").pop();

      if (urlSplit) {
        return this.get<FilmsModel>(`films/${urlSplit}`);
      }

      return Promise.resolve(null);
    });
    return Promise.all(req).then((results) =>
      results.filter((film): film is FilmsModel => film !== null)
    );
  }
}
