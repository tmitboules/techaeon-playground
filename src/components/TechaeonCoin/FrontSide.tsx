import { Image, Layer, Path, Stage } from "react-konva";
import { Shapes } from ".";
import { TechaeonPalette } from "./../../utils/index";

interface Props {
  size: number;
  image: HTMLImageElement | undefined;
  x: number;
  y: number;
  BASE_SIZE: number;
  STARTING_POINT: number;
  textLayer: JSX.Element;
  shape: Shapes;
  palette: TechaeonPalette;
}

const FrontSide = ({
  size,
  image,
  x,
  y,
  BASE_SIZE,
  STARTING_POINT,
  textLayer,
  shape,
  palette,
}: Props) => {
  console.log('Image', image?.width)
  const imageWidth = 200
  const imageHeight = 200
  return (
    <Stage width={size} height={size} scale={{ x: x, y: y }}>
      <Layer>
        <Path
          x={BASE_SIZE * 0.15 + STARTING_POINT}
          y={BASE_SIZE * 0.15 + STARTING_POINT}
          data={shape.split("Z")[0]}
          scale={{ x: 0.7, y: 0.7 }}
          fill={palette[900]}
        />
      
        <Image
          image={image}
         
          // x={BASE_SIZE * 0.22 + STARTING_POINT}
          // y={BASE_SIZE * 0.25 + STARTING_POINT}
          x={BASE_SIZE / 2 - imageWidth / 2}
          y={BASE_SIZE / 2 - imageHeight / 2}
          width={imageWidth}
          cornerRadius={imageWidth/2}
          height={imageHeight}
        />
          <Path
          x={BASE_SIZE * 0.15 + STARTING_POINT}
          y={BASE_SIZE * 0.15 + STARTING_POINT}
          data={shape.split("Z")[0]}
          scale={{ x: 0.7, y: 0.7 }}
          fill={palette[900]}
          opacity={0.5}
        />


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
      </Layer>
      {textLayer}
    </Stage>
  );
};

export default FrontSide;
