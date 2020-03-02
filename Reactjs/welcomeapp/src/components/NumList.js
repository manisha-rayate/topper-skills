import React from "react";
import ListItems from "./ListItems";

const NumList = () => {
  const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  return (
    <ul>
      <ListItems items={nums} />
    </ul>
  );
};

export default NumList;
