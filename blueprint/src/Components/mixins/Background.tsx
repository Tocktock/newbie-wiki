import React from "react";

interface Props {
  isFront: Boolean;
}

const Background: React.FC<Props> = (props) => {
  return (
    <div
      className={
        "fixed h-100vh w-100vw bg-red-500 " + (props.isFront ? "-z-1" : "-z-2")
      }
    />
  );
};

export default Background;
