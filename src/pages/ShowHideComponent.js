import React, { Component } from 'react';

class ShowHideComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ show: !this.state.show })}>Click Me!</button>
        <span>{this.state.show ? 'Please hide me' : null}</span>
      </div>
    );
  }
}

export default ShowHideComponent;