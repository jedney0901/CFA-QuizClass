import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from './progressbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressBar />, div);
});
