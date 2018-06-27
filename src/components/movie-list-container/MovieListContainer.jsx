import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import MovieList from '../movie-list/MovieList';

import styles from './style.css';

export class MovieListContainer extends React.PureComponent {
  render() {
    const { movies } = this.props;
    return (
      <div className={styles['movie-list-container']}>
        <MovieList movies={movies} />
      </div>
    );
  }
}

MovieListContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

export default connect(mapStateToProps)(MovieListContainer);
