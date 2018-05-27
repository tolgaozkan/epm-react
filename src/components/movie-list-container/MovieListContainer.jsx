import React from 'react';
import MovieList from '../movie-list/MovieList';

require('./style.scss');

export default class MovieListContainer extends React.Component {

  componentDidMount() {
    if (fetch) {
      fetch('http://react-cdp-api.herokuapp.com/movies')
        .then(res => res.json())
        .then((result) => {
          this.setState({
            movies: result.data,
          });
        });
    }
  }

  render() {
    let movieListContainer;

    if (this.state && this.state.movies) {
      movieListContainer = <MovieList movies={this.state.movies} />;
    }

    return (
      <div className="movie-list-container">
        {movieListContainer}
      </div>
    );
  }
}

