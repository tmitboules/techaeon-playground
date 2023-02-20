import SiteHeader from "./components/SiteHeader";
import TechaeonCoin, { Shapes } from "./components/TechaeonCoin";
import AnimateCoin from "./components/AnimateCoin";
import { useFilePicker } from "use-file-picker";
import { useEffect } from "react";

function AnimationApp() {
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: 'DataURL',
    accept: 'image/*',
    multiple: true,
    limitFilesConfig: { max: 1 },
    imageSizeRestrictions: {
      maxHeight: 120, // in pixels
      maxWidth: 120,
      minHeight: 10,
      minWidth: 10,
    },
  });

  return (
    <main>
      <SiteHeader />
      {filesContent && filesContent.length > 0 ?
        <img width='120' height='120' src={`${filesContent[0].content}`} />
        : <></>}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimateCoin
          height="300px"
          width="300px"
          frontSide={
            <TechaeonCoin
              shape={Shapes.square}
              color={{ r: 255, g: 194, b: 38 }}
              scale={1}
              branding={"AEONPASS TECHAEON"}
              imagePath={filesContent && filesContent.length > 0 ? filesContent[0].content : undefined}
            />
          }
          backSide={
            <TechaeonCoin
              shape={Shapes.square}
              color={{ r: 100, g: 94, b: 28 }}
              scale={1}
              branding={"AEONPASS TECHAEON"}
            />
          }
        ></AnimateCoin>


      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={openFileSelector} type="button">Choose from galary</button>
        <button type="button"></button>
      </div>
    </main>
  );
}

export default AnimationApp;
