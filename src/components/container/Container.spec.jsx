import * as React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

import Search from '../search/Search';
import { Tool } from '../tool/Tool';

it('renders search', () => {
  const ui = {};
  const store = { ui };
  const result = shallow(<Container store={store} />).contains(<Search />);
  expect(result).toBeTruthy();
});

it('renders tool', () => {
  const ui = {};
  const store = { ui };
  const result = shallow(<Container store={store} />).contains(<Tool />);
  expect(result).toBeTruthy();
});
