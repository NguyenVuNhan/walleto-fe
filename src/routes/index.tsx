import React, { FC, lazy, Suspense } from "react";
import { Redirect, Router } from "react-router-dom";
import Loading from "../pages/Loading";
import { history } from "../provider";

const AuthRoute = lazy(() => import("./authRouter"));

const Routes: FC = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<Loading />}>
        <AuthRoute />
      </Suspense>
      <Redirect to="/login" />
    </Router>
  );
};

export default Routes;
