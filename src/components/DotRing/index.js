import "./DotRing.css";
import useMousePosition from "../../hooks/useMousePosition";
import React from "react";
const DotRing = () => {
  // 1.
  const { x, y } = useMousePosition();
  return (
    <>
      <div style={{ left: `${x}px`, top: `${y}px` }} className="ring"></div>
      <div style={{ left: `${x-5}px`, top: `${y-5}px` }} className="dot"></div>
    </>
  );
};

export default DotRing;
