import React from "react";

interface Content {
  title: String;
  content: String;
}

const MainPageContent: React.FC<Content> = (props) => {
  return (
    <div className="flex flex-col w-1/2 border-2 p-6 rounded-md mt-2">
      <div className="text-3xl border-b">{props.title}</div>

      <div className="mt-2">{props.content}</div>
    </div>
  );
};

export default MainPageContent;
