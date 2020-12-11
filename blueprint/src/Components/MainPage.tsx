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
  useEffect(() => {
    const { current } = helloRef;
    if (docData != null) {
      helloRef.current!.className = "opacity-0 transition duration-500";
      setTimeout(() => {
        helloRef.current!.className = "hidden";
      }, 1500);
    }
  }, [docData]);
  const api = {
    setAction: setDocDataCallBack,
  };

  return (
    <React.StrictMode>
      <div className="flex flex-col h-100vh w-100vw justify-center items-center content-center -mt-32">
        <div ref={helloRef}>
          <HelloContent />
        </div>

        <MainPageContext.Provider value={api}>
          <div className="w-1/5">
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

const t = "this is the first Title";
const c =
  "언어에 따라 명사의 앞 뒤에 놓여지는 말이다. 이어지는 명사의 배경(수, 성 격 등)에 따라 변화 할 수도 있다. 지시사 등과 함께 한정하는 품사를 구성할 수도 있다 (영어 등). 한편, 지시사와 관사는 별도의 위치를 차지할 수 있다. 예를 들어, 카나 어에서 관사는 명사의 앞에, 지시사는 명사 뒤에 놓이고 동시에 사용할 수 있다.종종 접어이며, 또한 바로 뒤에 오는 단어의 발음에 따라 변화할 수있다. 예를 들어, 다음 단어의 어두가 모음일 때 다음이 자음일 때 비해 모음을 생략하고 자음을 보충하는 일이 자주 발생한다. 영어 관사는 다음이 자음일 때 생략된 발음을 한다.(an에서 n이 생략되어 발음)일부 언어에서는 전치사와 인접할 때 전치사와 결합하여 축약형이 될 수도 있다. 프랑스어에서는 축약형을 가진 조합 시에는 반드시 축약형을 사용한다. (예 : de + le → du ) 이러한 현상을 독일어에서는 의미의 차이로 구분한다. (예 : 보통 von + dem → vom 하지만 지시사인 경우 von dem처럼 한다) 이처럼 언어에 따라 형태가 달라진다. 또한, 로망스어군의 원류인 라틴어에는 관사가 없으며, 러시아어와 많은슬라브어, 그리고 페르시아어처럼 인도유럽어족에 속하는 언어도 관사가 없는 것도있다.";
