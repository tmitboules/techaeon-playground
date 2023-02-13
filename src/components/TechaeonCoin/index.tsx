import React from "react";
import { Layer, Path, Stage } from "react-konva";
import tinycolor, { ColorFormats } from "tinycolor2";
import { generatePalette } from "../../utils";

export enum Shapes {
  square = "M 240 120 Q 240 0 120 0 Q 0 0 0 120 Q 0 240 120 240 Q 240 240 240 120 Z",
}

type Props = {
  shape: Shapes;
  scale?: number;
  color: ColorFormats.RGB;
};

const STARTING_POINT = 10;

const TechaeonCoin = ({ scale = 1, shape, color }: Props) => {
  const palette = generatePalette(color);
  const size = 260 * scale;

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
            fillLinearGradientEndPoint={{ x: 0, y: 240 }}
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
            x={240 * 0.015 + STARTING_POINT}
            y={240 * 0.015 + STARTING_POINT}
            scale={{ x: 0.97, y: 0.97 }}
            data={shape}
            fillLinearGradientStartPoint={{ x: 0, y: 0 }}
            fillLinearGradientEndPoint={{ x: 0, y: 240 }}
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
            x={250 * 0.03 + STARTING_POINT}
            y={250 * 0.03 + STARTING_POINT}
            data={shape}
            scale={{ x: 0.94, y: 0.94 }}
            fillLinearGradientStartPoint={{ x: 0, y: 0 }}
            fillLinearGradientEndPoint={{ x: 0, y: 240 }}
            fillLinearGradientColorStops={[
              0,
              palette[100],
              0.5,
              palette[500],
              1,
              palette[100],
            ]}
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
