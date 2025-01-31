interface Props {
  handleFilter: (e: any) => void;
}

const Filter = ({ handleFilter }: Props) => {
  return (
    <div style={{ margin: "15px 0 15px 0" }}>
      <span>Filter</span>
      <select onChange={(e) => handleFilter(e?.target?.value)}>
        {["All", "Completed", "Pending"]?.map((x) => (
          <option value={x} key={x}>
            {x}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
