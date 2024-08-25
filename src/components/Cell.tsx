import "./cell.css";
type CellProps = {
  id: number;
  value: string;
  onClick: Function;
  allowClick: Boolean;
};
const Cell = ({ id, value, onClick, allowClick }: CellProps) => {
  return (
    <div className="cell-container" onClick={() => !allowClick && onClick(id)}>
      {value}
    </div>
  );
};

export default Cell;
