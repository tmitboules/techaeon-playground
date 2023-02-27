

import { Link } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { ImagesResponseDataInner } from "openai";
import { useEffect } from 'react';

import ColorButton from "./components/ColorButtons";
import ShapeButton from "./components/ShapeButtons";
import SiteHeader from "./components/SiteHeader";
import TechaeonCoin from "./components/TechaeonCoin";
import useImageSearchHook from './hooks/useImageSearchHook';
import useTechaeonParams, {
  ShapeKeys,
  techaeonColors,
  techaeonShapes,
} from "./hooks/useTechaeonParams";

function App() {
  const { shape, setShape, color, setColor, img, setImg, setShowImageSearchOption, showImageSearchOption } = useTechaeonParams();
  const { generateImageOnString, searchedImages, openFileSelector, selectedImage } = useImageSearchHook()

  useEffect(() => {
    setImg(selectedImage)
  }, [selectedImage])

  const ImageItem = (item: ImagesResponseDataInner) => {
    return <Link sx={{ ":hover": { cursor: "pointer" } }}> <img onClick={() => { setImg(item.url ?? '') }} style={{ height: 180, width: 180 }} className="result-images" src={item.url} alt="Generated Image" /></Link>
  }
  return (
    <main>
      <SiteHeader />
      <div style={{ marginLeft: 20 }} className="flex">
        <section className="flex-1">
          {/* shape buttons */}
          <div className="flex gap-2">
            {Object.entries(techaeonShapes).map(([name, path]) => (
              <ShapeButton
                key={name}
                path={path}
                name={name}
                clickHandler={() => setShape(techaeonShapes[name as ShapeKeys])}
                selected={shape == path ? true : false}
              />
            ))}
          </div>
          {/* color buttons */}
          <div className="flex gap-2 flex-1 mt-10">
            {Object.entries(techaeonColors).map(([name, colorr]) => (
              <ColorButton
                key={name}
                name={name}
                color={colorr}
                clickHandler={() => setColor(colorr)}
                selected={color == colorr ? true : false}
              />
            ))}
          </div>
          <div className="flex gap-2 flex-1 mt-10">
            <button
              onClick={() => {
                openFileSelector()
                setShowImageSearchOption(false)
              }
              }
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Pick Image From Gallery
            </button>

            <button
              onClick={() => {
                setShowImageSearchOption((showImageSearchOption) => !showImageSearchOption)
              }}
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Search Image Online
            </button>
          </div>

          {showImageSearchOption ?
            <div  >
              <div className="flex gap-2 flex-1 mt-10">
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Image" required>
                </input>
            
                <button
                  onClick={() => {
                    generateImageOnString('tiger')
                  }}
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Search
                </button>
              </div>

              {searchedImages.length > 0 ?
                <div style={{ margin: 10 }}>
                  <Grid2 container gap={2} columns={3}>
                    {searchedImages.map((item) => {
                      return ImageItem(item)
                    })}
                  </Grid2>
                </div> : <></>}
            </div>
            : <></>}
        </section>

        <div className="w-full flex-1 flex flex-col justify-center items-center gap-4">
          <TechaeonCoin
            shape={shape}
            color={color}
            scale={1}
            isCustomImage={img !== '' && img !== undefined}
            branding={"AEONPASS TECHAEON"}
            imageUrl={img ? img : "./lion-logo.png"}
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
