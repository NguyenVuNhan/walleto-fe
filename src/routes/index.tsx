import React, { FC, lazy, Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import AuthTemplate from "../components/templates/auth.template";
import Loading from "../pages/Loading";
import { history } from "../provider";

const Login = lazy(() => import("../pages/Login"));

const Routes: FC = () => {
  return (
    <Router history={history}>
      <AuthTemplate>
        <Switch>
          <Route
            exact
            path="/login"
            component={() => (
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            )}
          />
        </Switch>
      </AuthTemplate>
    </Router>
  );
};

export default Routes;
