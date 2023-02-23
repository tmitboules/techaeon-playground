import ColorButton from "./components/ColorButtons";
import ShapeButton from "./components/ShapeButtons";
import SiteHeader from "./components/SiteHeader";
import TechaeonCoin from "./components/TechaeonCoin";
import { useLottie } from "lottie-react";
import coin from "./coin.json";
import useTechaeonParams, {
  ShapeKeys,
  techaeonColors,
  techaeonShapes,
} from "./hooks/useTechaeonParams";

function App() {
  const { shape, setShape, color, setColor } = useTechaeonParams();
  

  return (
    <main>
      <SiteHeader />
      <div className="flex">
        <section className="flex-1">
          {/* shape buttons */}
          <div className="flex gap-2">
            {Object.entries(techaeonShapes).map(([name, path]) => (
              <ShapeButton
                path={path}
                name={name}
                clickHandler={() => setShape(techaeonShapes[name as ShapeKeys])}
              />
            ))}
          </div>
          {/* color buttons */}
          <div className="flex gap-2 flex-1 mt-10">
            {Object.entries(techaeonColors).map(([name, color]) => (
              <ColorButton
                name={name}
                color={color}
                clickHandler={() => setColor(color)}
              />
            ))}
          </div>
        </section>

        <div className="w-full flex-1 flex flex-col justify-center items-center gap-4">
          <TechaeonCoin
            shape={shape}
            color={color}
            scale={1}
            branding={"AEONPASS TECHAEON"}
            imageUrl="./lion-logo.png"
            // imageUrl="https://konvajs.org/assets/lion.png"
          />
          {/* <>{View}</> */}
          {/* <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Animate
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Download
          </button> */}
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
