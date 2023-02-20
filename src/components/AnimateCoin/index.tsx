import { useState } from "react";

interface Props {
  frontSide: JSX.Element;
  backSide: JSX.Element;
  height: string | number;
  width: string | number;
}

function AnimateCoin({ frontSide, backSide, height, width }: Props) {
  const [coinStatus, setCoin] = useState("");
  
  const flipCoin = () => {
    setCoin("");
    const flipResult = Math.random();
    setTimeout(function () {
      if (flipResult <= 0.5) {
        setCoin("heads");
      } else {
        setCoin("tails");
      }
    }, 100);
  };

  return (
    <div
      className={`coin ${coinStatus}`}
      onClick={flipCoin}
      style={{
        height: height,
        width: width,
      }}
    >
      <div className="side-a">{frontSide}</div>
      <div className="side-b">{backSide}</div>
    </div>
  );
}

export default AnimateCoin;
