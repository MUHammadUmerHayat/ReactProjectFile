import React, { Component } from "react";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (event, value) => {
    console.log(value);
    if (value === "email") {
      this.setState({
        [event.target.name]: event.target.value
      });
    } else if (value === "pwd") {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={this.state.email}
            onChange={event => {
              this.handleChange(event, "email");
            }}
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={this.state.password}
            onChange={event => {
              this.handleChange(event, "pwd");
            }}
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
