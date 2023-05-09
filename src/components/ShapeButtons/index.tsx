import TechaeonCoin from "../TechaeonCoin";

type Props = {
  path: string;
  name: string;
  clickHandler: () => void;
  selected: boolean;
};

const ShapeButton = ({ path, name, clickHandler, selected }: Props) => {
  //please generate button look based on path
  return (
    <div
      style={{ borderColor: selected ? "#05ADA0" : "white", borderWidth: 2 }}
      className="flex-1 p-14 rounded-md cursor-pointer flex align-center justify-center"
      onClick={clickHandler}
    >
      <h1>{name}</h1>
    </div>
  );
};

export default ShapeButton;
