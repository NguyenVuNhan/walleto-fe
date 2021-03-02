import { motion } from "framer-motion";
import React, { FC, lazy, Suspense } from "react";
import { Redirect, Route, Router } from "react-router-dom";
import Loading from "../components/organisms/Loading";
import { AnimatedRoutes } from "../components/templates/animatedRoutes.template";
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
        <AnimatedRoutes exitBeforeEnter>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
          >
            {authRoutes.map((route, index) => (
              <Route key={index} exact path={route.path}>
                <Suspense fallback={<Loading />}>
                  {<route.component />}
                </Suspense>
              </Route>
            ))}
          </motion.div>
        </AnimatedRoutes>
      </AuthTemplate>
      <Redirect to="/login" />
    </Router>
  );
};

export default Routes;
