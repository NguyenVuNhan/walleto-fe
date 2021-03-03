import { motion, Transition } from "framer-motion";
import React, { FC } from "react";

interface Props {}

const transition: Transition = {
  duration: 0.6,
  ease: [0, 1, 1, 0],
  repeat: Infinity,
};

const Loading: FC<Props> = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-600 bg-opacity-90">
      <div className="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
        <div className="block relative w-20 h-5 mt-2">
          <motion.div
            className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"
            style={{ left: 8 }}
            animate={{ scale: [0, 1] }}
            transition={transition}
          ></motion.div>
          <motion.div
            className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"
            style={{ left: 8 }}
            animate={{ x: [0, 24] }}
            transition={transition}
          ></motion.div>
          <motion.div
            className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"
            style={{ left: 32 }}
            animate={{ x: [0, 24] }}
            transition={transition}
          ></motion.div>
          <motion.div
            className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"
            style={{ left: 56 }}
            animate={{ scale: [1, 0] }}
            transition={transition}
          ></motion.div>
        </div>
        <div className="text-gray-500 text-xs font-light mt-2 text-center">
          Please wait...
        </div>
      </div>
    </div>
  );
};

export default Loading;
