import React from "react";
// import "../App.css";

import styles from "../App.module.css";

const StyleTheComponent = () => {
  // const style = { color: "red", backgroundColor: "gray" };
  return (
    <h1 className={styles.heading}> Topper Skills </h1>
    // <h1 style={{ color: "red", backgroundColor: "green" }}> Topper Skills </h1>
    // <h1 style={style}>Topper Skills</h1>
  );
};

export default StyleTheComponent;
