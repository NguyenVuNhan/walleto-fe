import React, { FC } from "react";

interface Props {
  className?: string;
}

const ChevronLeftIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      className={["fill-current", className].join(" ")}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  );
};

export default ChevronLeftIcon;