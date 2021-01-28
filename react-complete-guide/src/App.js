import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [{ id: 'aaaaa' ,name: "Max", age: "29"}, {id: 'bbbbb' ,name: "Manu", age: "30"}],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    /*It is not a good practice to change the original state of array managed byb react
    Instead will make a copy of array by using slice() or ... (spread operator)
    */
    // const person = this.state.persons.slice();
    const person = [...this.state.persons];
    person.splice(personIndex,1);
    this.setState({persons: person});
  }

  nameChangeHandler = (event, id) =>{
    // console.log('this worked');
    //finding the index of person with given person id input
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //copying the particular person with person index using spread operator
    const person = {...this.state.persons[personIndex]};

    //changing the input box event for the person
    person.name = event.target.value;

    //copying the persons from state and changing the particular value for person
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState(
      {
        persons: persons
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

    let persons = null;

    if(this.state.showPersons){
      persons = (this.state.persons.map((person,index) => {
        return <Person 
        click={this.deletePersonHandler.bind(this,index)} 
        name={person.name} 
        age={person.age}
        //Adding unique key property improve performance in long lists (to compare changes in state)
        key={person.id}
        changed={(event) => this.nameChangeHandler(event,person.id)}/>
      }));
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h3>Is it working now?</h3>
        <button style = {style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { persons }
        
      </div>
    );
  }
}

export default App;
