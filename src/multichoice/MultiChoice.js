import React, { Component } from 'react';
import PropTypes from 'prop-types'

class MultiChoice extends Component {
  render() {
    return (
      <div>
        {this.props.answers.map((answer, i) => <button key={i} onClick={() => this.props.updateSelected(answer)}> {answer} </button>)}
      <br />
      <p>You have Selected: {this.props.selectedAnswer}</p>
      <button onClick={this.props.handleSubmit}>Submit</button>
      </div>
    )
  }
}

MultiChoice.propTypes = {
  answers: PropTypes.array.isRequired,
  updateSelected: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string.isRequired
}



export default MultiChoice;
