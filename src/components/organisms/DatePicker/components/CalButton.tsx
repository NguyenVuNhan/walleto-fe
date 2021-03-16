import React, { ButtonHTMLAttributes, FC } from "react";
import ChevronLeftIcon from "src/assets/Icons/ChevronLeft";
import ChevronRightIcon from "src/assets/Icons/ChevronRight";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  chevron?: "right" | "left";
  className?: string;
  style?: React.StyleHTMLAttributes<HTMLButtonElement>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CalButton: FC<Props> = ({ chevron, className, children, ...rest }) => {
  if (chevron && chevron === "left") children = <ChevronLeftIcon />;
  else if (chevron && chevron === "right") children = <ChevronRightIcon />;

  return (
    <button
      {...rest}
      className={[
        "hover:bg-gray-200 rounded p-1 text-sm flex align-center justify-center focus:outline-none",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default CalButton;
