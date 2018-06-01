import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],

    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('Inside nameChangeHandler');
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'Delwar Hossain', age: 29 },
        { name: 'Rubaiyat Rowshon', age: 15 }
      ]
    });

    // console.log(this.state.persons[0].name);
    // console.log(this.state.persons[1].name);
    // console.log(this.state.persons[2].name);

  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 24 },
        { name: event.target.value, age: 29 },
        { name: 'Rubaiyat Rowshon', age: 15 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({ showPersons: !doesShow });
  };

  render() {

    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} >My hobbies: Programming </Person>

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Tanvir Rahman Royel')}
            change={this.nameChangeHandler} />

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />

        </div>
      );
    }


    return (
      <div className="App">
        <h1> Hi, I'm React App </h1>
        <p> This is Really Working! </p>
        {/*The arrow function will call switchNameHandler() with arguments.
           This is not efficient. use bind()  instead of it*/}
        <button
          style={style}
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
