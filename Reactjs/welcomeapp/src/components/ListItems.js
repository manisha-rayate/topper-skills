import React from "react";

const ListItems = props => {
  const { items } = props;
  return props.items.map((val, i) => <li key={i}> {val} </li>);
};

export default ListItems;
