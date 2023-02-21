import { ColorFormats } from "tinycolor2";
import { generatePalette } from "../../utils";
import useImage from "use-image";
import FrontSide from "./FrontSide";
import BackSide from "./BackSide";
import { Layer, Path, TextPath } from "react-konva";
import AnimationWrapper from "./AnimationWrapper";

export enum Shapes {
  //square = "M 240 120 Q 240 0 120 0 Q 0 0 0 120 Q 0 240 120 240 Q 240 240 240 120 Z M 200 120 Q 200 200 120 200 Q 40 200 40 120 Q 40 40 120 40 Q 200 40 200 120 Z",
  square = "M 120 240 Q 240 240 240 120 Q 240 0 120 0 Q 0 0 0 120 Q 0 240 120 240 Z M 120 200 Q 40 200 40 120 Q 40 40 120 40 Q 200 40 200 120 Q 200 200 120 200 Z",
  // square = "M 0 120 Q 0 240 120 240 Q 240 240 240 120 Q 240 0 120 0 Q -0 0 0 120 Z M 40 120 Q 40 40 120 40 Q 200 40 200 120 Q 200 200 120 200 Q 40 200 40 120 Z",
  // square = "M 120 0 Q -0 0 0 120 Q 0 240 120 240 Q 240 240 240 120 Q 240 -0 120 0 Z M 120 40 Q 200 40 200 120 Q 200 200 120 200 Q 40 200 40 120 Q 40 40 120 40 Z",
  diamond = "M 200 200 Q 280 120 200 40 Q 120 -40 40 40 Q -40 120 40 200 Q 120 280 200 200 Z M 170 170 Q 120 220 70 170 Q 20 120 70 70 Q 120 20 170 70 Q 220 120 170 170 Z",
}

//layout component

type Props = {
  shape: Shapes;
  scale?: number;
  color: ColorFormats.RGB;
  branding: string;
  imagePath?: string,
};

const STARTING_POINT = 10;
const BASE_SIZE = 240;

const TechaeonCoin = ({ scale = 1, shape, color, branding, imagePath }: Props) => {
  const palette = generatePalette(color);
  const size = 260 * scale;
  const [image] = imagePath ? useImage(imagePath) : useImage("https://konvajs.org/assets/lion.png");
  const [logoImage] = useImage("./coin-logo.svg");

  let textToDisplay = "";

  if (branding) {
    const sides = 4;

    for (let i = 0; i < sides; i++) {
      textToDisplay = `${textToDisplay}   ${branding}`;
    }
  }

  const textLayer = (
    <Layer>
      <TextPath
        data={shape.split("Z")[1]}
        fill={palette[900]}
        fontSize={11}
        fontStyle={"900"}
        fontFamily={"Cinzel"}
        text={textToDisplay}
        align={"center"}
        x={STARTING_POINT * -1.3}
        y={STARTING_POINT * -1.3}
        scale={{ x: 1.2, y: 1.2 }}
      ></TextPath>

      {/* {[...Array(4)].map((e, i) => {
        const data = shape.split("Z")[1].split("Q")[i];
        return (
          <TextPath
            key={i}
            data={data}
            fill={palette[900]}
            fontSize={9}
            fontStyle={"900"}
            fontFamily={"Cinzel"}
            text={branding}
            align={"center"}
            x={STARTING_POINT * -1.3}
            y={STARTING_POINT * -1.3}
            scale={{ x: 1.2, y: 1.2 }}
          ></TextPath>
        );
      })} */}
    </Layer>
  );

  const shapeLayer = (
    <Layer>
      <Path
        x={BASE_SIZE * 0.15 + STARTING_POINT}
        y={BASE_SIZE * 0.15 + STARTING_POINT}
        data={shape.split("Z")[0]}
        scale={{ x: 0.7, y: 0.7 }}
        fill={palette[900]}
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
  );

  return (
    <AnimationWrapper
      height={size}
      width={size}
      frontSide={
        <FrontSide
          BASE_SIZE={BASE_SIZE}
          STARTING_POINT={STARTING_POINT}
          image={image}
          size={size}
          x={scale}
          y={scale}
          shapeLayer={shapeLayer}
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
          shapeLayer={shapeLayer}
          textLayer={textLayer}
        ></BackSide>
      }
    ></AnimationWrapper>
  );
};

export default TechaeonCoin;
