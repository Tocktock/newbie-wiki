import React, { useState } from "react";

interface Data {
  header: string;
  content: string;
}

const DropData: React.FC<Data> = (props) => {
  return (
    <div className=" p-3 dropdata w-full">
      <div className="dropdata__header border-b pb-2 mb-2">{props.header}</div>
      <div className="dropdata__content h-25 truncate text-gray-700 text-sm">
        {props.content}
      </div>
    </div>
  );
};

export default DropData;
