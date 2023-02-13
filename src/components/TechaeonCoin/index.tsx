import React from "react";
import { Layer, Path, Stage } from "react-konva";
import tinycolor, { ColorFormats } from "tinycolor2";
import { generatePalette } from "../../utils";

export enum Shapes {
  square = "M 250 125 Q 250 0 125 0 Q 0 0 0 125 Q 0 250 125 250 Q 250 250 250 125 Z",
}

type Props = {
  shape: Shapes;
  scale?: number;
  color: ColorFormats.RGB;
};

const TechaeonCoin = ({ scale = 1, shape, color }: Props) => {
  const palette = generatePalette(color);

  return (
    <>
      <Stage
        width={252 * scale}
        height={252 * scale}
        scale={{ x: scale, y: scale }}
      >
        <Layer>
          <Path x={1} y={1} data={shape} stroke={"#aaa"} fill="blue" />
          <Path
            x={250 * 0.04 + 1}
            y={250 * 0.04 + 1}
            data={shape}
            scale={{ x: 0.92, y: 0.92 }}
            stroke={"#fff"}
            fill="red"
          />
        </Layer>
      </Stage>
      <div className="flex w-[900px] h-16">
        {palette.map((c) => (
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
