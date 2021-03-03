import axios from "axios";
import jwt_decode from "jwt-decode";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { clearAuthToken, setAuthToken } from "src/helpers/auth";
import App from "./app/App.jsx";
import "./index.css";
import { store } from "./provider";
import { sagaMiddleware } from "./provider/store.js";
import rootSaga from "./sagas/rootSaga.js";

// Set axios base url
if (import.meta.env.NODE_ENV === "production") {
  axios.defaults.baseURL = import.meta.env.SNOWPACK_PUBLIC_BASE_URL;
} else {
  axios.defaults.baseURL = "http://localhost:5000";
}

// Check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode<Token>(localStorage.jwtToken);

  // TODO: add authActions
  // store.dispatch(authActions.setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (currentTime > decoded.exp) {
    clearAuthToken();
  }
}

// React rendering
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

sagaMiddleware.run(rootSaga);

// HMR
if (import.meta.hot) {
  import.meta.hot.accept();
}
