import React from "react";
import { IconContext } from "react-icons/lib/esm/iconContext";
import Loading from "src/pages/Loading";
import Routes from "src/routes";
import ThemeProvider from "src/themes";

function App() {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "fill-current",
          size: "24",
        }}
      >
        <ThemeProvider>
          <Routes />
          <Loading auto />
        </ThemeProvider>
      </IconContext.Provider>
    </>
  );
}

export default App;
