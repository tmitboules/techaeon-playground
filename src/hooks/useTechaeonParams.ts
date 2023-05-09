import { useEffect, useState } from "react";
import { ColorFormats } from "tinycolor2";

export const techaeonColors = {
  Gold: { r: 218, g: 184, b: 95 },
  Silver: { r: 151, g: 142, b: 133 },
  Bronze: { r: 184, g: 153, b: 108 },
} as const;

export const techaeonShapes = {
  circle: "M -10 0 A 1 1 0 0 0 10 0 A 1 1 0 0 0 -10 0 Z",
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
