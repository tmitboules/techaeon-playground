import SiteHeader from "./components/SiteHeader";
import TechaeonCoin, { Shapes } from "./components/TechaeonCoin";
import AnimateCoin from "./components/AnimateCoin";

import { useState } from "react";

function AnimationApp() {
  const [coinStatus, setCoin] = useState("");
  const flipCoin = () => {
    setCoin("");
    const flipResult = Math.random();

    setTimeout(function () {
      if (flipResult <= 0.5) {
        setCoin("heads");
        console.log("it is head");
      } else {
        setCoin("tails");
        console.log("it is tails");
      }
    }, 100);
  };

  return (
    <main>
      <SiteHeader />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimateCoin
          height="300px"
          width="300px"
          frontSide={
            <TechaeonCoin
              shape={Shapes.square}
              color={{ r: 255, g: 194, b: 38 }}
              scale={1}
              branding={"AEONPASS TECHAEON"}
            />
          }
          backSide={
            <TechaeonCoin
              shape={Shapes.square}
              color={{ r: 100, g: 94, b: 28 }}
              scale={1}
              branding={"AEONPASS TECHAEON"}
            />
          }
        ></AnimateCoin>
      </div>
    </main>
  );
}

export default AnimationApp;
