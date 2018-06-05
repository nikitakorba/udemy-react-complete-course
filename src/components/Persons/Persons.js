import React, { PureComponent } from "react";

import Person from "./Person/Person";

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("Persons.js Inside constructor", props);
  }
  componentWillMount() {
    console.log("Persons.js Inside component will mount");
  }
  componentDidMount() {
    console.log("Persons.js Component Did Mount");
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.clicked !== this.props.clicked ||
  //     nextProps.changed !== this.props.changed
  //   );
  // }
  render() {
    console.log("Persons.js Inside render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
