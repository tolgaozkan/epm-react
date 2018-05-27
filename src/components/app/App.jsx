import React from 'react';

import Header from '../header/Header';
import Container from '../container/Container';
import { getState } from 'redux';

export default class App extends React.Component {
  render() {
    const store = this.props.store;

    return (
      <div>
        <Header />
        <Container store={store} />
      </div>
    );
  }
}
