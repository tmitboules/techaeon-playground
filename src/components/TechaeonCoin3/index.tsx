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

  const layerSize = bezel + size;
  const fullSize = layerSize * scale;
  const scaledSize = size * scale;

  const [image] = useImage(imageUrl ? imageUrl : "");

  //console.log(fullSize)

  return (
    <div
      className="coin"
      style={{
        height: `${fullSize}px`,
        width: `${fullSize}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stage
        width={scaledSize}
        height={scaledSize}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        scale={{ x: scale, y: scale }}
      >
        <Layer
          clipFunc={(ctx) => {
            const path = new Path2D(shape);
            ctx.rect(size, 0, -size, size);
            ctx._context.clip(path);
          }}
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

          <Image image={image} width={size} height={size} />
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
      </Stage>
      {/* bezel */}
      <Stage
        width={fullSize}
        height={fullSize}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        scale={{ x: scale, y: scale }}
      >
        <Layer style={{ overflow: "visible" }} x={bezel / 2} y={bezel / 2}>
          <Path data={shape} strokeWidth={bezel} stroke={grd} />
        </Layer>
      </Stage>
    </div>
  );
};

export default TechaeonCoin3;
