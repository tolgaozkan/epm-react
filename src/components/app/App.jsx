import * as React from 'react';

import Container from '../container/Container';
import Header from '../header/Header';

export default function App(
  props: { store: any },
) {
  const { store } = props;
  return (
    <div>
      <Header />
      <Container store={store} />
    </div>
  );
}
