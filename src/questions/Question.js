import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
  render() {
    return <h2>{this.props.current_question}</h2>
  }
}

Question.propTypes = {
  current_question: PropTypes.string.isRequired
}
export default Question;
