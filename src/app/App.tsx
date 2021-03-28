import React from "react";
import Loading from "src/pages/Loading";
import Routes from "src/routes";
import ThemeProvider from "src/themes";

function App() {
  // TODO: Add loading provider for the application
  return (
    <ThemeProvider>
      <Routes />
      <Loading auto />
    </ThemeProvider>
  );
}

export default App;
