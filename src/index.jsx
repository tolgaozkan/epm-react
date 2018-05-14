import React from 'react';
import { render } from 'react-dom';
import FunctionalComponent from './functional/FunctionalComponent';
import ClassComponent from './class/ClassComponent';
import ClassPureComponent from './class-pure/ClassPureComponent';

import style from './index.scss';

const Functional = () => (
  <div className="functional">
    <FunctionalComponent name="Functional Component" />
  </div>
);

render(<Functional />, document.getElementById('functional'));

const title = React.createElement('h1', {}, 'By React.createElement');
render(title, document.getElementById('createElement'));

render(<ClassComponent />, document.getElementById('classComponent'));

render(<ClassPureComponent />, document.getElementById('classPureComponent'));
