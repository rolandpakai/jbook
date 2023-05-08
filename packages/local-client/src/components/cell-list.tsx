import './cell-list.css';
import { useEffect, Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";
import { useActions } from '../hooks/use-actions';

const CellList: React.FC = () => {
  const { fetchCells } = useActions();
  const cells = useTypedSelector(({ cells: { order, data }}) => {
    return order.map((id) => {
      return data[id];
    });
  });

  useEffect(() => {
    fetchCells();
  }, []);

  const renderedCells = cells.map(cell => 
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell forceVisible={false} prevCellId={cell.id} />
    </Fragment>
  )

  return (
    <div className='cell-list'>
      <AddCell forceVisible={cells.length === 0} prevCellId={null} />
      {renderedCells}
    </div>
  )
};

export default CellList;