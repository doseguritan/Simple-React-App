import React, { Component } from 'react';
import InputChange from './pages/InputChange';
import InputDateFormat from './pages/InputDateFormat';
import ShowHideComponent from './pages/ShowHideComponent';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Simple React App</h1>
        <InputChange />
        <InputDateFormat />
        <ShowHideComponent />
      </div>
    );
  }
}

export default App;