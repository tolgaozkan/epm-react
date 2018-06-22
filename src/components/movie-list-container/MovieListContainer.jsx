import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import MovieList from '../movie-list/MovieList';

import styles from './style.css';

export class MovieListContainer extends React.PureComponent {
  render() {
    return (
      <div className={styles['movie-list-container']}>
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

MovieListContainer.propTypes = {
  movies: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

export default connect(mapStateToProps)(MovieListContainer);
