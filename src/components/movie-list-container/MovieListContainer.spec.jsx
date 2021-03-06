import * as React from 'react';
import { create as render } from 'react-test-renderer';

import { MovieListContainer } from './MovieListContainer';

it('renders movie list container', () => {
  const movies = [
    {
      id: 1,
      title: 'Guardians of the Galaxy Vol. ',
      genres: ['Action', 'Adventure', 'Science Fiction'],
      release_date: '2020-05-01',
      overview: "The third film based on Marvel's Guardians of the Galaxy.",
    },
    {
      id: 2,
      title: 'Transformers 7',
      genres: ['Science Fiction', 'Action', 'Adventure'],
      release_date: '2019-06-26',
    },
  ];

  const result = render(<MovieListContainer movies={movies} />);
  const snap = result.toJSON();

  expect(snap).toMatchSnapshot();
});
