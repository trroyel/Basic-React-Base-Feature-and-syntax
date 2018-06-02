import React from "react";
import classes from './Person.css';

const rnd = Math.random();

if (rnd > 0.7) {
    throw new Error('Something went wrong.');
}

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}> Hi, i'm {props.name} , i'm {props.age} years old </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;