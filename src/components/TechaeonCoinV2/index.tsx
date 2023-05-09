import React, { useEffect } from "react";
import { Layer, Path, Stage } from "react-konva";
import { ColorFormats } from "tinycolor2";
import useImage from "use-image";
import { generatePalette } from "../../utils";

type Props = {
  shape: string;
  scale?: number;
  color: ColorFormats.RGB;
  branding: string;
  imageUrl: string;
  isCustomImage: boolean;
  withoutAnimation?: boolean;
  onlyShape?: boolean;
};

const TechaeonCoinV2 = ({
  scale = 1,
  shape,
  color,
  branding,
  imageUrl,
  isCustomImage,
  withoutAnimation,
  onlyShape,
}: Props) => {
  const palette = generatePalette(color);
  const size = 20 * scale;
  const [image] = useImage(imageUrl ? imageUrl : "");
  const [logoImage] = useImage("./coin-logo.png");

  const OFFSET = scale * 2;

  useEffect(() => {
    // console.log(scaleSVG(shape, scale));
  }, [shape]);

  return (
    <div>
      <Stage width={size + OFFSET} height={size + OFFSET}>
        <Layer>
          <Path
            x={size / 2 + OFFSET / 2}
            y={size / 2 + OFFSET / 2}
            data={shape}
            stroke={palette[800]}
            strokeWidth={3 / OFFSET}
            scale={{ x: scale, y: scale }}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default TechaeonCoinV2;
