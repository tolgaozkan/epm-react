import * as React from 'react';
import { create as render } from 'react-test-renderer';

import ErrorBoundary from './ErrorBoundary';

it('renders error boundary', () => {
  const result = render(<ErrorBoundary />);
  const snap = result.toJSON();

  snap.state = { hasError: true };

  expect(snap).toMatchSnapshot();
});