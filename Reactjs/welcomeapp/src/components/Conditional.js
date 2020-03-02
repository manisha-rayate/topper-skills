// Conditional Rendering :-

import React from "react";

const CondRender = props => {
  //   let greet;
  //   if (props.session) {
  //     greet = <p>Welcome ABC </p>;
  //   } else {
  //     greet = <p>Welcome Guest</p>;
  //   }
  //   return greet;

  // or................

  return props.show && <p> Welcome {props.session ? "ABC" : "Guest"} </p>;
};
export default CondRender;
