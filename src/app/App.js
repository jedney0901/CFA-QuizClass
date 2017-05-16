import React, { Component } from 'react';
import Question from '../questions/Question';
import ProgressBar from '../progressbar/ProgressBar';
import MultiChoice from '../multichoice/MultiChoice';
import Results from '../results/Results'
import './App.css';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    progress: 0,
    selected: 'Pick one!',
    score: 0
  };
  this.updateSelected = this.updateSelected.bind(this);
  this.submitAnswer = this.submitAnswer.bind(this);
  this.resetQuiz = this.resetQuiz.bind(this);
  this.quiz_data = [
      {
        question: 'What is the meaning of life?',
        correct_answer: '42',
        possible_answers: ['love', 'Money', 'Javascript', '42']
      },
      {
        question: 'Who is the best coding YouTuber?',
        correct_answer: 'FunFunFunction',
        possible_answers: ['Coding Train', 'FunFunFunction', 'Young Lamb', 'Wes Bos']
      }
    ]
  }

  submitAnswer() {
     if (this.state.selected === this.quiz_data[this.state.progress].correct_answer) {
       this.setState({
         score: this.state.score + 1,
         progress: this.state.progress + 1,
         selected: 'Not yet!'
       })
     } else {
       this.setState({
         progress: this.state.progress + 1,
         selected: 'Not yet!'
       })
     }
   }
  updateSelected(answer) {
    this.setState({
      selected: answer
    })
  }

  resetQuiz() {
    this.setState({
      progress: 0
    })
  }


  render() {
     return (
       <div>
         <h2>Quiz App</h2>

         {this.state.progress < this.quiz_data.length ? (
           <div>
             <Question current_question={this.quiz_data[this.state.progress].question} />
             <ProgressBar current_step={this.state.progress + 1} question_length={this.quiz_data.length} />
             <MultiChoice
               answers={this.quiz_data[this.state.progress].possible_answers}
               updateSelected={this.updateSelected}
               handleSubmit={this.submitAnswer}
               selectedAnswer={this.state.selected}
             />
           </div>
         )
         : (
         <Results score={this.state.score} end_message="Congratulations, you have finished!" handleReset={this.resetQuiz} />
          )}
       </div>
     );
   }
 }

export default App;
