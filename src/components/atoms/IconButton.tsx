import React, { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton: FC<Props> = ({ className, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={[
        className,
        "flex items-center justify-center w-10 h-10 rounded-full hover:bg-black hover:bg-opacity-5",
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default IconButton;
