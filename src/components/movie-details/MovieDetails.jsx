import * as React from 'react';
import { connect } from 'react-redux';

import styles from './style.css';

export type Movie = {
    budget: number,
    genres: string[],
    id: number,
    overview: string,
    poster_path: string,
    release_date: string,
    revenue: number,
    runtime: string,
    tagline: string,
    title: string,
    vote_average: number,
    vote_count: number,
};

type Props = {
  movies: Movie[],
  match: any,
};

export class MovieDetails extends React.PureComponent<Props> {
  render() {
    const { movies, match } = this.props;
    const movie = movies.find(m => m.id === parseInt(match.params.id, 10));

    return movie ? (
      <div className={styles['movie-detail-container']}>
        <div className={styles.movie}>
          <p>
            Name:
            {movie.title}
          </p>
          <p>
            Genres:
            {movie.genres.join(', ')}
          </p>
        </div>
      </div>
    ) : (<div />);
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

export default connect(mapStateToProps)(MovieDetails);
