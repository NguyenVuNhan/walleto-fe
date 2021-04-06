import React, { ButtonHTMLAttributes, FC } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  chevron?: "right" | "left";
  className?: string;
  style?: React.StyleHTMLAttributes<HTMLButtonElement>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CalButton: FC<Props> = ({ chevron, className, children, ...rest }) => {
  if (chevron && chevron === "left") children = <MdChevronLeft />;
  else if (chevron && chevron === "right") children = <MdChevronRight />;

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
