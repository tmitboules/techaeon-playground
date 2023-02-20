import React, { useState } from "react";

type Props = {};

import "./style.css";

const AnimationExample = (props: Props) => {
  const [coinSide, setCoinSide] = useState("");

  const handleTap = () => {
    var flipResult = Math.random();

    setCoinSide("");

    setTimeout(function () {
      if (flipResult <= 0.5) {
        setCoinSide("heads");
        console.log("it is head");
      } else {
        setCoinSide("tails");
        console.log("it is tails");
      }
    }, 100);
  };

  return (
    <div
      style={{
        display: "block",
      }}
    >
      <div className={`coin ${coinSide}`} onClick={handleTap}>
        <div className="side-a"></div>
        <div className="side-b"></div>
      </div>
      <h1>Click on coin to flip</h1>
    </div>
  );
};

export default AnimationExample;
