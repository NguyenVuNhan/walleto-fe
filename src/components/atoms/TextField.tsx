import React, {
  forwardRef,
  InputHTMLAttributes,
  KeyboardEventHandler,
} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  label: string;
}

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ className, onKeyUp, label, error, type = "text", ...rest }, ref) => {
    const [active, setActive] = React.useState(
      rest.value !== undefined || rest.defaultValue !== undefined
    );

    const toggle: KeyboardEventHandler<HTMLInputElement> = (e) => {
      setActive(e.currentTarget.value !== undefined);
      onKeyUp && onKeyUp(e);
    };

    return (
      <div className={["relative", className].join(" ")}>
        <input
          {...rest}
          ref={ref}
          className={[
            "w-full form-input appearance-none",
            active ? "filled" : "",
            error ? "error" : "",
          ].join(" ")}
          id={rest.name}
          type={type}
          onKeyUp={toggle}
        />
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

export default TextField;
