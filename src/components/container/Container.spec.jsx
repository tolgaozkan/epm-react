import * as React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

import Search from '../search/Search';
import Tool from '../tool/Tool';
import MovieListContainer from '../movie-list-container/MovieListContainer';

it('renders search', () => {
  const result = shallow(<Container />).contains(<Search />);
  expect(result).toBeTruthy();
});

it('renders tool', () => {
  const result = shallow(<Container />).contains(<Tool />);
  expect(result).toBeTruthy();
});

it('renders movie list container', () => {
  const result = shallow(<Container />).contains(<MovieListContainer />);
  expect(result).toBeTruthy();
});
