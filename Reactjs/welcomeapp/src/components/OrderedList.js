import React from "react";
import ListItems from "./ListItems";

const OrderedList = props => {
  return (
    <ol>
      <ListItems items={props.items} />
    </ol>
  );
};

export default OrderedList;
