import { AnimatePresence, AnimatePresenceProps } from "framer-motion";
import React, { FC } from "react";
import { Switch, useLocation } from "react-router-dom";

interface RoutesProps extends AnimatePresenceProps {}

export const AnimatedRoutes: FC<RoutesProps> = ({ children, ...rest }) => {
  const location = useLocation();

  return (
    <AnimatePresence {...rest}>
      <Switch location={location} key={location.pathname}>
        {children}
      </Switch>
    </AnimatePresence>
  );
};
