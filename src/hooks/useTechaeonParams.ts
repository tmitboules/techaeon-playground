import { useEffect, useState } from "react";
import { ColorFormats } from "tinycolor2";

export const techaeonColors = {
  Gold: { r: 218, g: 184, b: 95 },
  Silver: { r: 151, g: 142, b: 133 },
  Bronze: { r: 184, g: 153, b: 108 },
} as const;

//UNROTATED SQAURE
//M 2 0 L 238 0 Q 240 0 240 2 L 240 238 Q 240 240 238 240 L 2 240 Q 0 240 0 238 L 0 2 Q 0 0 2 0 Z

export const techaeonShapes = {
  circle: "M 0 120 A 1 1 0 0 0 240 120 A 1 1 0 0 0 0 120 Z",
  hexagon:
    "M 1 103 L 60 1 C 60.43 0.18 61 0 62 0 L 179 0 C 180 0 180.43 0.18 181 1 L 239 103 Q 240 105 239 107 L 189 209 C 188.43 209.82 188 210 187 210 L 62 210 C 61 210 60.43 209.82 60 209 L 1 107 Q 0 105 1 103 Z",
  square:
    "M 1.808 22.6139 L 215.1569 0.1901 Q 216.9649 0 217.1549 1.8081 L 239.5788 215.1569 Q 239.7688 216.9649 237.9608 217.155 L 24.612 239.5788 Q 22.8039 239.7689 22.6139 237.9608 L 0.19 24.612 Q -0 22.804 1.808 22.6139 Z",
  // square:
  //   "M 240 120 Q 240 0 120 0 Q 0 0 0 120 Q 0 240 120 240 Q 240 240 240 120 Z M 200 120 Q 200 200 120 200 Q 40 200 40 120 Q 40 40 120 40 Q 200 40 200 120 Z M 55 55 C 55 15 185 15 185 55 C 225 55 225 185 185 185 C 185 225 55 225 55 185 C 15 185 15 55 55 55 Z",
  // diamond:
  //   "M 200 200 Q 280 120 200 40 Q 120 -40 40 40 Q -40 120 40 200 Q 120 280 200 200 Z M 170 170 Q 120 220 70 170 Q 20 120 70 70 Q 120 20 170 70 Q 220 120 170 170 Z M 30 120 C 25 85 85 25 120 30 C 155 25 215 85 210 120 C 215 155 155 215 120 210 C 85 215 25 155 30 120 Z",
  // hexagon:
  //   "M 55 25 C 120 -8 120 -8 185 25 C 240 55 240 55 240 120 C 240 185 240 185 185 215 C 120 248 120 248 55 215 C 0 185 0 185 0 120 C 0 55 0 55 55 25 Z M 155 50 C 120 35 120 35 80 50 C 40 70 40 70 40 120 C 40 170 40 170 80 190 C 120 205 120 205 155 190 C 200 170 200 170 200 120 C 200 70 200 70 155 50 Z M 60 50 C 120 20 120 20 176 50 C 225 10 225 230 175 190 C 120 220 120 220 60 190 C 15 230 15 10 60 50 Z",
};

export type ShapeKeys = keyof typeof techaeonShapes;

export default function useTechaeonParams() {
  const [shape, setShape] = useState<string>(techaeonShapes.circle);
  const [color, setColor] = useState<ColorFormats.RGB>(techaeonColors.Gold);
  const [img, setImg] = useState("");
  const [showImageSearchOption, setShowImageSearchOption] = useState(false);

  return {
    shape,
    color,
    img,
    setImg,
    setShape,
    setColor,
    showImageSearchOption,
    setShowImageSearchOption,
  };
}
