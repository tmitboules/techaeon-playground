import SiteHeader from "./components/SiteHeader";
import TechaeonCoin, { Shapes } from "./components/TechaeonCoin";
import AnimateCoin from "./components/AnimateCoin";
import React, { useState } from "react";
import CustomSelectionButton from "./customSelectionButton";
import { Shape, shapes } from "konva/lib/Shape";
import CustomColorSelection from "./CustomColorSelection";
import { ColorFormats } from "tinycolor2";
function SelectShape() {
  const [shapeName, setshape] = useState<Shapes>(Shapes.square);
  const [coinColor, setCoinColor] = useState<ColorFormats.RGB>({
    r: 231,
    g: 133,
    b: 117,
  });

  return (
    <main>
      <SiteHeader />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomSelectionButton
          imgName="/src/assets/square.png"
          name="square"
          clickFunction={(name) => setshape(Shapes.square)}
        ></CustomSelectionButton>
        <CustomSelectionButton
          imgName="/src/assets/dimond.png"
          name="dimond"
          clickFunction={(name) => setshape(Shapes.diamond)}
        ></CustomSelectionButton>
        <CustomSelectionButton
          imgName="/src/assets/hexagon.png"
          name="hexagon"
          clickFunction={(name) => setshape(Shapes.hexagon)}
        ></CustomSelectionButton>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TechaeonCoin
          shape={shapeName}
          color={coinColor}
          scale={1}
          branding={""}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomColorSelection
          name="#DAB85F"
          clickFunction={(name) => setCoinColor({ r: 218, g: 184, b: 95 })}
        ></CustomColorSelection>
        <CustomColorSelection
          name="#978E85"
          clickFunction={(name) => setCoinColor({ r: 151, g: 142, b: 133 })}
        ></CustomColorSelection>
                <CustomColorSelection
          name="#B8996C"
          clickFunction={(name) => setCoinColor({ r: 184, g: 153, b: 108 })}
        ></CustomColorSelection>

      </div>
    </main>
  );
}
export default SelectShape;
