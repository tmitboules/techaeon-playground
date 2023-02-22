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
  const arrOfshapes = [
    { image: '/src/assets/square.png', name: Shapes.square},
    { image: '/src/assets/dimond.png', name: Shapes.diamond},
    { image: '/src/assets/hexagon.png', name:Shapes.hexagon}
  ];
  const arrOfColors = [
    { color: '#978E85', colorCode: {r:151,g:142,b:133}},
    { color: '#DAB85F', colorCode:  {r:218,g:184,b:95}},
    { color: '#B8996C', colorCode: {r:184,g:153,b:108}}
  ];

  const [coinColor, setCoinColor] = useState<ColorFormats.RGB>({
    r: 218,
    g: 184,
    b: 95,
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
          clickFunction={(name) => setshape(name)}
          arrOfDict={arrOfshapes}></CustomSelectionButton>
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
          clickFunction={(color) => setCoinColor(color)}
          arrOfDict={arrOfColors}></CustomColorSelection>

      </div>
    </main>
  );
}
export default SelectShape;
