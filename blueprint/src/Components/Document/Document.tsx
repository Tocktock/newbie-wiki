import React from "react";

interface Props {
  title: string;
  contents: string;
  notfound?: boolean;
}

const DocumentPage: React.FC<Props> = (props) => {
  return (
    <div className="main__content flex flex-col justify-center items-center content-center max-w-screen-md">
      <h1>{props.title}</h1>
      <div> {props.contents}</div>
    </div>
  );
};

export default DocumentPage;
