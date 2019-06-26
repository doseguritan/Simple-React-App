import React, { Component } from 'react';

class InputDateFormat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      formattedText: '00/00/0000'
    }
  }
  onInputChange = (e) => {
    let input = e.target.value;
    // const data
    if (input.length === 2 || input.length === 5) {
      input += '/'
    }
    this.setState({ inputText: input, formattedText: input });
  }
  render() {
    return (
      <div className="input-change">
        <input type="text" name="text-change" value={this.state.inputText} onChange={this.onInputChange} maxLength={10} />
        <span>Your Formatted Text: </span><span>{this.state.formattedText}</span>
      </div>
    );
  }
}

export default InputDateFormat;