import * as types from '../actions/action-types';

export default function MoviesReducer(state, action) {
  switch (action.type) {
    case types.GET_MOVIES_SUCCESS:
      return { ...state, movies: [...action.movies.data], originalMovies: [...action.movies.data] };
    case types.SORT_MOVIES:
      state.movies.sort((a, b) => {
        const propName = action.sort === 'date' ? 'release_date' : action.sort;
        return a[propName] > b[propName];
      });
      return { ...state, ui: { ...state.ui, sort: action.sort }, movies: [...state.movies] };
    case types.SEARCH_MOVIES:
      if (!action.options.search) {
        return {
          ...state,
          ui: { ...state.ui, sort: action.sort },
          movies: [...state.originalMovies],
        };
      }

      if (action.options.searchBy === 'title') {
        return {
          ...state,
          ui: { ...state.ui, sort: action.sort },
          movies: [...state.originalMovies
            .filter(m => m.title.toLowerCase().includes(action.options.search.toLowerCase())),
          ],
        };
      } else if (action.options.searchBy === 'genre') {
        const foundMovies = [];
        state.originalMovies.forEach((element) => {
          if (element.genres
            .filter(g => g.toLowerCase().includes(action.options.search.toLowerCase()))
            .length > 0) {
            foundMovies.push(element);
          }
        });
        return {
          ...state,
          ui: { ...state.ui, sort: action.sort },
          movies: [...foundMovies],
        };
      }

      return { ...state };
    default:
      return state;
  }
}
