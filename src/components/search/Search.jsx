import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { searchMovies } from '../../actions/moviesActions';

require('./style.scss');

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

    return (
      <div className="form-group search-panel">
        <input
          type="text"
          className="form-control"
          placeholder="Find your movie"
          value={this.state.ui.search}
          onChange={evt => this.updateInputValue(evt)}
        />
        <p>Find by:</p>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
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
          className="btn btn-primary btn-sm search"
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
