import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CircularProgressbar from 'react-circular-progressbar';


class ProgressBar extends Component {
  render() {
    return (
      <CircularProgressbar percentage={(this.props.current_step-1)/this.props.question_length*100} />
    )
  }
}

// const ProgressBar = ({ current_step, question_length }) => {
//   return <p>{current_step}/{question_length}</p>
// }

ProgressBar.propTypes = {
  current_step: PropTypes.number.isRequired,
  question_length: PropTypes.array
}

export default ProgressBar;
