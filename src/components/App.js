import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterAndSort from "./FilterAndSort";
import hogs from "../porkers_data";

function App() {
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortBy, setSortBy] = useState("none");

  const filteredHogs = hogs.filter((hog) =>
    filterGreased ? hog.greased : true
  );

  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "weight") {
      return a.weight - b.weight;
    }
    return 0;
  });

  return (
    <div className="App">
      <Nav />
      <FilterAndSort
        filterGreased={filterGreased}
        setFilterGreased={setFilterGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <HogList hogs={sortedHogs} />
    </div>
  );
}

export default App;