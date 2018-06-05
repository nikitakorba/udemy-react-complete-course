import React, { PureComponent } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("App.js Inside constructor", props);
    this.state = {
      persons: [
        { id: "1", name: "Nikita", age: 23 },
        { id: "12", name: "Alina", age: 23 },
        { id: "123", name: "Oleh", age: 47 },
        { id: "1234", name: "Olena", age: 43 }
      ],
      showPersons: false
    };
  }

  componentWillMount() {
    console.log("App.js Inside component will mount");
  }
  componentDidMount() {
    console.log("App.js Component Did Mount");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Update App.js] Inside should Component Update");
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );
  // }

  componentWillUpdate() {
    console.log("[UPDATE App.js] Inside component will update");
  }
  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside component did update");
  }
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("App.js RENDER");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    return (
      <WithClass classes={classes.App}>
        <button onClick={() => this.setState({ showPersons: true })}>
          Always show persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </WithClass>
    );
  }
}

export default App;
