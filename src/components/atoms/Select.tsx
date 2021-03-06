import React, {
  forwardRef,
  MouseEventHandler,
  SelectHTMLAttributes,
  useState,
} from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  error?: string;
  label: string;
}

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ className, children, onClick, error, label, ...rest }, ref) => {
    const [active, setActive] = useState(!!rest.value || !!rest.defaultValue);

    const toggle: MouseEventHandler<HTMLSelectElement> = (e) => {
      setActive(!!e.currentTarget.value);
      onClick && onClick(e);
    };

    return (
      <div className={["relative", className].join(" ")}>
        <select
          defaultValue=""
          {...rest}
          ref={ref}
          className={[
            "w-full form-input ring-red-100",
            active ? "filled" : "",
            error ? "error" : "",
          ].join(" ")}
          id={rest.name}
          onClick={toggle}
        >
          <option disabled hidden></option>
          {children}
        </select>
        <label
          htmlFor={rest.name}
          className={["label", error ? "error" : ""].join(" ")}
        >
          {label}
        </label>
        {error && <p className="ml-2 text-sm text-left text-error">{error}</p>}
      </div>
    );
  }
);

export default Select;
