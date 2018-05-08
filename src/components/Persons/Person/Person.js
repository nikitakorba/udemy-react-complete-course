import React, { Component } from "react";

import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("Person.js Inside constructor", props);
  }
  componentWillMount() {
    console.log("Person.js Inside component will mount");
  }
  componentDidMount() {
    console.log("Person.js Component Did Mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Updated Persons.js componentWillReceiveProps with", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "Update Persons.js Inside shouldComponentUpdate",
      nextProps,
      nextState
    );
    return nextProps.persons !== this.props.persons;
  }

  render() {
    console.log("Person.js Inside RENDER");
    return (
      <div className={classes.Person}>
        <p>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          defaultValue={this.props.name}
        />
        <button onClick={this.props.click}> Delete person</button>
      </div>
    );
  }
}

export default Person;
