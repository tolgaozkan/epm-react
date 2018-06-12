
import { connectRouter, ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import { loadMovies } from './actions/moviesActions';
import App from './components/app/App';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import initialState from './initial-state';
import MoviesReducer from './reducers/Movies';

import './index.scss';

const history = createBrowserHistory();

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  connectRouter(history)(MoviesReducer),
  initialState,
  composeEnhancers(applyMiddleware(
    routerMiddleware(history),
    thunk,
  )),
);
store.dispatch(loadMovies());

render(
  <ErrorBoundary>
    <BrowserRouter>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App store={store} />
        </ConnectedRouter>
      </Provider>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('root'),
);
