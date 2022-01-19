import React from 'react';

const Box = ({box}) => {

  return (
  <div style={{
    backgroundColor: box.color,
    height: "100px",
    width: "100px",
    display: 'inline-block'
    }}>
  </div>
  )
};


export default Box;
