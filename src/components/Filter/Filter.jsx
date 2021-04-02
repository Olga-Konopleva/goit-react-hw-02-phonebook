const Filter = ({ onChangeFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={onChangeFilter} />
    </div>
  );
};

export default Filter;
