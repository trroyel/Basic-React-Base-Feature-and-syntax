import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cookpit from '../components/Cookpit/Cookpit';

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

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />;
    }


    return (
      <div className={classes.App}>
        <Cookpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />

        {persons}

      </div>
    );
  }
}

export default App;
