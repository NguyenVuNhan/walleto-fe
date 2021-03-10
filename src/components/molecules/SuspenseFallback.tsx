import React from "react";
import Spinner from "../atoms/Spinner";

const SuspenseFallback = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner className="w-12 h-12" />
    </div>
  );
};

export default SuspenseFallback;
