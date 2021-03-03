import rootReducer from "src/reducer/rootReducer";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

const initialState = {};

export const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    import.meta.env.NODE_ENV === "production"
      ? (f: any) => f
      : window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
