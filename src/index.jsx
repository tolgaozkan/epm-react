
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import './index.scss';

import App from './components/app/App';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import MoviesReducer from './reducers/Movies';

const store = createStore(MoviesReducer);

render(
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root'),
);
