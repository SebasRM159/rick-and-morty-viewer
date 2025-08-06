const Filter = ({ onFilter }) => (
  <input type="text" onChange={(e) => onFilter(e.target.value)} />
);
export default Filter;

