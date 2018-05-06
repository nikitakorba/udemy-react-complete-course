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

  switchNameHandler = newName => {
    //console.log("Was clicked!!!");
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: "Alina", age: 23 },
        { name: "Oleh", age: 23 },
        { name: "Olena", age: 23 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 23 },
        { name: "Alina", age: 23 },
        { name: "Oleh", age: 23 },
        { name: "Olena", age: 23 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm React app</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("vasilian")}
        >
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Hello")}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Varan")}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "Petro")}
        />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
          click={this.switchNameHandler.bind(this, "Baran")}
        >
          My hobbies: gardening
        </Person>
      </div>
    );
  }
}

export default App;
