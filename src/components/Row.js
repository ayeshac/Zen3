import React from "react";
import Box from "./Box";
import './App.css';
    
const Row = props => {
    console.log("row", props.key, props)
  const width = props.width / props.columns - props.spaceBetweenBoxes;
  console.log(width)
  return (
    <div className="container" style={{marginBottom: props.spaceBetweenRows}}>
      {Array.from(Array(props.columns).keys()).map(key => (
        <Box
          key={key}
          width={width}
          spaceBetweenBoxes={props.spaceBetweenBoxes}
        />
      ))}
    </div>
  );
};

export default Row;
