import React, { ButtonHTMLAttributes, FC } from "react";

const MenuItem: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={[
        className,
        "block px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 w-full",
      ].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
};

export default MenuItem;
