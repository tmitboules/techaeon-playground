import React from "react";
import { ColorFormats } from "tinycolor2";

type Props = {
  color: ColorFormats.RGB;
  name: string;
  clickHandler: () => void;
};

const ColorButton = ({ color, name, clickHandler }: Props) => {
  //please generate button look based on path

  return (
    <div
      className=" flex-1 p-10 border-2 rounded-md cursor-pointer"
      onClick={clickHandler}
    >
      {name}
    </div>
  );
};

export default ColorButton;
