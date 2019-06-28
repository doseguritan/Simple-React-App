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
    console.log(e)
    if (input.length === 2 || input.length === 5) {
      input += '/'
    }
    this.setState({ inputText: input, formattedText: input });
  }
  onKeyPress = (e) => {
    return (e.code === 8)
  }
  render() {
    return (
      <div className="input-change">
        <input type="text" name="text-change" value={this.state.inputText} onChange={this.onInputChange} maxLength={10} onKeyPress={this.onKeyPress} />
        <span>Your Formatted Text: </span><span>{this.state.formattedText}</span>
      </div>
    );
  }
}

export default InputDateFormat;