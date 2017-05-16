import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('Reset Quiz returns 0', () => {
  App.state = ({
    progress: 2,
    selected: 'Pick one!',
    score: 2
  });
  App.resetQuiz
  expect(App.state.progress).toBe(0);
});
