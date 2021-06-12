import {Component} from '@angular/core';
import {MoviesStore} from './movies.store';

@Component({
  selector: 'app-movies',
  template: `
    <li *ngFor="let movie of (movies$ | async)">
      {{ movie.name }}
    </li>
  `,
  providers: [MoviesStore]
})
export class MoviesComponent {
  movies$ = this.moviesStore.movies$

  constructor(private moviesStore: MoviesStore) {

  }
}
