import React from "react";
import Loading from "src/pages/Loading";
import Routes from "src/routes";
import ThemeProvider from "src/themes";

function App() {
  return (
    <ThemeProvider>
      <Routes />
      <Loading auto />
    </ThemeProvider>
  );
}

export default App;
