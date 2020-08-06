import React from "react";
import ListTable from "./RightSide/ListTable";
import SearchTable from "./RightSide/SearchTable";
const RightSide: React.FC = (props) => {
  return (
    <div className="w-3/12">
      <div className="sticky top-0">
        <SearchTable />
      </div>
    </div>
  );
};

export default RightSide;
