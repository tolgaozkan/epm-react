import * as types from './action-types';
import moviesApi from '../api/moviesApi';

export function loadMovies() {
  return dispatch => moviesApi.getAllMovies().then((movies) => {
    dispatch({
      type: types.GET_MOVIES_SUCCESS,
      movies,
    });
  }).catch((error) => {
    throw (error);
  });
}

export function sortMovies(sort) {
  return (dispatch) => {
    dispatch({
      type: types.SORT_MOVIES,
      sort,
    });
  };
}

export function searchMovies(options) {
  return (dispatch) => {
    dispatch({
      type: types.SEARCH_MOVIES,
      options,
    });
  };
}
