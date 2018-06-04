import React, { Component } from "react";
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor(): ', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
    }

    render() {

        console.log('[Person.js] Inside render())');

        return (
            <Aux>
                <p onClick={this.props.click}> Hi, i'm {this.props.name} , i'm {this.props.age} years old </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        );

        //we can return an array without higher order HTML Root components
        // return [
        //     <p onClick={this.props.click}> Hi, i'm {this.props.name} , i'm {this.props.age} years old </p>,
        //     <p>{this.props.children}</p>,
        //     <input type="text" onChange={this.props.changed} value={this.props.name} />
        // ];
    };
}

export default withClass(Person, classes.Person);