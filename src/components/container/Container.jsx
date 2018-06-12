import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorPage from '../error-page/ErrorPage';
import MovieDetails from '../movie-details/MovieDetails';
import MovieListContainer from '../movie-list-container/MovieListContainer';
import Search from '../search/Search';
import Tool from '../tool/Tool';

require('./style.scss');

export default class Container extends React.Component {
  render() {
    return (
      <div className="container-user container">

        <div className="row">
          <Search store={this.props.store} />
        </div>

        <div className="row">
          <Tool store={this.props.store} />
        </div>

        <div className="row">
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
