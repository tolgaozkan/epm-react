import PropTypes from 'prop-types';
import * as React from 'react';
import { connect } from 'react-redux';

import { sortMovies } from '../../actions/moviesActions';
import styles from './style.css';

type Props = {
  ui: any,
  store: any,
  movies: any[],
};

type State = {
  ui: any,
  movies: any[],
};

export class Tool extends React.PureComponent<Props, State> {
  componentWillMount() {
    const { ui } = this.props;
    this.setState({ ui });
  }

  sortClick(sort) {
    const { ui } = this.state;
    const { store } = this.props;
    this.setState({ ui: { ...ui, sort } });
    store.dispatch(sortMovies(sort));
  }

  render() {
    const classNames = {
      title: 'btn btn-primary btn-sm',
      date: 'btn btn-primary btn-sm',
    };

    const { ui } = this.state;
    if (ui.sort) {
      classNames[ui.sort] += ' active';
    }

    const formGroupClass = `form-group ${styles['info-bar']}`;

    const { movies } = this.props;

    return (
      <div className={formGroupClass}>
        <p className="movie-counter">
          {(this.props && movies && movies.length) || 0}
          {' '}
          movies
        </p>
        <div className={styles['sort-movie']}>
          <p>
            Sort by:
          </p>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <button
              className={classNames.title}
              type="button"
              onClick={() => this.sortClick('title')}
            >
              Title
            </button>
            <button
              className={classNames.date}
              type="button"
              onClick={() => this.sortClick('date')}
            >
              Date
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Tool.propTypes = {
  ui: PropTypes.shape({}).isRequired,
  store: PropTypes.shape({}).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

function mapStateToProps(state) {
  return {
    movies: state.movies,
    ui: state.ui,
  };
}

export default connect(mapStateToProps)(Tool);
