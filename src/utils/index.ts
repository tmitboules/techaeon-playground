import tinycolor from "tinycolor2";
import { ColorFormats } from "tinycolor2";

type TechaeonPalette = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export function generatePalette(c: ColorFormats.RGB) {
  const palette = {} as TechaeonPalette;

  for (let i = -4; i <= 4; i++) {
    const key = ((i + 5) * 100) as keyof TechaeonPalette;

    palette[key] = tinycolor(c)
      .darken(i * 3)
      .toHexString();
  }

  return {
    ...palette,
  };
}
