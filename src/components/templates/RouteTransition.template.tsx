import { HTMLMotionProps, motion } from "framer-motion";
import React, { FC } from "react";
import { Route, RouteProps } from "react-router-dom";

interface Props extends HTMLMotionProps<"div">, Omit<RouteProps, "children"> {}

export const RouteTransition: FC<Props> = ({ children, ...rest }) => (
  <Route {...(rest as RouteProps)}>
    <motion.div {...(rest as HTMLMotionProps<"div">)}>{children}</motion.div>
  </Route>
);
