import { useEffect, useRef } from "react";

const useClickOutside = <T extends HTMLElement>(callback?: Function) => {
  const ref = useRef<T>(null);
  const callbackRef = useRef<Function>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!ref.current) return;

    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        if (callbackRef.current) callbackRef.current();
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
