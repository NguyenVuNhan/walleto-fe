import { motion, Transition, Variants } from "framer-motion";
import React, { lazy, Suspense } from "react";
import { AnimatedRoutes } from "src/components/molecules/animatedRoutes";
import SuspenseFallback from "src/components/molecules/SuspenseFallback";
import MainTemplate from "src/components/templates/main.template";
import AuthGuard from "src/guards/auth.guard";
import { CategoryAction } from "src/pages/Categories";
import { TransactionAction } from "src/pages/Transactions";
import { WalletAction } from "src/pages/Wallets";

const mainRoutes = [
  {
    path: "/categories",
    component: lazy(() => import("src/pages/Categories")),
    action: <CategoryAction />,
  },
  {
    path: "/report",
    component: lazy(() => import("src/pages/Report")),
    action: null,
  },
  {
    path: "/wallets",
    component: lazy(() => import("src/pages/Wallets")),
    action: <WalletAction />,
  },
  {
    path: "/transactions",
    component: lazy(() => import("src/pages/Transactions")),
    action: <TransactionAction />,
  },
  {
    path: "/",
    component: lazy(() => import("src/pages/Transactions")),
    action: <TransactionAction />,
  },
];

const animateVariants: Variants = {
  enter: { opacity: 1, y: 0 },
  leave: { opacity: 0, y: "-100%" },
};

const animateTransition: Transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const MainRouter = () => {
  return (
    <AnimatedRoutes>
      {mainRoutes.map((route, index) => (
        <AuthGuard
          key={index}
          exact
          path={route.path}
          component={() => (
            <MainTemplate action={route.action}>
              <motion.div
                className="w-full h-full"
                initial="leave"
                animate="enter"
                exit="exit"
                variants={animateVariants}
                transition={animateTransition}
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
