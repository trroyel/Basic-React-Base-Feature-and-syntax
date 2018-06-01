import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'gfhd', name: 'Max', age: 28 },
      { id: 'hsgd', name: 'Manu', age: 29 },
      { id: 'abcd', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    //getting a new persons array.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    //Find the person index
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //fins the person from persons array as new object
    const person = {
      ...this.state.persons[personIndex]
    };

    //get person name from event
    person.name = event.target.value;

    //get all person from state and set new person
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({ showPersons: !doesShow });
  };

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1> Hi, I'm React App </h1>
        <p className={assignedClasses.join(' ')}> This is Really Working! </p>
        {/*The arrow function will call switchNameHandler() with arguments.
           This is not efficient. use bind()  instead of it*/}
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Switch Name</button>

        {persons}

        {
          //JSX comment's inside curly brace
          //Create react App without JSX
          //React.createElement('div', {className: 'App'},  React.createElement('h1', null, 'Hi, i am a react app.'))
        }

      </div>
    );
  }
}

export default App;
