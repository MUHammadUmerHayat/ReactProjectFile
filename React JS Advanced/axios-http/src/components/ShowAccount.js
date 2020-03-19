import React, { Component } from "react";
import Axios from "axios";

export default class ShowAccount extends Component {
  state = {
    accounts: []
  };
  componentDidMount() {
    this.getAccounts();
  }
  getAccounts = async () => {
    const url = "https://techchef-b659d.firebaseio.com/accounts.json";
    const response = await Axios.get(url);
    console.log(response);

    const accounts = [];
    for (let key in response.data) {
      accounts.push({
        ...response.data[key],
        id: key
      });
    }
    this.setState({
      accounts: accounts
    });
  };

  deleteAccount = async account => {
    const url = `https://techchef-b659d.firebaseio.com/accounts/${account.id}/.json`;
    const response = await Axios.delete(url);
    console.log(response);

    // this is not good practice
    this.getAccounts();
  };
  editAccount = async account => {
    const url = `https://techchef-b659d.firebaseio.com/accounts/${account.id}/.json`;
    account.name= "Something"
    const updateData = {
        name: account.name,
        email: account.email,
        phoneno: account.phoneno,
        password: account.password
    }
    const response =  await Axios.put(url,updateData)
    console.log(response)
    this.getAccounts();
  };
  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Sl NO </th>
              <th scope="col">Name</th>
              <th scope="col">Phone NO</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.accounts.map((account, index) => {
              return (
                <tr key={account.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{account.name}</td>
                  <td>{account.phoneno}</td>
                  <td>{account.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.deleteAccount(account);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        this.editAccount(account);
                      }}
                      className="btn btn-danger"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
