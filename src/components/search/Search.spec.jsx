import * as React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';


it('renders find option', () => {
  const result = shallow(<Search />).contains(<input type="radio" name="options" id="option2" autoComplete="off" />);
  expect(result).toBeTruthy();
});

it('renders search button', () => {
  const result = shallow(<Search />).contains(
    <button type="button" className="btn btn-primary btn-sm search">
      Search
    </button>,
  );
  expect(result).toBeTruthy();
});
