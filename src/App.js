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
    text: '',
    showChars: false
  }

  textChangeHandler = (event) => {
    let showChars = false;

    if(event.target.value.length > 5) {
      showChars = true;
    }

    this.setState({
      text: event.target.value,
      showChars
    });
  }

  deleteCharHandler = (charIndex) => {
    const textArray = this.state.text.split('');

    textArray.splice(charIndex, 1);

    this.setState( {text: textArray.join('')} );
  }

  render() {
    // Add custom code here
    let charComponents = null;

    if(this.state.showChars) {
      charComponents = (
        <div>
          { this.state.text.split('').map( (char, charIndex) => {
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
            value={this.state.text} 
            onChange={this.textChangeHandler}
        />
        <ValidationComponent textLength={this.state.text.length} />
        {charComponents}
      </div>
    );
  }
}

export default App;
