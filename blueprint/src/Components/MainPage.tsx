import React, { useState, InputHTMLAttributes } from "react";
import Search from "./Search";
import HelloContent from "./MainPage/HelloContent";

const MainPage: React.FC = (props) => {
  return (
    <div className="flex h-full w-full justify-center items-center content-center -mt-32">
      <HelloContent />
    </div>
  );
};

export default MainPage;
