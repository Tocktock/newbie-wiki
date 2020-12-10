import React from "react";

interface Content {
  title: String;
  content: String;
}

const MainPageContent: React.FC<Content> = (props) => {
  return (
    <div className="flex flex-col w-full">
      <div className="">{props.title}</div>
      <div className="">{props.content}</div>
    </div>
  );
};

export default MainPageContent;
