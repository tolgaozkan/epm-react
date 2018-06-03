import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

require('./style.scss');

class MovieList extends React.PureComponent {
  render() {
    const movies = this.props.movies.map((movie, i) => (
      <Link key={i} to={`/film/${movie.id}`}>
        <div className="movie">
          <p className="movie-name">Name: {movie.title} </p>
          <p className="movie-genre">Genres: {movie.genres.join(', ')}</p>
        </div>
      </Link>));

    return (
      <div className="movies-container">{movies}</div>
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
