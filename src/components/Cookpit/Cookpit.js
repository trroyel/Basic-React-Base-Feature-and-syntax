import React from 'react';
import classes from './Cookpit.css';

const cookpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cookpit}>
            <h1>{props.appTitle}</h1>
            <h1> Hi, I'm React App </h1>
            <p className={assignedClasses.join(' ')}> This is Really Working! </p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toogle Person</button>
        </div>
    );
};

export default cookpit;