import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Results extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.end_message}</h3>
        <p>Your score was: {this.props.score}</p>
        <button onClick={this.props.handleReset}>Retry</button>
      </div>
    )
  }
}

Results.propTypes = {
  score: PropTypes.number.isRequired,
  end_message: PropTypes.string,
  handleReset: PropTypes.func.isRequired
}

Results.defaultProps = {
  end_message: 'Congratulations, you suck!!'
}

export default Results;
