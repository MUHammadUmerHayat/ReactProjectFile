import React, { Component } from "react";
import { UserConsumer } from "../context-api/userContext";

export default class CompC extends Component {
  render() {
    return (
      <UserConsumer>
        {data => {
          return (
            <div>
              <h1>Component C</h1>
              <h1>{data}</h1>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
