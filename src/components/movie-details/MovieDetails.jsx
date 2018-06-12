import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

require('./style.scss');

export class MovieDetails extends React.PureComponent {
  render() {
    const { movies } = this.props;
    const movie = movies.find(m => m.id === parseInt(this.props.match.params.id, 10));

    return movie ? (
      <div className="movie-detail-container">
        <div className="movie">
          <p className="movie-name">Name: {movie.title}</p>
          <p className="movie-genre">Genres: {movie.genres.join(', ')}</p>
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
