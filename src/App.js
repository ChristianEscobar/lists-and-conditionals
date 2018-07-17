import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {
  state = {
    textLength: 0
  }

  textLengthChangeHandler = (event) => {
    this.setState({
      textLength: event.target.value.length
    });
  }

  render() {
    return (
      <div className="App">
        <input type="text" 
            onChange={event => this.textLengthChangeHandler(event)}
        />
        <ValidationComponent textLength={this.state.textLength} />
      </div>
    );
  }
}

export default App;
