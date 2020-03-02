import React, { Component } from "react";

class LifeCycle extends Component {
  //--------------------------------- Mounting Phase method ------------------------------------
  //   // - get called only once, at the time creating component class object
  //   constructor() {
  //     super();
  //     console.log("Constructor...");
  //     this.state = { name: "Topper Skills" };
  //   }

  //   // - this is rarely used method, it accepts state and props as parameter, it can change the
  //   // state depending on the value of props.
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("state: " + JSON.stringify(state));

  //     console.log("getDerivedStateFromProps");
  //     return { name: props.name };
  //   }

  //   // returns react elements (JSX) to be added to the DOM, this is mandatory life cycle method
  //   render() {
  //     console.log("render");
  //     return <h1>Rendering {this.state.name}</h1>;
  //   }

  //   // - this gets called after react elements are mounted on the DOM, this method execute only once
  //   // - this is used to perform operations which are required after creating DOM like fetching data
  //   // from server.
  //   componentDidMount() {
  //     console.log("componentDidMount...");
  //   }

  //-------------------------------Updating Phase Methods ---------------------------------------

  static getDerivedStateFromProps(props, state) {
    console.log("state: " + JSON.stringify(state));
    console.log("getDerivedStateFromProps");
    return null;
  }

  // - this method accepts the next state and props, and based on the values of new state and
  // props decides whether allow to update or not.
  // - this method returns a boolean value, if returned true then components get updated
  // (re-rendered) and if returned false then the component will not get updated.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if (nextState.name === undefined || nextState.name === "") return false;
    else return true;
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Rendering...</h1>
        <button onClick={this.hanadleClick}> Click </button>
      </div>
    );
  }

  hanadleClick = () => {
    this.setState({ name: undefined }); // or name: undefined
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    return null;
  }

  //----------------------------------- Unmounting Phase Methods------------------------------

  // - this will get called when react remove the component from DOM
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default LifeCycle;
