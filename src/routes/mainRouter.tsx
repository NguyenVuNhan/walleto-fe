import { motion } from "framer-motion";
import React, { lazy, Suspense } from "react";
import { Route } from "react-router";
import { AnimatedRoutes } from "src/components/molecules/animatedRoutes";
import SuspenseFallback from "src/components/molecules/SuspenseFallback";
import MainTemplate from "src/components/templates/main.template";
import AuthGuard from "src/guards/auth.guard";

const mainRoutes = [
  {
    path: "/transactions",
    component: lazy(() => import("src/pages/Transactions")),
  },
  {
    path: "/",
    component: lazy(() => import("src/pages/Transactions")),
  },
];

const MainRouter = () => {
  return (
    <AnimatedRoutes>
      {mainRoutes.map((route, index) => (
        <AuthGuard
          key={index}
          exact
          path={route.path}
          component={() => (
            <MainTemplate>
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{
                  type: "tween",
                  ease: "anticipate",
                  duration: 0.5,
                }}
              >
                <Suspense fallback={<SuspenseFallback />}>
                  {<route.component />}
                </Suspense>
              </motion.div>
            </MainTemplate>
          )}
        />
      ))}
    </AnimatedRoutes>
  );
};

export default MainRouter;
