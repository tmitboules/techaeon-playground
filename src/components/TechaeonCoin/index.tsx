import React, { useState } from "react";
import { Layer, Path, Stage, Image, Text, TextPath } from "react-konva";
import tinycolor, { ColorFormats } from "tinycolor2";
import { generatePalette } from "../../utils";
import InAirImg from "../../assets/in_air.png";
import useImage from "use-image";
import { useTextWidth } from "@imagemarker/use-text-width";

export enum Shapes {
  square = "M 240 120 Q 240 0 120 0 Q 0 0 0 120 Q 0 240 120 240 Q 240 240 240 120 Z M 200 120 Q 200 200 120 200 Q 40 200 40 120 Q 40 40 120 40 Q 200 40 200 120 Z",
  diamond = "M 200 200 Q 280 120 200 40 Q 120 -40 40 40 Q -40 120 40 200 Q 120 280 200 200 Z M 170 170 Q 120 220 70 170 Q 20 120 70 70 Q 120 20 170 70 Q 220 120 170 170 Z",
  //  hexagon = "M 90 10 A 60 60 0 0 1 150 10 L 214 49 A 50 50 0 0 1 240 90 L 240 150 A 50 50 0 0 1 215 194 L 149 232 A 60 60 0 0 1 90 230 L 25 190 A 50 50 0 0 1 0 150 L 0 90 A 50 50 0 0 1 25 50 L 90 10 Z M 139 39 Q 118 30 100 40 Q 77 54 54 67 Q 31 77 32 104 Q 31 125 31 137 Q 31 159 50 170 Q 73 187 93 198 Q 119 212 143 199 Q 167 185 188 170 Q 208 158 207 136 Q 207 120 207 102 Q 205 83 187 71 Z"
  hexagon = "M 54 25 C 118 -8 119 -8 179 24 C 240 57 240 57 240 123 C 240 193 239 178 182 218 C 122 252 121 252 53 214 C 0 180 0 198 -1 121 C -2 61 -3 61 54 25 Z M 170 55 C 121 28 123 28 77 50 C 36 72 35 73 34 119 C 34 165 34 165 73 191 C 121 217 122 217 170 189 C 205 167 207 168 207 129 C 207 75 206 76 164 52 Z"
}

//layout component

type Props = {
  shape: Shapes;
  scale?: number;
  color: ColorFormats.RGB;
  branding: string;
};

const STARTING_POINT = 10;
const BASE_SIZE = 240;

const TechaeonCoin = ({ scale = 1, shape, color, branding }: Props) => {
  const palette = generatePalette(color);
  const size = 260 * scale;
  const [image] = useImage("https://konvajs.org/assets/lion.png");
  const lengthOfText = "AEONPASS TECHAEON".length * 9;

  const startingXPointForText = (260 - lengthOfText) / 2 + 5;
  const endingXPointForText = startingXPointForText + lengthOfText;
  const startingYPointForText = 60;
  const endingYPointForText = 200;

  const width = useTextWidth({ text: branding, font: "12px Cinzel" });

  const topTextPath =
    "M " +
    startingXPointForText +
    "," +
    startingYPointForText +
    " Q " +
    260 / 2 +
    "," +
    (startingYPointForText - 50) +
    " " +
    endingXPointForText +
    "," +
    (startingYPointForText + 5);
  const bottomTextPath =
    "M " +
    (endingXPointForText - 7) +
    "," +
    endingYPointForText +
    " Q " +
    260 / 2 +
    "," +
    (endingYPointForText + 50) +
    " " +
    startingXPointForText +
    "," +
    endingYPointForText;

  const leftTextPath =
    "M " +
    startingYPointForText +
    "," +
    (endingXPointForText - 7) +
    " Q " +
    (startingXPointForText - 50) +
    "," +
    260 / 2 +
    " " +
    startingYPointForText +
    "," +
    startingXPointForText;
  const RightTextPath =
    "M " +
    endingYPointForText +
    "," +
    startingXPointForText +
    " Q " +
    (endingYPointForText + 50) +
    "," +
    260 / 2 +
    " " +
    endingYPointForText +
    "," +
    endingXPointForText;

  function loadImage() {}

  return (
    <>
      <Stage
        width={size}
        height={size}
        scale={{ x: scale, y: scale }}
        className="p-10"
      >
        <Layer>
          <Path
            x={BASE_SIZE * 0.15 + STARTING_POINT}
            y={BASE_SIZE * 0.15 + STARTING_POINT}
            data={shape.split("Z")[0]}
            scale={{ x: 0.7, y: 0.7 }}
            fill={palette[900]}
          />
          {/* <Image
            image={image}
            x={BASE_SIZE * 0.22 + STARTING_POINT}
            y={BASE_SIZE * 0.25 + STARTING_POINT}
            // // data={shape.split("Z")[0]}
            // scale={{ x: 0.7, y: 0.7 }}
            width={120}
            height={120}
            // fill="red"
          /> */}
          <Path
            x={STARTING_POINT}
            y={STARTING_POINT}
            data={shape}
            fillLinearGradientStartPoint={{ x: 0, y: 0 }}
            fillLinearGradientEndPoint={{ x: 0, y: BASE_SIZE }}
            fillLinearGradientColorStops={[
              0,
              palette[500],
              0.5,
              palette[100],
              1,
              palette[500],
            ]}
          />
          <Path
            x={BASE_SIZE * 0.015 + STARTING_POINT}
            y={BASE_SIZE * 0.015 + STARTING_POINT}
            scale={{ x: 0.97, y: 0.97 }}
            data={shape}
            fillLinearGradientStartPoint={{ x: 0, y: 0 }}
            fillLinearGradientEndPoint={{ x: 0, y: BASE_SIZE }}
            fillLinearGradientColorStops={[
              0,
              palette[900],
              0.5,
              palette[200],
              1,
              palette[900],
            ]}
          />
          <Path
            x={BASE_SIZE * 0.03 + STARTING_POINT}
            y={BASE_SIZE * 0.03 + STARTING_POINT}
            data={shape}
            scale={{ x: 0.94, y: 0.94 }}
            fillLinearGradientStartPoint={{ x: 0, y: 0 }}
            fillLinearGradientEndPoint={{ x: 0, y: BASE_SIZE }}
            fillLinearGradientColorStops={[
              0,
              palette[100],
              0.5,
              palette[500],
              1,
              palette[100],
            ]}
          />
          <TextPath
            data={topTextPath}
            fill={palette[900]}
            fontSize={11}
            fontStyle={"900"}
            fontFamily={"Cinzel"}
            text={branding}
            align={"center"}
          ></TextPath>
          <TextPath
            fill={palette[900]}
            fontSize={11}
            fontStyle={"900"}
            fontFamily={"Cinzel"}
            text={branding}
            data={RightTextPath}
            align={"center"}
          ></TextPath>
          <TextPath
            fill={palette[900]}
            fontSize={11}
            fontStyle={"900"}
            fontFamily={"Cinzel"}
            text={branding}
            data={bottomTextPath}
            align={"center"}
          ></TextPath>
          <TextPath
            fill={palette[900]}
            fontSize={11}
            fontStyle={"900"}
            fontFamily={"Cinzel"}
            text={branding}
            data={leftTextPath}
            align={"center"}
          ></TextPath>
        </Layer>
      </Stage>
      {/* <div className="flex w-[900px] h-16">
        {Object.values(palette).map((c) => (
          <div
            key={c}
            className={`h-full flex-1 `}
            style={{ backgroundColor: c }}
          ></div>
        ))}
      </div> */}
    </>
  );
};

export default TechaeonCoin;
