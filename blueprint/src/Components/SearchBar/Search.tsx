import React, { useState } from "react";
import useDebounce from "../../Hooks/useDebounce";
import useSearchData from "../../Hooks/useSearchData";
import SearchResult from "./SearchResult";

interface Props {}

const Search: React.FC<Props> = (props) => {
  const [query, setQuery] = useState<string | undefined>();
  const debouncedQuery = useDebounce(query, 500);
  const { result, isLoading } = useSearchData(debouncedQuery);
  const [focusOn, setFocusOn] = useState<Boolean>(false);

  return (
    <form
      className="flex w-full relative"
      onFocus={() => setFocusOn(true)}
      onBlur={() => setFocusOn(false)}
    >
      <div className="w-full">
        <input
          id="searchbox"
          className="rounded-lg w-full px-5 py-3 shadow-md border m-0"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button className="text-gray-500 w-8 absolute right-2 top-4">
          <i aria-hidden className="fas fa-search"></i>
        </button>
      </div>
      <div className="ds-dropdown-menu mt-2">
        {result != undefined && focusOn && (
          <div className="ds-dataset-1">
            <SearchResult data={result} />
          </div>
        )}
      </div>
    </form>
  );
};

export default Search;
