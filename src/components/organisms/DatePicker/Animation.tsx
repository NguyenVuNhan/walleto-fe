import { HTMLMotionProps, motion } from "framer-motion";
import React, { FC } from "react";

const Animation: FC<HTMLMotionProps<"div">> = ({ children, ...rest }) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
