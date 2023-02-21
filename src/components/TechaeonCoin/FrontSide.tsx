import { Image, Layer, Stage } from "react-konva";

interface Props {
  size: number;
  image: HTMLImageElement | undefined;
  x: number;
  y: number;
  BASE_SIZE: number;
  STARTING_POINT: number;
  shapeLayer: JSX.Element;
  textLayer: JSX.Element;
}

const FrontSide = ({
  size,
  image,
  x,
  y,
  BASE_SIZE,
  STARTING_POINT,
  shapeLayer,
  textLayer,
}: Props) => {
  return (
    <Stage width={size} height={size} scale={{ x: x, y: y }}>
      {shapeLayer}
      <Layer>
        <Image
          image={image}
          x={BASE_SIZE * 0.22 + STARTING_POINT}
          y={BASE_SIZE * 0.25 + STARTING_POINT}
          width={120}
          height={120}
        />
      </Layer>
      {textLayer}
    </Stage>
  );
};

export default FrontSide;
