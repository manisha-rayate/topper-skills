import React from "react";

class Counter extends React.Component {
  constructor() {
    super(); // calls to React.Component class constructor. // calls to parent class constructor
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });

    // const count = this.state.count; // or  object destructuring
    const { count } = this.state; // object destructuring
    console.log(count);
    console.log(test);
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
export default Counter;
