import { ColorFormats } from "tinycolor2";
import { generatePalette } from "../../utils";
import useImage from "use-image";
import FrontSide from "./FrontSide";
import BackSide from "./BackSide";
import { Layer, TextPath } from "react-konva";
import AnimationWrapper from "./AnimationWrapper";

type Props = {
  shape: string;
  scale?: number;
  color: ColorFormats.RGB;
  branding?: string;
  imageUrl?: string;
  withoutAnimation?: boolean;
  onlyShape?: boolean;
};

const STARTING_POINT = 10;
const BASE_SIZE = 240;

const TechaeonCoin = ({
  scale = 1,
  shape,
  color,
  branding,
  imageUrl,
  withoutAnimation,
  onlyShape,
}: Props) => {
  const palette = generatePalette(color);
  const size = 260 * scale;
  const [image] = useImage(imageUrl ? imageUrl : "");
  const [logoImage] = useImage("./coin-logo.png");

  let shapePath = "";

  if (shape.split("Z").length > 0) {
    shapePath = `${shape.split("Z")[0]} Z`.trim();
  }

  if (shape.split("Z").length > 1) {
    shapePath = `${shapePath} ${shape.split("Z")[1]} Z`.trim();
  }

  let textPath = "";
  let textSidePaths: string[] = [];

  if (shape.split("Z").length > 2) {
    textPath = shape.split("Z")[2].trim();
  }

  if (textPath) {
    const saparator = "C";
    const textPathPoints = textPath.split(saparator);

    textPathPoints.forEach((e, i) => {
      if (e.indexOf("M") === -1 && i > 0) {
        const prevSidePoint = textPathPoints[i - 1].trim().split(" ");

        let textSidePath = "";
        if (prevSidePoint.length > 2) {
          textSidePath = `M ${prevSidePoint[prevSidePoint.length - 2]} ${
            prevSidePoint[prevSidePoint.length - 1]
          }`;
        }

        textSidePath = `${textSidePath} ${saparator} ${e.trim()}`;

        textSidePaths.push(textSidePath);
      }
    });
  }

  const textLayer = (
    <Layer>
      {branding &&
        textSidePaths.map((pathData) => (
          <TextPath
            key={pathData}
            data={pathData}
            fill={palette[900]}
            fontSize={10}
            fontStyle={"900"}
            fontFamily={"Cinzel"}
            text={branding}
            align={"center"}
            x={STARTING_POINT}
            y={STARTING_POINT}
            scale={{ x: 1, y: 1 }}
            letterSpacing={0.4}
          ></TextPath>
        ))}
    </Layer>
  );

  if (withoutAnimation) {
    return (
      <FrontSide
        BASE_SIZE={BASE_SIZE}
        STARTING_POINT={STARTING_POINT}
        shape={shapePath}
        palette={palette}
        image={image}
        size={size}
        x={scale}
        y={scale}
        textLayer={textLayer}
        onlyShape={onlyShape}
      ></FrontSide>
    );
  }

  return (
    <AnimationWrapper
      height={size}
      width={size}
      frontSide={
        <FrontSide
          BASE_SIZE={BASE_SIZE}
          STARTING_POINT={STARTING_POINT}
          shape={shapePath}
          palette={palette}
          image={image}
          size={size}
          x={scale}
          y={scale}
          textLayer={textLayer}
        ></FrontSide>
      }
      backSide={
        <BackSide
          BASE_SIZE={BASE_SIZE}
          STARTING_POINT={STARTING_POINT}
          image={logoImage}
          size={size}
          x={scale}
          y={scale}
          shape={shapePath}
          palette={palette}
          textLayer={textLayer}
        ></BackSide>
      }
    ></AnimationWrapper>
  );
};

export default TechaeonCoin;
