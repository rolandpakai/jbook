import './add-cell.css';
import { useActions } from '../hooks/use-actions';

interface AddCellProps {
  prevCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ prevCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className="add-buttons">
        <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(prevCellId, 'code')}>
          <span className="icon icon-small">
            <i className="fa fa-plus"/>
          </span>
          <span>Code</span>
        </button>
        <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(prevCellId, 'text')}>
        <span className="icon icon-small">
            <i className="fa fa-plus"/>
          </span>
          <span>Text</span>
        </button>
      </div>
        <div className="divider"></div>
    </div>
  )
};

export default AddCell;