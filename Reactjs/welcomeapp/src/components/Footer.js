import React from "react";
export default function Footer(props) {
  return (
    <p>
      This is footer contents. <span>{props.comp}</span>
    </p>
  );
}
