import React from "react";

const Box = props => {
  return (
    <div
      className="box"
      style={{ width: props.width, marginRight: props.spaceBetweenBoxes }}
    ></div>
  );
};

export default Box;
