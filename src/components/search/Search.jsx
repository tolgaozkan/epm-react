import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { searchMovies } from '../../actions/moviesActions';

import styles from './style.css';

class Search extends React.Component {
  componentWillMount() {
    const { ui } = this.props;
    this.setState({ ui });
  }

  searchByClick(searchBy) {
    const { ui } = this.state;
    this.setState({ ui: { ...ui, searchBy } });
  }

  searchClick() {
    const { ui } = this.state;
    const { store } = this.props;
    store.dispatch(searchMovies({ search: ui.search, searchBy: ui.searchBy }));
  }

  updateInputValue(evt) {
    const { ui } = this.state;
    this.setState({ ui: { ...ui, search: evt.target.value } });
  }

  render() {
    const classNames = {
      title: 'btn btn-primary btn-sm',
      genre: 'btn btn-primary btn-sm',
    };

    const { ui } = this.state;
    if (ui.searchBy) {
      classNames[ui.searchBy] += ' active';
    }

    const formGroupClass = `form-group ${styles['search-panel']}`;
    const btnGrpClass = `btn-group-toggle ${styles['btn-group']}`;
    const searchClass = `btn btn-primary btn-sm ${styles.search}`;

    const { search } = ui;

    return (
      <div className={formGroupClass}>
        <input
          type="text"
          className="form-control"
          placeholder="Find your movie"
          value={search}
          onChange={evt => this.updateInputValue(evt)}
        />
        <p>
          Find by:
        </p>
        <div className={styles['find-by-actions']}>
          <div className={btnGrpClass} data-toggle="buttons">
            <button
              className={classNames.title}
              type="button"
              onClick={() => this.searchByClick('title')}
            >
              Title
            </button>
            <button
              className={classNames.genre}
              type="button"
              onClick={() => this.searchByClick('genre')}
            >
              Genre
            </button>
          </div>
          <button
            type="button"
            className={searchClass}
            onClick={() => this.searchClick()}
          >
            Search
          </button>
        </div>
      </div>);
  }
}

Search.propTypes = {
  ui: PropTypes.shape({}).isRequired,
  store: PropTypes.shape({}).isRequired,
};

function mapStateToProps(state) {
  return {
    ui: state.ui,
  };
}

export default connect(mapStateToProps)(Search);
