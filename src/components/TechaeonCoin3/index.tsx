import React from "react";
import { Layer, Path, Rect, Shape, Stage, Image } from "react-konva";
import { ColorFormats } from "tinycolor2";
import useImage from "use-image";
import { generatePalette, TechaeonPalette } from "../../utils";

interface Props {
  scale: number;
  shape: string;
  color: ColorFormats.RGB;
  image: string;
}

const TechaeonCoin3 = ({ scale, shape, color, image: imageUrl }: Props) => {
  const palette = generatePalette(color);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const grd = ctx?.createLinearGradient(0, 50, 90, 100);
  grd?.addColorStop(0.0, palette[100]);
  grd?.addColorStop(1 / 3, palette[500]);
  grd?.addColorStop(1 / 2, palette[200]);
  grd?.addColorStop(1, palette[800]);

  const size = 240;
  const bezel = size * 0.07;

  const layerSize = (bezel + size);

  const fullSize = layerSize * 1;

  const [image] = useImage(imageUrl ? imageUrl : "");

  //console.log(fullSize)

  return (
    <Stage width={fullSize} height={fullSize} scale={{ x: scale, y: scale }}>
      <Layer
        clipFunc={(ctx) => {
          const path = new Path2D(shape);
          ctx.rect(layerSize, 0, -layerSize, layerSize);
          ctx._context.clip(path);
        }}
        x={bezel / 2}
        y={bezel / 2}
      >
        <Path
          data={shape}
          fillLinearGradientStartPoint={{ x: 0, y: 0 }}
          fillLinearGradientEndPoint={{ x: 0, y: size }}
          fillLinearGradientColorStops={[
            0.8,
            palette[600],
            1,
            palette[700],
            0.2,
            palette[900],
          ]}
        />
        {/* Imagine this is an image  */}
        <Image image={image} width={size} height={size} x={0} y={0} />
        <Path
          data={shape}
          fillLinearGradientStartPoint={{ x: 0, y: 0 }}
          fillLinearGradientEndPoint={{ x: 0, y: size }}
          fillLinearGradientColorStops={[
            0.8,
            palette[600],
            1,
            palette[700],
            0.2,
            palette[900],
          ]}
          opacity={0.3}
        />
      </Layer>
      {/* bezel */}
      <Layer style={{ overflow: "hidden" }} x={bezel / 2} y={bezel / 2}>
        <Path data={shape} strokeWidth={bezel} stroke={grd} />
      </Layer>
    </Stage>
  );
};

export default TechaeonCoin3;
