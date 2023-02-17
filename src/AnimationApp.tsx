import SiteHeader from "./components/SiteHeader";
import Coin from "./components/SVGs/Coin";
import TechaeonCoin, { Shapes } from "./components/TechaeonCoin";
import { motion } from "framer-motion"
import { Motion } from "@legendapp/motion"
import { useState } from "react";

function AnimationApp() {

  const [coinStatus, setCoin] = useState("")
  const flipCoin = () => {
    setCoin("");
    const flipResult = Math.random();
    // if (random < 0.5) {
    //   console.log(random);

    //   setTimeout(() => {
    //     setCoin("heads") // or tails
    //   }, 0);
    //   // setHeadsCount(headsCount + 1);
    // } else {
    //   setTimeout(() => {
    //     setCoin("tails") // or tails
    //   }, 0);
    //   // setCoin("tails");
    //   // setTailsCount(tailsCount + 1);
    // }
    setTimeout(function () {
      if (flipResult <= 0.5) {
        setCoin("heads")
        console.log('it is head');
      }
      else {
        setCoin("tails");
        console.log('it is tails');
      }
    }, 100);
  };

  return (
    <main>
      <SiteHeader />
      {/* <Coin /> */}
      {/* <div className="w-full flex align-middle justify-center">
        <div className="w-80 flex align-middle justify-center self-center">
          <motion.div
            animate={{
              scale: [1, 1.5, 2, 1.5, 1],
              rotate: [0, 0, 360, 360, 0],
              // rotateZ:[0, 0, 360, 360, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"]

            }}
            transition={{ duration: 2.0 }}
          >

            <TechaeonCoin
              shape={Shapes.square}
              color={{ r: 255, g: 194, b: 38 }}
              scale={1}
              branding={"AEONPASS TECHAEON"}
            />


          </motion.div>
        </div>
      </div> */}
      <div className={"coin " + coinStatus} onClick={flipCoin}>
        <div className="side-a">
          <TechaeonCoin
            shape={Shapes.square}
            color={{ r: 255, g: 194, b: 38 }}
            scale={1}
            branding={"AEONPASS TECHAEON"}
          />
        </div>
        <div className="side-b">
          <TechaeonCoin
            shape={Shapes.square}
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
