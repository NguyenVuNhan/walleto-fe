import React, { FC } from "react";
import Animation from "../molecules/Animation";

interface Props {}

const BackDrop: FC<Props> = ({}) => {
  return (
    <Animation className="fixed inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </Animation>
  );
};

export default BackDrop;
