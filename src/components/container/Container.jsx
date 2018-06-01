import React from 'react';

import MovieListContainer from '../movie-list-container/MovieListContainer';
import Search from '../search/Search';
import Tool from '../tool/Tool';
// import MovieDetails from './movieDetails/MovieDetails';
// import ErrorBoundry from './errorBoundry/ErrorBoundry';

require('./style.scss');

export default class Container extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container-user container">

        <div className='row'>
            <Search />
        </div>

        {/* { true === false &&
          <div className='row'>
              <MovieDetails />
          </div> 
        } */}

        <div className='row'>
          <Tool />
        </div>

        <div className='row'>
          <MovieListContainer />
        </div>
      </div>
    );
  }
}

