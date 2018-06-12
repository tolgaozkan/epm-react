import React from 'react';
import { Link } from 'react-router-dom';

require('./style.scss');

export default class Header extends React.PureComponent {
  render() {
    return (
      <Link to="/">
        <header className="header">
          <span className="title">NETFLIX ROULETTE</span>
        </header>
      </Link>
    );
  }
}
