import tinycolor from "tinycolor2";
import { ColorFormats } from "tinycolor2";

export function generatePalette(c: ColorFormats.RGB) {
  const darkerColors = Array(5)
    .fill("")
    .map((d, i) => {
      return tinycolor(c)
        .darken(i * 2)
        .toRgbString();
    });
  const brighterColors = Array(5)
    .fill("")
    .map((d, i) => {
      return tinycolor(c)
        .brighten(i * 2)
        .toRgbString();
    })
    .slice(1, 5)
    .reverse();

  return [...brighterColors, ...darkerColors];
}
