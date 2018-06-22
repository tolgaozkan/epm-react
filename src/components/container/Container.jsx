import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorPage from '../error-page/ErrorPage';
import MovieDetails from '../movie-details/MovieDetails';
import MovieListContainer from '../movie-list-container/MovieListContainer';
import Search from '../search/Search';
import Tool from '../tool/Tool';
import styles from './style.css';

export default class Container extends React.Component {
  render() {
    return (
      <div className={styles.user}>

        <div className={styles.row}>
          <Search store={this.props.store} />
        </div>

        <div className={styles.row}>
          <Tool store={this.props.store} />
        </div>

        <div className={styles.row}>
          <Switch>
            <Route exact path="/" component={MovieListContainer} />
            <Route path="/film/:id" component={MovieDetails} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  store: PropTypes.object.isRequired,
};
