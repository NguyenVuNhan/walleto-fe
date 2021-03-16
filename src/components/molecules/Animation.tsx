import { HTMLMotionProps, motion } from "framer-motion";
import React, { FC } from "react";
import animations from "src/constants/animations.const";

type OmitProps = "initial" | "animate" | "exit" | "variants";
interface Props extends Omit<HTMLMotionProps<"div">, OmitProps> {
  animation?: keyof typeof animations;
}

const Animation: FC<Props> = ({ children, animation = "opacity", ...rest }) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      variants={animations[animation]}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
