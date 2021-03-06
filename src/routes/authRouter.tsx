import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import AuthTemplate from "src/components/templates/auth.template";
import { Route } from "react-router-dom";
import SuspenseFallback from "src/components/molecules/SuspenseFallback";
import { AnimatedRoutes } from "src/components/molecules/animatedRoutes";

const authRoutes = [
  {
    path: "/login",
    component: lazy(() => import("src/pages/Login")),
  },
  {
    path: "/register",
    component: lazy(() => import("src/pages/Register")),
  },
  {
    path: "/forgot_password",
    component: lazy(() => import("src/pages/ForgotPassword")),
  },
];

const AuthRoute = () => {
  return (
    <AnimatedRoutes exitBeforeEnter>
      {authRoutes.map((route, index) => (
        <Route key={index} exact path={route.path}>
          <AuthTemplate>
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
            >
              <Suspense fallback={<SuspenseFallback />}>
                {<route.component />}
              </Suspense>
            </motion.div>
          </AuthTemplate>
        </Route>
      ))}
    </AnimatedRoutes>
  );
};

export default AuthRoute;
