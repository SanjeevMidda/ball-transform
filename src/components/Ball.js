import React from "react";

const Ball = ({ color, location }) => {
  return (
    <div
      className="ball"
      style={{
        backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        top: location.top,
        left: location.left,
      }}
    ></div>
  );
};

export default Ball;
