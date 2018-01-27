import React from 'react';
import ReactDOM from 'react-dom';
import App from './NotTerminal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotTerminal />, div);
});
