import React, { FC, lazy, Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Loading from "../components/organisms/Loading";
import AuthTemplate from "../components/templates/auth.template";
import { history } from "../provider";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

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
          <Route
            exact
            path="/register"
            component={() => (
              <Suspense fallback={<Loading />}>
                <Register />
              </Suspense>
            )}
          />
        </Switch>
      </AuthTemplate>
    </Router>
  );
};

export default Routes;
