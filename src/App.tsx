import SiteHeader from "./components/SiteHeader";
import TechaeonCoin from "./components/TechaeonCoin";
import useTechaeonParams from "./hooks/useTechaeonParams";

function App() {
  const { shape } = useTechaeonParams();

  return (
    <main>
      <SiteHeader />
      <div className="flex">
        <div className="flex-1 h-10 bg-blue-400"></div>
        <div className="w-full flex-1 flex align-middle justify-center">
          <TechaeonCoin
            shape={shape}
            color={{ r: 63, g: 63, b: 63 }}
            scale={1}
            branding={"AEONPASS TECHAEON"}
            imageUrl="./lion-logo.png"
            // imageUrl="https://konvajs.org/assets/lion.png"
          />
        </div>
      </div>

      {/* <div className="w-full flex align-middle justify-center">
        <TechaeonCoin
          shape={Shapes.diamond}
          color={{ r: 180, g: 120, b: 1 }}
          scale={1}
          branding={"AEONPASS TECHAEON"}
          imageUrl="./lion-logo-safari.png"
        />
      </div>

      <div className="w-full flex align-middle justify-center">
        <TechaeonCoin
          shape={Shapes.hexagon}
          color={{ r: 150, g: 100, b: 20 }}
          scale={1}
          branding={"AEONPASS TECHAEON"}
          imageUrl="./elegant_gold_lion.png"
        />
      </div> */}
    </main>
  );
}

export default App;
