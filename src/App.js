import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

/*
Challenges:

1. Deciding what values should be stored in state
2. I created a text length change handler which checks the event.target.value.length
    to set a showChars flag stored in the state to true/false.  I struggled with deciding 
    if this should be done in the ValidationComponent
3. I had to refer to the sample App.js from lectures on how to create a list of components
 */

class App extends Component {
  state = {
    textArray: [],
    textLength: 0,
    showChars: false
  }

  textLengthChangeHandler = (event) => {
    let showChars = false;

    if(event.target.value.length > 5) {
      showChars = true;
    }

    this.setState({
      textArray: event.target.value.split(''),
      textLength: event.target.value.length,
      showChars
    });
  }

  deleteCharHandler = (charIndex) => {
    const textArray = [...this.state.textArray];

    textArray.splice(charIndex, 1);

    this.setState( {textArray} );
  }

  render() {
    // Add custom code here
    let charComponents = null;

    if(this.state.showChars) {
      charComponents = (
        <div>
          { this.state.textArray.map( (char, charIndex) => {
            return <CharComponent
                    key={charIndex}
                    value={char} 
                    click={this.deleteCharHandler.bind(this, charIndex)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <input type="text"
            value={this.state.textArray.join('')} 
            onChange={this.textLengthChangeHandler}
        />
        <ValidationComponent textLength={this.state.textLength} />
        {charComponents}
      </div>
    );
  }
}

export default App;
