import SiteHeader from "./components/SiteHeader";
import TechaeonCoin, { Shapes } from "./components/TechaeonCoin";

function App() {
  return (
    <main>
      <SiteHeader />
      <div className="w-full flex align-middle justify-center">
        <TechaeonCoin
          shape={Shapes.square}
          color={{ r: 255, g: 194, b: 38 }}
          scale={1}
          branding={"AEONPASS TECHAEON"}
          imageUrl="https://konvajs.org/assets/lion.png"
        />
      </div>

      <div className="w-full flex align-middle justify-center">
        <TechaeonCoin
          shape={Shapes.diamond}
          color={{ r: 150, g: 100, b: 20 }}
          scale={1}
          branding={"AEONPASS TECHAEON"}
          imageUrl="https://konvajs.org/assets/lion.png"
        />
      </div>

      <div className="w-full flex align-middle justify-center">
        <TechaeonCoin
          shape={Shapes.hexagon}
          color={{ r: 180, g: 120, b: 1 }}
          scale={1}
          branding={"AEONPASS TECHAEON"}
          imageUrl="https://konvajs.org/assets/lion.png"
        />
      </div>
    </main>
  );
}

export default App;
