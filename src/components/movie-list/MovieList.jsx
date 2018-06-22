import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './style.css';

class MovieList extends React.PureComponent {
  render() {
    const movies = this.props.movies.map((movie, i) => (
      <Link key={i} to={`/film/${movie.id}`}>
        <div className={styles.movie}>
          <p>Name: {movie.title} </p>
          <p>Genres: {movie.genres.join(', ')}</p>
        </div>
      </Link>));

    return (
      <div className={styles['movies-container']}>{movies}</div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

export default connect(mapStateToProps)(MovieList);
