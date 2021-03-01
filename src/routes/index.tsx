import React, { FC, lazy, Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "../provider";

const Login = lazy(() => import("../pages/Login"));

const Routes: FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/login"
          component={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
