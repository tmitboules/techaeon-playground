import SiteHeader from "./components/SiteHeader";
import Coin from "./components/SVGs/Coin";
import TechaeonCoin, { Shapes } from "./components/TechaeonCoin";
import { motion } from "framer-motion";
import { Motion } from "@legendapp/motion";

function App() {
  return (
    <main>
      <SiteHeader />
      {/* <Coin /> */}
      <div className="w-full flex align-middle justify-center">
        <div className="flex align-middle justify-center flex-col">
          <TechaeonCoin
            shape={Shapes.square}
            color={{ r: 255, g: 194, b: 38 }}
            scale={1}
            branding={"AEONPASS TECHAEON  AEONPASS TECHAEON  AEONPASS TECHAEON  AEONPASS TECHAEON"}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
