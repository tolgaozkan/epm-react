import * as React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

it('renders the header content', () => {
  const result = shallow(<Header />).contains(
    <header className="header">
      <span className="title">
NETFLIX ROULETTE
      </span>
    </header>,
  );
  expect(result).toBeTruthy();
});
