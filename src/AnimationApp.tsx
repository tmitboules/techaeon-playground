import SiteHeader from "./components/SiteHeader";
import Coin from "./components/SVGs/Coin";
import TechaeonCoin, { Shapes } from "./components/TechaeonCoin";

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

      <div className={"coin " + coinStatus} onClick={flipCoin}>
        <div className="side-a">
          <TechaeonCoin
            shape={Shapes.diamond}
            color={{ r: 255, g: 194, b: 38 }}
            scale={1}
            branding={"AEONPASS TECHAEON"}
          />
        </div>
        <div className="side-b">
          <TechaeonCoin
            shape={Shapes.diamond}
            color={{ r: 155, g: 94, b: 28 }}
            scale={1}
            branding={"AEONPASS TECHAEON"}
          />
        </div>
      </div>
    </main>
  );
}

export default AnimationApp;
