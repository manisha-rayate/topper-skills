import React from "react";
import ListItems from "./ListItems";

export default function Cities(props) {
  return (
    <div>
      {/* <span>{props.comp} Branches</span> */}
      <ul>
        {/* <li>Pune</li>
        <li>Nashik</li>
        <li>Mumbai</li>
        <li>Delhi</li>  */}

        <ListItems items={["Pune", "Mumbai", "Nashik", "Delhi"]} />
      </ul>
    </div>
  );
}
