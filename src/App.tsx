import SiteHeader from "./components/SiteHeader";
import Coin from "./components/SVGs/Coin";
import TechaeonCoin, { Shapes } from "./components/TechaeonCoin";
import { motion } from "framer-motion"
import { Motion } from "@legendapp/motion"

function App() {
  return (
    <main>
      <SiteHeader />
      {/* <Coin /> */}
      <div className="w-full flex align-middle justify-center">
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
      </div>






    </main>
  );
}

export default App;
