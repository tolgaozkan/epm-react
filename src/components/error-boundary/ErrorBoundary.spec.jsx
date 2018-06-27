import * as React from 'react';
import { create as render } from 'react-test-renderer';

import ErrorBoundary from './ErrorBoundary';

it('renders  error boundary', () => {
  const children = (<div />);

  // eslint-disable-next-line react/no-children-prop
  const result = render(<ErrorBoundary children={children} />);
  const snap = result.toJSON();

  snap.state = { hasError: true };

  expect(snap).toMatchSnapshot();
});
