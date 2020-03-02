import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "abc" },
        { id: 2, name: "def" },
        { id: 3, name: "pqr" },
        { id: 4, name: "xyz" }
      ]
    };
  }
  render() {
    return (
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
        {this.state.users.map(user => {
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}

export default Table;
