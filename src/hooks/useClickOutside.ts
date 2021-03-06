import { useEffect, useRef } from "react";

const useClickOutside = <T extends HTMLElement>(onClickOutside?: Function) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        if (onClickOutside) onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return { ref };
};

export default useClickOutside;
