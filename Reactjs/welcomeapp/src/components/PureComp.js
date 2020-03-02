// Pure class component:-

// import React, { PureComponent } from "react";
// class PureComp extends PureComponent {
//   render() {
//     console.log("In render...");

//     return <h1>Welcome {this.props.name}</h1>;
//   }
// }
// export default PureComp;
//-------------------------------------------------------------------------------------------

// Pure function component:-

import React from "react";

const PureComp = props => {
  console.log("In render...");

  return <h1>Welcome {props.name} </h1>;
};

export default React.memo(PureComp);
