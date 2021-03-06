import { HTMLMotionProps, motion, Variants } from "framer-motion";
import React, { FC } from "react";
import useClickOutside from "src/hooks/useClickOutside";

interface Props extends HTMLMotionProps<"div"> {
  open?: boolean;
  onClose?: Function;
}

const animationVariants: Variants = {
  enter: {
    opacity: 1,
    scale: 1,
    display: "block",
    transition: {
      ease: "easeOut",
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      ease: "easeIn",
      duration: 0.075,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const Menu: FC<Props> = ({
  className,
  children,
  open = false,
  onClose,
  ...rest
}) => {
  const { ref } = useClickOutside<HTMLDivElement>(onClose);

  return (
    <motion.div
      {...rest}
      ref={ref}
      className={[
        className,
        "absolute right-0 w-48 py-1 mt-2 bg-white shadow-lg origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none",
      ].join(" ")}
      role="menu"
      aria-orientation="vertical"
      initial="exit"
      animate={open ? "enter" : "exit"}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};

export default Menu;
