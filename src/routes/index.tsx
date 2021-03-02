import React, { FC, lazy, Suspense } from "react";
import { Redirect, Router } from "react-router-dom";
import Loading from "../components/organisms/Loading";
import { AnimatedRoutes } from "../components/templates/animatedRoutes.template";
import AuthTemplate from "../components/templates/auth.template";
import { RouteTransition } from "../components/templates/RouteTransition.template";
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
        <AnimatedRoutes initial={false}>
          {authRoutes.map((route, index) => (
            <RouteTransition
              key={index}
              exact
              path={route.path}
              className="w-full md:w-1/2"
              animateProps={{
                initial: { opacity: 0, x: "100%" },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, y: "150%" },
                transition: { type: "tween", ease: "anticipate" },
              }}
            >
              <Suspense fallback={<Loading />}>{<route.component />}</Suspense>
            </RouteTransition>
          ))}
        </AnimatedRoutes>
      </AuthTemplate>
      <Redirect to="/login" />
    </Router>
  );
};

export default Routes;
