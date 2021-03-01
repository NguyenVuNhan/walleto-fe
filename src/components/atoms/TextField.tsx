import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextField: FC<Props> = ({ label, name, onChange, ...rest }) => {
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
        className={[
          "transition-all duration-200 ease-in-out p-3 w-full",
          "border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500",
          active ? "pt-7" : "",
        ].join(" ")}
        id={name}
        onChange={handleActivation}
      />
      <label
        className={[
          "transition-all duration-200 ease-in-out",
          "text-gray-900 absolute top-0 left-0 flex items-center text-opacity-50 p-3",
          active ? "text-xs" : "",
        ].join(" ")}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default TextField;
