import React, { FC, lazy, Suspense } from "react";
import { Redirect, Router } from "react-router-dom";
import Loading from "src/pages/Loading";
import { history } from "src/provider";

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
