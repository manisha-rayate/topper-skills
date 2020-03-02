import React from "react";
import ReactDom from "react-dom";
import App from "./App";

const div = document.getElementById("root"); // accessing div element from public/index.html

// create react element using jsx

// const h1 = <h1>Welcome to ReactJs</h1>;
// ReactDom.render(h1, div);
//---------------------------------------------------------------------

// hot relaoding
// ReactDom.render(<h1>Welcome to ReactJs</h1>, document.getElementById("root"));
//-----------------------------------------------------------------------

// Create React Element
// const jsH1 = React.createElement("h1", null, "Welcome to ReactJs");

// ReactDom.render(jsH1, div);
//------------------------------------------------------------------------

// const name = "Topper Skills";
// JSX Expression Syntax:
// {  }

// function f1() {
//   return "f1";
// }
// const h1 = (
//   <h1>
//     {" "}
//     Welcome to {name + " Pune"} {10 + 20} {f1()}
//   </h1>
// );

// ReactDom.render(h1, div);
//-------------------------------------------------------------------------

// functional components :-
// a function which returns the JSX is called function component.

// function App() {
//   return <h1> Welcome to ReactJs </h1>;
// }
// // <App> </App> :- custome elements always starts with uppercase letter
ReactDom.render(<App> </App>, document.getElementById("root"));
