import React, { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<Props> = ({ className, children }) => {
  return (
    <button
      className={[className, "p-3 rounded-lg font-semibold text-lg"].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
