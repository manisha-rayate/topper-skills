import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Name:{this.props.name}</h1>
        <h1>Mobile:{this.props.mobile}</h1>
        <h1>City:{this.props.city}</h1>
      </div>
    );
  }
}

export default Profile;
