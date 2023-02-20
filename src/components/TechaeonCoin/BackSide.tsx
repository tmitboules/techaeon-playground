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

const BackSide = ({
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
          x={BASE_SIZE * 0.335 + STARTING_POINT}
          y={BASE_SIZE * 0.27 + STARTING_POINT}
          width={80}
          height={110}
        />
      </Layer>
      {textLayer}
    </Stage>
  );
};

export default BackSide;
