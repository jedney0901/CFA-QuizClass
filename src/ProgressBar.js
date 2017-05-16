import React, { Component } from 'react';

class ProgressBar extends Component {
  render() {
    return <p>{this.props.current_step}</p>
  }
}

export default ProgressBar;
