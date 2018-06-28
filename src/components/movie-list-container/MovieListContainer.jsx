import * as React from 'react';
import { connect } from 'react-redux';

import MovieList from '../movie-list/MovieList';
import styles from './style.css';

import type { Movie } from '../movie-details/MovieDetails';

type Props = {
  movies: Movie[],
};

export class MovieListContainer extends React.PureComponent<Props> {
  render() {
    const { movies } = this.props;
    return (
      <div className={styles['movie-list-container']}>
        <MovieList movies={movies} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

export default connect(mapStateToProps)(MovieListContainer);
