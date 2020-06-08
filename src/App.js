import React, {Component} from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from './components/KeyPadComponent';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = (button) => {

    if (button === '=') {
      this.calculate ()
    }

    else if (button === 'C') {
      this.reset ()
    }

    else if (button === 'CE') {
      this.backspace ()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  calculate = () => {
    try {
      this.setState({
        result: ( eval(this.state.result) || "" ) + "" 
      })
    }
    catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Basic Calculator</h1>
        <ResultComponent result={this.state.result} />
        <KeyPadComponent onClick={this.onClick} />
      </div>
    );
  }
}

export default App;