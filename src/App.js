import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Nikita", age: 23 },
      { name: "Alina", age: 23 },
      { name: "Oleh", age: 47 },
      { name: "Olena", age: 43 }
    ]
  };

  switchNameHandler() {
    console.log('Was clicked!!!');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React app</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        >
          My hobbies: gardening
        </Person>
      </div>
    );
  }
}

export default App;
