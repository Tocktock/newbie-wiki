import React, { useState } from "react";

interface Data {
  contents: string;
}

// need to add string slice
const SideData: React.FC<Data> = (props) => {
  return (
    <div className="absolute w-full bg-white rounded-md border-2 h-auto left-100% ml-2 p-3 dropdata">
      {props.contents.length < 300
        ? props.contents
        : props.contents.slice(0, 300) + "..."}
    </div>
  );
};

export default SideData;
