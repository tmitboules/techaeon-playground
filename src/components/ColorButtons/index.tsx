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
    <div style={{backgroundColor: `rgb(${color.r},${color.g},${color.b})`}}
      className="flex-1 p-10 rounded-md cursor-pointer"
      onClick={clickHandler}
    >
      {/* {name} */}
    </div>
  );
};

export default ColorButton;
