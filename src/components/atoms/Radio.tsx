import React, { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Radio = forwardRef<HTMLInputElement, Props>(
  ({ className, name, label, ...rest }, ref) => {
    return (
      <div className={["flex items-center", className].join(" ")}>
        <input
          {...rest}
          id={name}
          type="radio"
          name={name}
          value="Expense"
          ref={ref}
        />
        <label className="ml-2" htmlFor={name}>
          {label}
        </label>
      </div>
    );
  }
);

export default Radio;
