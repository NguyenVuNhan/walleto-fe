import { motion } from "framer-motion";
import React, { lazy, Suspense } from "react";
import { Route } from "react-router";
import { AnimatedRoutes } from "src/components/molecules/animatedRoutes";
import SuspenseFallback from "src/components/molecules/SuspenseFallback";
import MainTemplate from "src/components/templates/main.template";

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
        <Route key={index} exact path={route.path}>
          <MainTemplate>
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
            >
              <Suspense fallback={<SuspenseFallback />}>
                {<route.component />}
              </Suspense>
            </motion.div>
          </MainTemplate>
        </Route>
      ))}
    </AnimatedRoutes>
  );
};

export default MainRouter;
