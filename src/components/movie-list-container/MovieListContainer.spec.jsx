import * as React from 'react';
import { create as render } from 'react-test-renderer';

import MovieListContainer from './MovieListContainer';

class MockResponse {
  json() {
    return {
      data: [],
    };
  }
}

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() => {
    const p = new Promise((resolve) => {
      resolve(new MockResponse());
    });

    return p;
  });
});

it('renders movie list container', () => {
  const result = render(<MovieListContainer />);
  const snap = result.toJSON();

  expect(snap).toMatchSnapshot();
});
