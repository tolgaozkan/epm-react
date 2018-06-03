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

App.propTypes = {
  store: PropTypes.object.isRequired,
};
