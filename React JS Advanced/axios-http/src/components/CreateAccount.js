import React, { Component } from "react";
import Axios from "axios";

export default class CreateAccount extends Component {
  state = {
    name: "",
    email: "",
    phoneno: "",
    password: ""
  };

  saveAccounts = e => {
    e.preventDefault();
    const url = "https://techchef-b659d.firebaseio.com/accounts.json";
    Axios.post(url, this.state)
      .then(response => {
        console.log("response", response);
        this.setState({
          name: "",
          email: "",
          phoneno: "",
          password: ""
        });
        console.log(this.props);
        this.props.history.push("/show");
      })
      .catch(error => {
        console.log(error);
      });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.saveAccounts}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Name</label>
              <input
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                type="text"
                class="form-control"
                id="inputEmail4"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Phone Number</label>
              <input
                name="phoneno"
                value={this.state.phoneno}
                onChange={this.handleChange}
                type="number"
                class="form-control"
                id="inputPassword4"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                class="form-control"
                id="inputEmail4"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                class="form-control"
                id="inputPassword4"
              />
            </div>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}
