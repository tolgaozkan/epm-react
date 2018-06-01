import React from 'react';

require('./style.scss');

export default class MovieList extends React.Component {
  render() {
    let movies;

    if (this.props && this.props.movies) {
      console.log("this.props", this.props);
      movies = this.props.movies.map((movie, i) => (
        <div className="movie" key={i}>
            <p className="movie-name">Name: {movie.title}</p>
            <p className="movie-genre">Genre: {movie.genres.join(', ')}</p>
          </div>
      ));
    }
    return (
      <div className="movies-container">{movies}</div>
    );
  }
}

