import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import useWS from "./Hooks/useWS";

import "regenerator-runtime/runtime"; // to avoid async ans await error

interface Props {
  message?: string;
  user?: string;
}
const App: React.FC<Props> = (props) => {
  const ws = useWS();
  const [mainState, setMainState] = useState<boolean>(true);
  const [login, setLogin] = useState<boolean>(false);
  return (
    <React.StrictMode>
      <div id="root" className="h-100vh w-100vw">
        <Navbar mainState={mainState} login={login} />
        {mainState && <MainPage />}

        {/* <div className="max-w-screen-xl mx-auto mb-10">
        <Navbar />
      </div>
      <div className="content flex h-auto max-w-screen-xl m-auto">
        <LeftSide />
        <Center />
        <RightSide />
      </div>
      <Footer /> */}
      </div>
    </React.StrictMode>
  );
};

export default App;
