import React, { useState, InputHTMLAttributes } from "react";
import MainPageContent from "./Main/MainPageContent";
import HelloContent from "./Main/MainPageHelloContent";
import Search from "./SearchBar/Search";

interface DocData {
  title: String;
  content: String;
}

const MainPage: React.FC = (props) => {
  const [docData, setDocData] = useState<DocData | null>(null);
  const setDocDataCallBack = (data: DocData) => {
    setDocData(data);
  };

  return (
    <React.StrictMode>
      <div className="flex flex-col h-100vh w-100vw justify-center items-center content-center -mt-32">
        <div>
          <HelloContent />
        </div>
        <div className="w-1/5">
          <Search />
        </div>
        {docData != null && (
          <div>
            <MainPageContent title={docData.title} content={docData.content} />
          </div>
        )}
      </div>
    </React.StrictMode>
  );
};

export default MainPage;
