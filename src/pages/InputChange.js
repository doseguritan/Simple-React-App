import React, { Component } from 'react';

class InputChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    }
  }
  render() {
    return (
      <div className="input-change">
        <input name="text-change" value={this.state.inputText} onChange={(e) => this.setState({ inputText: e.target.value })} />
        <span>Your Inputted Text: </span><span>{this.state.inputText}</span>
      </div>
    );
  }
}

export default InputChange;