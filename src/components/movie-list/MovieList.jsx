import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './style.css';

type Props = {
  movies: any[],
};

class MovieList extends React.PureComponent<Props> {
  render() {
    let { movies } = this.props;
    movies = movies.map(movie => (
      <Link key={`/film/${movie.id}`} to={`/film/${movie.id}`}>
        <div className={styles.movie}>
          <p>
            Name:
            {movie.title}
            {' '}
          </p>
          <p>
            Genres:
            {movie.genres.join(', ')}
          </p>
        </div>
      </Link>));

    return (
      <div className={styles['movies-container']}>
        {movies}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

export default connect(mapStateToProps)(MovieList);
