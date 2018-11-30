import { Injectable } from '@angular/core';
import { MovieInterface } from 'src/interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class LatestVideoService {

  fetchMovies(): Promise<Array<MovieInterface>> {
    const movies = [
      {
        title: "Bohemian Rhapsody",
        year: 2018,
        description: "Dzięki oryginalnemu brzmieniu Queen staje się jednym z najpopularniejszych zespołów w historii muzyki.",
        duration: 134,
        rate: 8.3
      },
      {
        title: "Venom",
        year: 2018,
        description: "Kiedy Eddie Brock zdobywa moce symbionta, zmuszony jest uwolnić swoje alter-ego Venoma, by ratować własne życie. ",
        duration: 112,
        rate: 7.1
      }
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(movies);
      }, 500);
    });
  }
}
