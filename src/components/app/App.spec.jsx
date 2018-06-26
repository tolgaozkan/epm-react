import * as React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Header from '../header/Header';
import Container from '../container/Container';

it('renders the header', () => {
  const result = shallow(<App />).contains(<Header />);
  expect(result).toBeTruthy();
});

it('renders the container', () => {
  const result = shallow(<App />).contains(<Container />);
  expect(result).toBeTruthy();
});
