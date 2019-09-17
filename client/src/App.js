import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount(){
    fetch('/api/goals')
      .then(resp => resp.json())
      .then(json => console.log(json))
  }

  render(){
    return (
      <div className="App">
        Hello World
      </div>
    );
  }

}

export default App;
