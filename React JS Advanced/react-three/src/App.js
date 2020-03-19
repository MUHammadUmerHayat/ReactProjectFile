import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import Refs from "./components/Refs";
import InputRefs from "./components/InputRefs";
import RefFunc from "./components/RefFunc";
import ListView from "./components/ListView";
import DetailView from "./components/DetailView";

export default class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Chandan",
        age: 27
      },
      {
        id: 2,
        name: "Chinna",
        age: 25
      },
      {
        id: 3,
        name: "Guru",
        age: 22
      }
    ],
    selectedPerson: null
  };
  getClickedPerson = person => {
    console.log(person);
    this.setState({
      selectedPerson: person
    });
  };
  render() {
    return (
      <div>
        {/* <LoginForm /> */}
        {/* <Refs /> */}
        {/* <InputRefs />
        <RefFunc /> */}
        <ListView action={this.getClickedPerson} persons={this.state.persons} />
        {this.state.selectedPerson ? (
          <DetailView selected={this.state.selectedPerson} />
        ) : null}
      </div>
    );
  }
}
