import {ComponentStore} from '@ngrx/component-store';

export interface Movie {
  id: string;
  name: string;
  duration: number;
}

export interface MovieState {
  movies: Movie[],
  userPreferredMovieIds: string[];
}

export class MoviesStore extends ComponentStore<MovieState> {

  readonly movies$ = this.select(state => state.movies)
  readonly userPreferredMovieIds$ = this.select(state => state.userPreferredMovieIds)

  readonly userPreferredMovies = this.select(
    this.movies$,
    this.userPreferredMovieIds$,
    (movies, ids) => movies.filter(movie => ids.includes(movie.id))
  )

  constructor() {
    super({movies: [], userPreferredMovieIds: []})
  }
}
