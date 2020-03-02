import React, { Component } from "react";

// function message() {
//   alert(" Button got clicked...");
// }

// const App = () => {
//   return (
//     <>
//       <button onClick={message}>Click</button>
//       <button onMouseMove={message}>Mouse Move</button>
//     </>
//   );
// };
//--------------------------------------------------------------

class Event extends Component {
  // constructor() {
  //   super();
  //   this.message = this.message.bind(this); // bind(this) refers the object of Event class
  // }

  state = {
    uname: "ABC"
  };

  render() {
    return <button onClick={this.message}>Click</button>;

    // return <button onClick={() => this.message()}> Click </button>;
  }

  // message() {
  //   // alert("I am class component...");
  //   alert("Welcome " + this.state.uname);
  // }

  // to use arrow function :-

  message = () => {
    alert("Welcome " + this.state.uname);
  };
}

export default Event;
