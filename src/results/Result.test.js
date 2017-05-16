import React from 'react';
import ReactDOM from 'react-dom';
import Results from './Results';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Results />, div);
});


//
// it('Reset button resets their progress and question to 0', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });
