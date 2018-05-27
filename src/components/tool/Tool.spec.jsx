import * as React from 'react';
import { shallow } from 'enzyme';

import Tool from './Tool';

it('renders movie counter', () => {
  const result = shallow(<Tool />).contains(<p className="movie-counter">0 movies</p>);
  expect(result).toBeTruthy();
});

it('renders sort movie div', () => {
  const result = shallow(<Tool />).contains(
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
  );
  expect(result).toBeTruthy();
});
