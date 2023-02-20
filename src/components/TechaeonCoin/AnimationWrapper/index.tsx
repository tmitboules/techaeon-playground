import { useState } from "react";
import "./animation-style.css";

interface Props {
  frontSide: JSX.Element;
  backSide: JSX.Element;
  height: string | number;
  width: string | number;
}

function AnimationWrapper({ frontSide, backSide, height, width }: Props) {
  const [coinSide, setCoinSide] = useState("");

  const flipCoin = () => {
    setCoinSide(coinSide === "front" ? "back" : "front");
  };

  return (
    <div
      className={`coin ${coinSide}`}
      onClick={flipCoin}
      style={{
        height: height,
        width: width,
      }}
    >
      <div className="front-side">{frontSide}</div>
      <div className="back-side">{backSide}</div>
    </div>
  );
}

export default AnimationWrapper;
