import React, { FC, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Redirect, Router } from "react-router-dom";
import Loading from "src/pages/Loading";
import { history } from "src/provider";
import { RootState } from "src/reducer/rootReducer";

const AuthRoute = lazy(() => import("./authRouter"));
const MainRouter = lazy(() => import("./mainRouter"));

const Routes: FC = () => {
  const authenticated = useSelector<RootState>(
    (state) => state.auth.authenticated
  );

  return (
    <Router history={history}>
      <Suspense fallback={<Loading />}>
        <AuthRoute />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <MainRouter />
      </Suspense>
      <Redirect to={authenticated ? "/" : "/login"} />
    </Router>
  );
};

export default Routes;
