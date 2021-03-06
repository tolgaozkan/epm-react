import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorPage from '../error-page/ErrorPage';
import MovieDetails from '../movie-details/MovieDetails';
import MovieListContainer from '../movie-list-container/MovieListContainer';
import Search from '../search/Search';
import Tool from '../tool/Tool';
import styles from './style.css';

export default function Container(
  props: { store: any },
) {
  const { user, row } = styles;
  const { store } = props;
  return (
    <div className={user}>

      <div className={row}>
        <Search store={store} />
      </div>

      <div className={row}>
        <Tool store={store} />
      </div>

      <div className={row}>
        <Switch>
          <Route exact path="/" component={MovieListContainer} />
          <Route path="/film/:id" component={MovieDetails} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </div>
  );
}
