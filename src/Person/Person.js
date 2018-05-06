import React from "react";

import classes from "./Person.css";

const person = props => {
  return (
    <div className={classes.Person}>
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
      <button onClick={props.click}> Delete person</button>
    </div>
  );
};

export default person;
