import React, { FC, lazy, Suspense } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import Loading from "../components/organisms/Loading";
import AuthTemplate from "../components/templates/auth.template";
import { history } from "../provider";

const authRoutes = [
  {
    path: "/login",
    component: lazy(() => import("../pages/Login")),
  },
  {
    path: "/register",
    component: lazy(() => import("../pages/Register")),
  },
  {
    path: "/forgot_password",
    component: lazy(() => import("../pages/ForgotPassword")),
  },
];

const Routes: FC = () => {
  return (
    <Router history={history}>
      <AuthTemplate>
        <Switch>
          {authRoutes.map((route, index) => (
            <Route
              exact
              key={index}
              path={route.path}
              component={() => (
                <Suspense fallback={<Loading />}>
                  {<route.component />}
                </Suspense>
              )}
            />
          ))}
        </Switch>
      </AuthTemplate>
      <Redirect to="/login" />
    </Router>
  );
};

export default Routes;
