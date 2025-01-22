import React from "react";

function FilterAndSort({ filterGreased, setFilterGreased, sortBy, setSortBy }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={filterGreased}
          onChange={(e) => setFilterGreased(e.target.checked)}
        />
        Show Greased Only
      </label>

      <label>
        Sort By:
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="none">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
}

export default FilterAndSort;