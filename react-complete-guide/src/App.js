import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [{name: "Max", age: "29"}, {name: "Manu", age: "30"}],
    showPersons: false
  }

  switchNameHandler = (someName) =>{
    // console.log('this worked');
    this.setState(
      {
        persons: [{name: someName, age: "29"}, {name: "Manu", age: "32"}]
      }
    );
  }

  nameChangeHandler = (event) =>{
    // console.log('this worked');
    this.setState(
      {
        persons: [{name: 'Max', age: "29"}, {name: event.target.value, age: "32"}]
      }
    );
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h3>Is it working now?</h3>
        <button style = {style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { this.state.showPersons === true ? 
        <div>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchNameHandler.bind(this,'Max')} />
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed ={this.nameChangeHandler}>My hobbies: Chess</Person>
        </div> : null}
        
      </div>
    );
  }
}

export default App;
