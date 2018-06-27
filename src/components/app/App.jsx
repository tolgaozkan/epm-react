import PropTypes from 'prop-types';
import React from 'react';

import Container from '../container/Container';
import Header from '../header/Header';

export default class App extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <div>
        <Header />
        <Container store={store} />
      </div>
    );
  }
}

// history: React.PropTypes.shape({ foo: { bar: {} } });

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
};
