import React, { Component } from 'react';
import Question from './Question';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    progress: 0
  };
  this.quiz_data = [
    {
      question: 'What is the meaning of life?',
      correct_answer: '42',
      possible_answer: ['love', 'Money', 'Javascript', '42']
    },
    {
      question: 'Who is the best coding YouTuber?',
      correct_answer: 'FunFunFunction',
      possible_answers: ['Coding Train', 'FunFunFunction', 'Young Lamb', 'Wes Bos']
    }
  ]
  }
  render() {
    return (
      <div className="App">
        <h2>Quiz App</h2>
        <Question current_question={this.quiz_data[this.state.progress].question} />
      </div>
    );
  }
}

export default App;
