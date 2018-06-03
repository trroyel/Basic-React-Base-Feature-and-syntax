import React from 'react';
import classes from './Cookpit.css';
import Aux from '../../hoc/Aux';

const cookpit = (props) => {

    const assignedClasses = [];
    let btnClass = classes.Button;

    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <Aux>
            <h1> Hi, I'm React App </h1>
            <p className={assignedClasses.join(' ')}> This is Really Working! </p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toogle Person</button>
        </Aux>
    );
};

export default cookpit;