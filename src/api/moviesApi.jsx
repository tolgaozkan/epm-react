export default class MoviesApi {
  static getAllMovies() {
    return fetch('http://react-cdp-api.herokuapp.com/movies')
      .then(response => response.json())
      .catch(error => error);
  }
}
