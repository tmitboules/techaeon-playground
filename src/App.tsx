import SiteHeader from "./components/SiteHeader";
import Coin from "./components/SVGs/Coin";
import TechaeonCoin, { Shapes } from "./components/TechaeonCoin";

function App() {
  return (
    <main>
      <SiteHeader />
      <Coin />

      <TechaeonCoin shape={Shapes.square} color={{ r: 241, g: 198, b: 81 }} />
    </main>
  );
}

export default App;
