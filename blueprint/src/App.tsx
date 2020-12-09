import React, { useState, useEffect, useContext } from "react";
import MainPage from "./Components/MainPage";

import "regenerator-runtime/runtime"; // to avoid async ans await error

interface Props {
  message?: string;
  user?: string;
}

const App: React.FC<Props> = (props) => {
  const [mainState, setMainState] = useState<boolean>(true);
  const [login, setLogin] = useState<boolean>(false);
  return (
    <React.StrictMode>
      <div id="root" className="h-100vh w-100vw">
        {mainState && <MainPage />}
      </div>
    </React.StrictMode>
  );
};

export default App;
