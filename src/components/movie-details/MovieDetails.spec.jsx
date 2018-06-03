import * as React from 'react';
import { create as render } from 'react-test-renderer';

import { MovieDetails } from './MovieDetails';

it('renders movie details', () => {
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

  const match = {
    params: {
      id: '1',
    },
  };

  const result = render(<MovieDetails movies={movies} match={match} />);
  const snap = result.toJSON();

  expect(snap).toMatchSnapshot();
});
