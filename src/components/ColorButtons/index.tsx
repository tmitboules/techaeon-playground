import React, { useState } from "react";
import { ColorFormats } from "tinycolor2";

type Props = {
  color: ColorFormats.RGB;
  name: string;
  clickHandler: () => void;
  selected:boolean;
};

const ColorButton = ({ color, name, clickHandler,selected }: Props) => {
  //please generate button look based on path
  return (
    <div style={{backgroundColor: `rgb(${color.r},${color.g},${color.b})`,borderColor: selected ? '#05ADA0' : 'white', borderWidth: 2, height:250}}
      className="flex-1 p-10 rounded-md cursor-pointer"
      onClick={ clickHandler}
    >
      {/* {selected ? 'true' : 'false'} */}
    </div>
  );
};

export default ColorButton;
//        clickHandler
