import { motion, Transition } from "framer-motion";
import React, { FC } from "react";
import { Props } from "./Loading.container";

const transition: Transition = {
  duration: 0.6,
  ease: [0, 1, 1, 0],
  repeat: Infinity,
};

const Loading: FC<Props> = ({ isLoading, auto = false }) => {
  if (auto && !isLoading) {
    return <></>;
  }

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-gray-600 bg-opacity-90">
      <div className="flex flex-col items-center px-5 py-2 bg-white border rounded-lg">
        <div className="relative block w-20 h-5 mt-2">
          <motion.div
            className="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"
            style={{ left: 8 }}
            animate={{ scale: [0, 1] }}
            transition={transition}
          ></motion.div>
          <motion.div
            className="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"
            style={{ left: 8 }}
            animate={{ x: [0, 24] }}
            transition={transition}
          ></motion.div>
          <motion.div
            className="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"
            style={{ left: 32 }}
            animate={{ x: [0, 24] }}
            transition={transition}
          ></motion.div>
          <motion.div
            className="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"
            style={{ left: 56 }}
            animate={{ scale: [1, 0] }}
            transition={transition}
          ></motion.div>
        </div>
        <div className="mt-2 text-xs font-light text-center text-gray-500">
          Please wait...
        </div>
      </div>
    </div>
  );
};

export default Loading;
