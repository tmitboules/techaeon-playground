import SiteHeader from "./components/SiteHeader";
import TechaeonCoin, { Shapes } from "./components/TechaeonCoin";
import AnimateCoin from "./components/AnimateCoin";
import React from "react";

function AnimationApp() {

  const stageRef = React.useRef(null);
  const handleExport = () => {
    
    const uri = stageRef.current.toDataURL();
    console.log(uri);
    // we also can save uri as file
    // but in the demo on Konva website it will not work
    // because of iframe restrictions
    // but feel free to use it in your apps:
    // downloadURI(uri, 'stage.png');
  };
  
  return (
    <main>
      <SiteHeader />
      <button onClick={handleExport}>Click here to log stage data URL</button>
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
      
    </main>
  );
}

export default AnimationApp;
