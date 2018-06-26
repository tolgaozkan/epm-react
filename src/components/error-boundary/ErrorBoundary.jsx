import PropTypes from 'prop-types';
import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });

    // eslint-disable-next-line no-console
    console.error(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          Something went wrong.
        </h1>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
