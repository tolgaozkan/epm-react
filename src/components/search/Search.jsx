import React from 'react';

require('./style.scss');

export default class Search extends React.Component {
  render() {
    return (
      <div className="form-group search-panel">
        <input type="text" className="form-control" placeholder="Find your movie" />
        <p>Find by:</p>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-primary btn-sm active">
            <input type="radio" name="options" id="option2" autoComplete="off" /> Title
          </label>
          <label className="btn btn-primary btn-sm">
            <input type="radio" name="options" id="option2" autoComplete="off" /> Director
          </label>
        </div>
        <button type="button" className="btn btn-primary btn-sm search">Search</button>
      </div>);
  }
}
