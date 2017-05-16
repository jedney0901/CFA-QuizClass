import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Question />, div);
});

// it('Displays all questions inside the JSON', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });
