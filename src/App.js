import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextPreview from './components/TextPreview/TextPreview';
import TextDisplay from './components/TextDisplay/TextDisplay';

class App extends Component {
  constructor(){
    super();
      this.state = {
        curInput: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Lam Nguyen](https://freecodecamp.com/lamngue)*'
      }
  }

  handleChange = (event) =>{
    this.setState({curInput: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className = "preview fl w-50 pa2">
          <p> INPUT TEXT HERE </p>
            <TextPreview value={this.state.curInput} 
              change = {this.handleChange} />
        </div>
        <div className = "display fl w-50 pa2 ">
          <p> YOUR INPUT IS DISPLAYED HERE </p>
            <TextDisplay value = {this.state.curInput} />
        </div>
      </div>
    );
  }
}

export default App;
