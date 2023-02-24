import { Image, Layer, Path, Stage } from "react-konva";
import { useTechaeonDownloadProvider } from "../../provider/techaeonDownloadProvider";
import { TechaeonPalette } from "./../../utils/index";

interface Props {
  size: number;
  image: HTMLImageElement | undefined;
  x: number;
  y: number;
  BASE_SIZE: number;
  STARTING_POINT: number;
  textLayer: JSX.Element;
  shape: string;
  palette: TechaeonPalette;
  isCustomImage: boolean;
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
  isCustomImage
}: Props) => {
  if (image) {
    image.crossOrigin = "Anonymous";
  }

  const { frontSideReference } = useTechaeonDownloadProvider();

  return (
    <Stage
      width={size}
      height={size}
      scale={{ x: x, y: y }}
      //@ts-ignore
      ref={frontSideReference}
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
          x={BASE_SIZE / 2 - 50}
          y={BASE_SIZE / 2 - 50}
          width={120}
          height={120}
        /> */}

        {isCustomImage ?
          <Image
            image={image}
            x={BASE_SIZE / 2 - 65}
            y={BASE_SIZE / 2 - 65}
            width={150}
            height={150}
          />
          :
          <Image
            image={image}
            x={BASE_SIZE / 2 - 50}
            y={BASE_SIZE / 2 - 50}
            width={120}
            height={120}
          />}

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
