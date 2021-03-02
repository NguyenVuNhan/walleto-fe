import { HTMLMotionProps, motion } from "framer-motion";
import React, { FC } from "react";
import { Route, RouteProps } from "react-router-dom";

interface Props {
  className?: string;
  exact: boolean;
  path: string;
  routeProps?: RouteProps;
  animateProps?: HTMLMotionProps<"div">;
}

export const RouteTransition: FC<Props> = ({
  children,
  className,
  exact,
  path,
  ...rest
}) => (
  <Route exact={exact} path={path} {...rest.routeProps}>
    <motion.div className={className} {...rest.animateProps}>
      {children}
    </motion.div>
  </Route>
);
