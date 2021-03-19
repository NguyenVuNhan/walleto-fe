import React, { useState } from "react";
import BackDrop from "src/components/atoms/BackDrop";
import Loading from "src/pages/Loading";
import Routes from "src/routes";
import AppContext from "./App.context";

function App() {
  const [backDrop, setBackDrop] = useState(false);

  return (
    <AppContext.Provider value={{ backDrop, setBackDrop }}>
      <Routes />
      <Loading auto />
      <BackDrop show={backDrop} />
    </AppContext.Provider>
  );
}

export default App;
