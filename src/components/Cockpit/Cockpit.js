import React from "react";
import classes from "./Cockpit.css";
import Wrapper from "../../HigherOrderComponents/Wrapper";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = classes.button;
  if (props.showPersons) {
    btnClass = [classes.button, classes.red].join(" ");
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <Wrapper>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
    </Wrapper>
  );
};

export default cockpit;
