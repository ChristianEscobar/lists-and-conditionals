import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: '',
    textLength: 0,
    showChars: false
  }

  textLengthChangeHandler = (event) => {
    let showChars = false;

    if(event.target.value.length >= 5) {
      showChars = true;
    } else {
      showChars = false;
    }

    this.setState({
      text: event.target.value,
      textLength: event.target.value.length,
      showChars
    });
  }

  toggleCharComponents = () => {
    const showChars = this.state.showChars;

    this.setState( {showChars: !showChars} );
  }

  render() {
    // Add custom code here
    let charComponents = null;

    if(this.state.showChars) {
      const textArray = this.state.text.split('');

      charComponents = (
        <div>
          { textArray.map(char => {
            return <CharComponent value={char} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <input type="text" 
            onChange={event => this.textLengthChangeHandler(event)}
        />
        <ValidationComponent textLength={this.state.textLength} />
        {charComponents}
      </div>
    );
  }
}

export default App;
