import React, { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<Props> = ({ className, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={[className, "px-3 py-2 rounded-lg font-semibold text-lg"].join(
        " "
      )}
    >
      {children}
    </button>
  );
};

export default Button;
