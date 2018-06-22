import 'babel-polyfill';
import 'isomorphic-fetch';

import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { loadMovies } from './actions/moviesActions';
import App from './components/app/App';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import MoviesReducer from './reducers/Movies';

const store = createStore(MoviesReducer, applyMiddleware(thunk));
store.dispatch(loadMovies());

const Index = ({ Router, location, context }) => (
  <ErrorBoundary>
    <Router location={location} context={context}>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </Router>
  </ErrorBoundary>
);

Index.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
};
Index.defaultProps = {
  location: null,
  context: null,
};

export default hot(module)(Index);
