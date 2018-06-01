import * as React from 'react';
import { create as render } from 'react-test-renderer';

import MovieList from './MovieList';

it('renders movie list', () => {
  const result = render(<MovieList />);
  const snap = result.toJSON();

  expect(snap).toMatchSnapshot();
});
