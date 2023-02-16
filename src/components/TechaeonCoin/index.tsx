import React from "react";
import { Layer, Path, Stage, Text, TextPath } from "react-konva";
import tinycolor, { ColorFormats } from "tinycolor2";
import { generatePalette } from "../../utils";
import { useTextWidth } from '@imagemarker/use-text-width';

export enum Shapes {
  square = "M 240 120 Q 240 0 120 0 Q 0 0 0 120 Q 0 240 120 240 Q 240 240 240 120 Z",
}

type Props = {
  shape: Shapes;
  scale?: number;
  color: ColorFormats.RGB;
};

const STARTING_POINT = 10;
const BASE_SIZE = 240;

const TechaeonCoin = ({ scale = 1, shape, color }: Props) => {
  const palette = generatePalette(color);
  const size = 260 * scale;
  const startingXPointForText = size - (size * 0.9)
  const endingXPointForText = size - (size * 0.1)
  const startingYPointForText = size - (size * 0.9)
  const endingYPointForText = size - (size * 0.1)

  const width = useTextWidth({ text: 'AEONPASS TECHAEON', font: '12px Times' });
  console.log(width)

  const topTextPath = "M " + startingXPointForText + "," + startingYPointForText + " Q " + ((startingXPointForText+endingXPointForText)/2) + "," + (startingYPointForText - 15) + " " + endingXPointForText + "," + startingYPointForText
  

  // const gradient1 = `linear-gradient(`

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
          <TextPath fill={'#333'} fontSize={12} fontFamily={'Times'} text={"AEONPASS TECHAEON"} data={'M 70,50  Q 130,18 190,50'} align={'center'} ></TextPath>
          <TextPath fill={'#333'} fontSize={12} fontFamily={'Arial-Bold'} text={"AEONPASS TECHAEON"} data={'M 200,60  Q 240,130 200,200'} align={'center'}></TextPath>
          <TextPath fill={'#333'} fontSize={12} fontFamily={'Arial'} text={"AEONPASS TECHAEON"} data={'M 200,200  Q 130,240 60,200'} align={'center'}></TextPath>
          <TextPath fill={'#333'} fontSize={12} fontFamily={'Arial-Bold'} text={"AEONPASS TECHAEON"} data={'M 60,200  Q 20,130 60,60'} align={'center'}></TextPath>
          {/* <TextPath x={0} y={0} fill={'#333'} fontSize={16} fontFamily={'Arial'} text={"All the world's a stage, and all the men and women merely players."} data={'M 240 120 Q 240 0 120 0 Q 0 0 0 120 Q 0 240 120 240 Q 240 240 240 120 Z'}></TextPath> */}
          <Path
            x={BASE_SIZE * 0.15 + STARTING_POINT}
            y={BASE_SIZE * 0.15 + STARTING_POINT}
            data={shape}
            scale={{ x: 0.7, y: 0.7 }}
            fill="red"

          />
        </Layer>
      </Stage>
      <div className="flex w-[900px] h-16">
        {Object.values(palette).map((c) => (
          <div
            key={c}
            className={`h-full flex-1 `}
            style={{ backgroundColor: c }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default TechaeonCoin;
