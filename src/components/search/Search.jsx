import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { searchMovies } from '../../actions/moviesActions';

import styles from './style.css';

class Search extends React.Component {
  componentWillMount() {
    this.setState({ ui: this.props.ui });
  }

  searchByClick(searchBy) {
    this.setState({ ui: { ...this.state.ui, searchBy } });
  }

  searchClick() {
    const { ui } = this.state;
    this.props.store.dispatch(searchMovies({ search: ui.search, searchBy: ui.searchBy }));
  }

  updateInputValue(evt) {
    this.setState({ ui: { ...this.state.ui, search: evt.target.value } });
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

    return (
      <div className={formGroupClass}>
        <input
          type="text"
          className="form-control"
          placeholder="Find your movie"
          value={this.state.ui.search}
          onChange={evt => this.updateInputValue(evt)}
        />
        <p>Find by:</p>
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
        >Search
        </button>
      </div>);
  }
}

Search.propTypes = {
  ui: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    ui: state.ui,
  };
}

export default connect(mapStateToProps)(Search);
