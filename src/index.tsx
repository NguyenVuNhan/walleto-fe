import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App.jsx";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
