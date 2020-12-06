import React, { useState } from "react";

interface Data {
  contents: string;
}

// need to add string slice
const SideData: React.FC<Data> = (props) => {
  return (
    <div className="absolute w-full bg-white rounded-md border-2 h-48 left-100% bottom-9% ml-2 border p-3 dropdata">
      {props.contents}
    </div>
  );
};

export default SideData;
