import SiteHeader from "./components/SiteHeader";
import Coin from "./components/SVGs/Coin";
import TechaeonCoin, { Shapes } from "./components/TechaeonCoin";

function App() {
  return (
    <main>
      <SiteHeader />
      <Coin />

      <TechaeonCoin
        shape={Shapes.square}
        color={{ r: 255, g: 194, b: 38 }}
        scale={2}
      />
    </main>
  );
}

export default App;
