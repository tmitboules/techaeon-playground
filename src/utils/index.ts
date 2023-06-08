import tinycolor from "tinycolor2";
import { ColorFormats } from "tinycolor2";

export type Event = {
  title: string;
  date: string;
  location: string;
  time: string;
  code: string;
};

export type TechaeonPalette = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
  1100: string;
};

//return a promise that resolves with a File instance
export const urltoFile = (url: string, filename: string, mimeType: string) => {
  return fetch(url)
    .then(function (res) {
      return res.arrayBuffer();
    })
    .then(function (buf) {
      return new File([buf], filename, { type: mimeType });
    });
};

export function generatePalette(c: ColorFormats.RGB) {
  const palette = {} as TechaeonPalette;

  for (let i = -4; i <= 4; i++) {
    const key = ((i + 5) * 100) as keyof TechaeonPalette;

    palette[key] = tinycolor(c)
      .darken(i * 3)
      .toHexString();
  }

  palette[1000] = tinycolor(c).darken(14).toHexString();

  palette[1100] = tinycolor(c).darken(45).toHexString();

  return {
    ...palette,
  };
}

export const convertBase64ImagetoURL = async (image: string) => {
  const contentType = "image/png";
  const imageToDisplay = await urltoFile(
    "data:image/png;base64," + image,
    `openapi-image-${Date.now()}.png`,
    contentType
  );

  const convertedFile = URL.createObjectURL(imageToDisplay);
  return convertedFile;
};
