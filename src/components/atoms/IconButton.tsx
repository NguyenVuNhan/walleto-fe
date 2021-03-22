import React, { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton: FC<Props> = ({ className, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={[
        className,
        "btn flex items-center justify-center p-2 rounded-full focus:outline-none",
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default IconButton;
