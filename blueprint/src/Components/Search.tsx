import React, { useState } from "react";
import SearchDropMenu from "./SearchDropMenu";

const Search: React.FC = (props) => {
  const [query, setQuery] = useState<
    string | number | readonly string[] | undefined
  >("");
  const search = async () => {
    console.log(`please search ${query} DATA`);
  };

  return (
    <form action="" method="get" className="flex w-full relative m-auto">
      <div className="w-full">
        <input
          className="rounded-lg w-full px-5 py-3 shadow-md border m-0"
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="text-gray-500 rounded-full border w-8 border-white absolute right-2 top-4">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="ds-dropdown-menu mt-2">
        <div className="ds-dataset-1">
          <SearchDropMenu />
        </div>
      </div>
    </form>
  );
};

export default Search;
