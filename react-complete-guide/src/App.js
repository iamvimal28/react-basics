import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [{name: "Max", age: "29"}, {name: "Manu", age: "30"}]
  }

  switchNameHandler = () =>{
    // console.log('this worked');
    this.setState(
      {
        persons: [{name: "Maxmillian", age: "29"}, {name: "Manu", age: "32"}]
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h3>Is it working now?</h3>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Chess</Person>
      </div>
    );
  }
}

export default App;
