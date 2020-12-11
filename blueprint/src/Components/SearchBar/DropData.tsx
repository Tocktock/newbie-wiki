import React, { Component, useContext, useState } from "react";
import SideData from "./SideData";
import { MainPageContext } from "../MainPage";
import MainPageContent from "../Main/MainPageContent";
interface Data {
  source: Source;
}

interface Source {
  contents: string;
  title: string;
}
const DropData: React.FC<Data> = (props) => {
  const [sideData, setSideData] = useState<string>("");
  const hoverEvent = () => {
    setSideData(props.source.contents);
  };
  const mouseLeaveEvnet = () => {
    api.setAction(props.source);
    setSideData("");
  };
  const api = useContext(MainPageContext);
  const setMainPageContent = () => {
    console.log(props.source);
    api.setAction(props.source);
  };

  return (
    <div
      className="search__result flex flex-row"
      onMouseEnter={hoverEvent}
      onMouseLeave={mouseLeaveEvnet}
      onPointerDown={setMainPageContent}
    >
      <div className="p-3 dropdata w-full cursor-pointer">
        <div className="dropdata__header border-b pb-2 mb-2">
          {props.source.title}
        </div>
        <div className="dropdata__content h-25 truncate text-gray-700 text-sm">
          {props.source.contents.length < 50
            ? props.source.contents
            : props.source.contents.slice(0, 50) + "..."}
        </div>
      </div>
      {sideData != "" && <SideData contents={sideData} />}
    </div>
  );
};

export default DropData;
