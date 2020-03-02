import React from "react";
import ListItems from "./ListItems";

const UnorderedList = props => {
  return (
    <ul>
      <ListItems items={props.items} />
    </ul>
  );
};

export default UnorderedList;
