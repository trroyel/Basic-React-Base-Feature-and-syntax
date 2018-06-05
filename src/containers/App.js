import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cookpit from '../components/Cookpit/Cookpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 'gfhd', name: 'Max', age: 28 },
        { id: 'hsgd', name: 'Manu', age: 29 },
        { id: 'abcd', name: 'Stephanie', age: 26 }
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // We dont need to check shouldComponentUpdate() if we extends PureComponent. 
  // It check all props with previous props automatically.

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js]=> shouldComponentUpdate: ', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js]=> componentWillUpdate: ', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js]=> componentDidUpdate: ');
  }

  //===This is the modern Approach of initialize state
  //===instead of using constructor

  // state = {
  //   persons: [
  //     { id: 'gfhd', name: 'Max', age: 28 },
  //     { id: 'hsgd', name: 'Manu', age: 29 },
  //     { id: 'abcd', name: 'Stephanie', age: 26 }
  //   ],
  //   showPersons: false
  // };

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

    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  };


  loginHandler = () => {
    this.setState({ authenticated: true });
  }


  render() {

    console.log('[App.js] Inside render())');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        isAuthenticated={this.state.authenticated}
        changed={this.nameChangeHandler} />;
    }


    return (
      <Aux>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show Person</button>
        <Cookpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          login={this.loginHandler}
          clicked={this.togglePersonsHandler} />

        {persons}

      </Aux>
    );
  }
}

export default withClass(App, classes.App);
