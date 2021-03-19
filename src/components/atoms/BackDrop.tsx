import React, { FC } from "react";

interface Props {
  show: boolean;
}

const BackDrop: FC<Props> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
  );
};

export default BackDrop;
