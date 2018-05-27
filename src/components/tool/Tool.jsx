import React from 'react';

require('./style.scss');

export default class Tool extends React.PureComponent {
  render() {
    return (
      <div className="form-group info-bar">
        <p className="movie-counter">{(this.state && this.state.movies && this.state.movies.length) || 0} movies</p>
        <div className="sort-movie">
          <p>Sort by:</p>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-primary btn-sm active">
              <input type="radio" name="options" id="option2" autoComplete="off" /> Title
            </label>
            <label className="btn btn-primary btn-sm">
              <input type="radio" name="options" id="option2" autoComplete="off" /> Director
            </label>
          </div>
        </div>
      </div>
    );
  }
}
