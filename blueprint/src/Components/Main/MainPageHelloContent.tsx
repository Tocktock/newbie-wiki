import React from "react";

interface Props {
  shouldRemove: Boolean;
}

const MainPageHelloContent: React.FC = (props) => {
  return (
    <div className="main__content flex flex-col justify-center items-center content-center max-w-screen-md">
      <a href="/">
        <span className="text-6xl font-crimsonText italic text-pink-400 font-semibold">
          Newbie Wiki
        </span>
      </a>
      <span className="font-crimsonText italic text-2xl text-gray-600 font-semibold m-5">
        Search What Ever you Want!!
      </span>
    </div>
  );
};

export default MainPageHelloContent;
