import React from 'react';
import { render } from 'react-dom';
import FunctionalComponent from './functional';
import ClassComponent from './class';
import ClassPureComponent from './class.pure';
// import CreateClassComponent from './create-class';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const Functional = () => (
  <div style={styles}>
    <FunctionalComponent name="Functional Component" />
  </div>
);

render(<Functional />, document.getElementById('functional'));

const title = React.createElement('h1', {}, 'By React.createElement');
render(title, document.getElementById('createElement'));

render(<ClassComponent />, document.getElementById('classComponent'));

render(<ClassPureComponent />, document.getElementById('classPureComponent'));

// render(CreateClassComponent, document.getElementById('createClass'));
