import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { sortMovies } from '../../actions/moviesActions';

require('./style.scss');

export class Tool extends React.PureComponent {
  componentWillMount() {
    this.setState({ ui: this.props.ui });
  }

  sortClick(sort) {
    this.setState({ ui: { ...this.state.ui, sort } });
    this.props.store.dispatch(sortMovies(sort));
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

    return (
      <div className="form-group info-bar">
        <p className="movie-counter">{(this.props && this.props.movies && this.props.movies.length) || 0} movies</p>
        <div className="sort-movie">
          <p>Sort by:</p>
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
  ui: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    movies: state.movies,
    ui: state.ui,
  };
}

export default connect(mapStateToProps)(Tool);
