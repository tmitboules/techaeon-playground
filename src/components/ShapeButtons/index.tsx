import TechaeonCoin from "../TechaeonCoin";

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
      {/* {name} */}

      <TechaeonCoin
        shape={path}
        color={{ r: 70, g: 70, b: 70 }}
        scale={0.5}
        withoutAnimation={true}
        onlyShape={true}
      />
    </div>
  );
};

export default ShapeButton;
