import React, { Component } from 'react';
import PropTypes from 'prop-types'


// class ProgressBar extends Component {
//   render() {
//     return <p>{this.props.current_step}/{this.props.question_length}</p>
//   }
// }

const ProgressBar = ({ current_step, question_length }) => {
  return <p>{current_step}/{question_length}</p>
}

ProgressBar.propTypes = {
  current_step: PropTypes.number.isRequired,
  question_length: PropTypes.array
}

export default ProgressBar;
