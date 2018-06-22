import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import styles from './style.css';

export class MovieDetails extends React.PureComponent {
  render() {
    const { movies } = this.props;
    const movie = movies.find(m => m.id === parseInt(this.props.match.params.id, 10));

    return movie ? (
      <div className={styles['movie-detail-container']}>
        <div className={styles.movie}>
          <p>Name: {movie.title}</p>
          <p>Genres: {movie.genres.join(', ')}</p>
        </div>
      </div>
    ) : (<div />);
  }
}

MovieDetails.propTypes = {
  movies: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

export default connect(mapStateToProps)(MovieDetails);
