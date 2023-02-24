import React from "react";

type Props = {
  path: string;
  name: string;
  clickHandler: () => void;
};

const ShapeButton = ({ path, name, clickHandler }: Props) => {
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

export default ShapeButton;
