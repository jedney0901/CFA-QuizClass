import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/lib/Button';


class Results extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.end_message}</h3>
        <p>Your score was: {this.props.score}</p>
        <Button bsStyle="Primary" onClick={this.props.handleReset}>Retry</Button>
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
