// for ListItems and Cities :-

// import React from "react";
// // // import Header from "./components/Header";
// import Cities from "./components/Cities";
// // // import Footer from "./components/Footer";

// export default function App() {
//   const company = "XYZ";
//   return (
//     <div>
//       {/* <Header comp={company} /> */}
//       <h2> Cities List </h2>
//       <Cities comp={company} />
//       {/* <Footer comp={company} /> */}
//     </div>
//   );
// }
//-------------------------------------------------------------------------------------------

// import React from "react";
// import Profile from "./components/Profile";
// const App = () => {
//   const profiles = [
//     { name: "Manisha", mobile: "8149348515", city: "Pune" },
//     { name: "Pqr", mobile: "21234311", city: "Nashik" },
//     { name: "Lmn", mobile: "3333333", city: "Mumbai" },
//     { name: "Def", mobile: "1444444", city: "Nagpur" }
//   ];

//   return (
//     <div>
//       <Profile
//         name={profiles[0].name}
//         mobile={profiles[0].mobile}
//         city={profiles[0].city}
//       />
//       <hr />
//       <Profile
//         name={profiles[1].name}
//         mobile={profiles[1].mobile}
//         city={profiles[1].city}
//       />
//       <hr />
//       <Profile
//         name={profiles[2].name}
//         mobile={profiles[2].mobile}
//         city={profiles[2].city}
//       />
//       <hr />
//       <Profile
//         name={profiles[3].name}
//         mobile={profiles[3].mobile}
//         city={profiles[3].city}
//       />
//       <hr />
//     </div>
//   );
//--------------------------------------or-----------------------------------------------
// return (
//   <div>
//     <Profile name="Abc" mobile="1111111" city="Pune" />
//     <hr />
//     <Profile name="Pqr" mobile="21234311" city="Nashik" />
//     <hr />
//     <Profile name="Lmn" mobile="3333333" city="Mumbai" />
//     <hr />
//     <Profile name="Def" mobile="1444444" city="Nagpur" />
//     <hr />
//   </div>
// );
// };

//--------------------------------------------------------------------------------------------
// import React from "react";
// import Counter from "./components/Counter";

// const App = () => {
//   return <Counter />;
// };
//--------------------------------------------------------------------------------------------

// For Mounting and updating phase  of component lifecycle

// import React from "react";

// import LifeCycle from "./components/LifeCycle";

// const App = () => {
//   return <LifeCycle city="Pune" name="XYZ" />;
// };
//------------------------------------------------------

// for Unmounting phase of component lifecycle

// class App extends React.Component {
//   state = { display: true };
//   handleClick = () => {
//     this.setState({ display: false });
//   };

//   render() {
//     const comp = this.state.display ? (
//       <LifeCycle city="Pune" name="XYZ" />
//     ) : null;
//     return (
//       <div>
//         <button onClick={this.handleClick}>Remove Comp</button>
//         {comp}
//       </div>
//     );
//   }
// }
//-------------------------------- Pure Component---------------------------------------------

// import React, { Component } from "react";
// import PureComp from "./components/PureComp";
// class App extends Component {
//   state = {
//     name: "abc"
//   };

//   handleClick = () => {
//     this.setState({ name: "xyz" });
//   };

//   handleInput = e => {
//     this.setState({ name: e.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.name}
//           onChange={this.handleInput}
//         />
//         <button onClick={this.handleClick}> Change </button>
//         <PureComp name={this.state.name} />
//       </div>
//     );
//   }
// }
//--------------------------------------------------------------------------------------------

// React.Fragment :-

// import React from "react";
// import FragDemo from "./components/FragmentDemo";

// const App = () => {
//   return <FragDemo />;
// };
// -----------------------------------------------------------------------------------------

// Conditional Rendering :-

// import React from "react";
// import CondRend from "./components/Conditional";

// const App = () => {
//   return <CondRend session={true} show={true} />;
// };
//--------------------------------------------------------------------------------------------

// NumList and Cities :-

// import React from "react";
// import Cities from "./components/Cities";
// import NumList from "./components/NumList";

// const App = () => {
//   return (
//     <>
//       <h1> Cities </h1>
//       <Cities />
//       <hr />
//       <h1> Numbers </h1>
//       <NumList />
//     </>
//   );
// };
//--------------------------------------------------------------------------------------------

// For OrderedList and UnorderedList :-

// import React from "react";
// import OrderedList from "./components/OrderedList";
// import UnorderedList from "./components/UnorderedList";

// const App = () => {
//   const cities = ["Pune", "Mumbai", "Delhi", "Nashik"];
//   const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//   return (
//     <>
//       <h1> Cities </h1>
//       <OrderedList items={cities} />
//       <hr />
//       <h1> Numbers </h1>
//       <UnorderedList items={nums} />
//     </>
//   );
// };
//-------------------------------------------------------------------------------------------

// For Table.js

// import React from "react";
// import Table from "./components/Table";

// const App = () => {
//   return <Table />;
// };
//-----------------------------------------------------------------------------------------

// For Event Handling:-

// import React from "react";
// import Event from "./components/Event";

// const App = () => {
//   return <Event />;
// };
//------------------------------------------------------------------------------------------

// for style the component using CSS :-

// import React from "react";
// import StyleTheComponent from "./components/StyleTheComponent";

// const App = () => {
//   return <StyleTheComponent />;
// };
//-------------------------------------------------------------------------------------------

// For Images:-

// import React from "react";
// import Images from "./components/Images";

// const App = () => {
//   return <Images />;
// };
//------------------------------------------------------------------------------------------

// for ImageSlider :-

import React from "react";
import ImageSlider from "./components/ImageSlider";

const App = () => {
  return <ImageSlider />;
};

export default App;
