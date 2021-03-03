import React from "react";
import Spinner from "../atoms/Spinner";

const SuspenseFallback = () => {
  return (
    <div className="w-full h-full flex justify-center aligns-center">
      <Spinner className="h-12 w-12" />
    </div>
  );
};

export default SuspenseFallback;
