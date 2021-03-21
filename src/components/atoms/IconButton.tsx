import React, { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton: FC<Props> = ({ className, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={[
        className,
        "flex items-center justify-center p-1 rounded-full focus:outline-none",
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default IconButton;
