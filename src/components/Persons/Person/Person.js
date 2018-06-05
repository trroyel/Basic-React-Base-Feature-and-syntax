import React, { Component } from "react";
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
        console.log('[Person.js] Inside constructor(): ', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        console.log('Position => ', this.props.position);

        if (this.props.position === 0) {
            //console.log('Worked..');
            this.inputElement.current.focus();
        }
    }

    focusMethod() {
        console.log('\n\n==== Before calling focus method=== \n\n');
        this.inputElement.current.focus();
        console.log('\n\n==== After calling focus method=== \n\n');

    }

    render() {

        console.log('[Person.js] Inside render())');

        return (
            <Aux>
                {this.props.isAuthenticated ? 'This is Authenticated' : null}
                <p onClick={this.props.click}> Hi, i'm {this.props.name} , i'm {this.props.age} years old </p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
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
//export default Person;