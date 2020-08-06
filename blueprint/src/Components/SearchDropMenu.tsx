import React, { useState } from "react";
import DropData from "./mixins/DropData";

interface Props {
  data: Object;
}

const SearchDropMenu: React.FC = (props) => {
  return (
    <div className="absolute w-full top-100% left-0 right-auto">
      <div className="transform rotate-45 absolute w-4 h-4 border-t border-l bg-white top-5px left-8 text-white z-50"></div>
      <div className="dataset bg-white relative h-auto mt-3 border-2 z-40">
        <DropData
          header="Document"
          content="transform rotate-45 absolute w-4 h-4 border-t border-l bg-white top-5px left-8 text-white z-50"
        />
        <DropData
          header="Document"
          content="transform rotate-45 absolute w-4 h-4 border-t border-l bg-white top-5px left-8 text-white z-50"
        />
      </div>
    </div>
  );
};

export default SearchDropMenu;
