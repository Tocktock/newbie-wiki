import React, { useState, createContext, useEffect, useRef } from "react";
import { hasOnlyExpressionInitializer } from "typescript";
import MainPageContent from "./Main/MainPageContent";
import HelloContent from "./Main/MainPageHelloContent";
import Search from "./SearchBar/Search";

interface DocData {
  title: String;
  contents: String;
  timeinfo?: String;
}

interface ContextAction {
  setAction: Function;
}

export const MainPageContext = createContext<ContextAction>({
  setAction: () => {},
});

const MainPage: React.FC = (props) => {
  const [docData, setDocData] = useState<DocData | null>(null);
  const setDocDataCallBack = (data: DocData) => {
    setDocData(data);
  };

  const helloRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (docData != null) {
      // helloRef.current!.className = "transition duration-500 ";
      // setTimeout(() => {
      //   helloRef.current!.className = "hidden";
      //   searchRef.current!.className = "w-1/5";
      // }, 1500);
      // const rect = helloRef.current!.getBoundingClientRect();
      // searchRef.current!.style.marginTop = -rect.top.toString() + "rem";
      searchRef.current!.className =
        "w-1/5 mt-16 transition transform duration-500 -translate-y-16";
    }
  }, [docData]);
  const api = {
    setAction: setDocDataCallBack,
  };

  return (
    <React.StrictMode>
      <div className="flex flex-col h-100vh w-100vw  items-center mt-8">
        {/* <div ref={helloRef}>
          <HelloContent />
        </div> */}
        <MainPageContext.Provider value={api}>
          <div className="w-1/5 mt-16" ref={searchRef}>
            <Search />
          </div>
        </MainPageContext.Provider>
        {docData != null && (
          <MainPageContent title={docData.title} content={docData.contents} />
        )}
      </div>
    </React.StrictMode>
  );
};

export default MainPage;
