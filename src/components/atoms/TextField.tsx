import React, { ChangeEvent, forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ label, name, onChange, error, ...rest }, ref) => {
    const [active, setActive] = React.useState(false);

    const handleActivation = (e: ChangeEvent<HTMLInputElement>) => {
      setActive(!!e.target.value);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className="relative mb-2">
        <input
          {...rest}
          ref={ref}
          className={[
            "transition-all duration-200 ease-in-out p-3 w-full",
            "border focus:outline-none rounded-md focus:ring-1",
            active ? "pt-7" : "",
            error
              ? "border-red-500 ring-red-500"
              : "border-gray-400 ring-cyan-500",
          ].join(" ")}
          id={name}
          name={name}
          onChange={handleActivation}
        />
        <label
          className={[
            "transition-all duration-200 ease-in-out",
            "absolute top-0 left-0 flex items-center text-opacity-50 p-3",
            active ? "text-xs" : "",
            error ? "text-red-500" : "text-gray-900",
          ].join(" ")}
          htmlFor={name}
        >
          {label}
        </label>
        {error && <p className="text-sm ml-2 text-red-500">{error}</p>}
      </div>
    );
  }
);

export default TextField;
