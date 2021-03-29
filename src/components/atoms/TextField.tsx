import React, {
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
  KeyboardEventHandler,
  useState,
} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  label: string;
}

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ className, onKeyUp, label, error, type = "text", ...rest }, ref) => {
    const [active, setActive] = useState(
      rest.value !== undefined || rest.defaultValue !== undefined
    );
    const [currentValue, setCurrentValue] = useState(
      rest.value || rest.defaultValue
    );

    const toggle: KeyboardEventHandler<HTMLInputElement> = (e) => {
      setActive(e.currentTarget.value !== undefined);
      onKeyUp && onKeyUp(e);
    };

    const numberFieldHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
      console.log(e.charCode);

      if (!/\d/.test(e.key)) {
        e.preventDefault();
      }

      const value = e.currentTarget.value + e.key;
      var n = parseInt(value.replace(/\D/g, ""), 10);
      setCurrentValue(n.toLocaleString());
    };

    const textFieldHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
      const value = e.currentTarget.value;
      if (type === "number") {
        const key = value.charAt(value.length - 1);

        if (!/\d/.test(key)) {
          e.preventDefault();
        }

        var n = parseInt(value.replace(/\D/g, ""), 10);
        !n ? setCurrentValue("0") : setCurrentValue(n.toLocaleString());
      } else {
        setCurrentValue(e.currentTarget.value);
      }
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
          type="text"
          onKeyUp={toggle}
          value={currentValue}
          onChange={textFieldHandler}
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
