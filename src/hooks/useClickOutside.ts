import { useEffect, useRef } from "react";

const useClickOutside = <T extends HTMLElement>(callback?: Function) => {
  const ref = useRef<T>(null);
  const callbackRef = useRef<Function>();

  useEffect(() => {
    callbackRef.current = callback;
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const handleClick = (e: MouseEvent) => {
      console.log("click");

      if (ref.current && !ref.current.contains(e.target as Node)) {
        console.log("close");
        callbackRef.current && callbackRef.current();
      }
    };

    document.addEventListener("mouseup", handleClick);

    return () => {
      document.removeEventListener("mouseup", handleClick);
    };
  }, []);

  return { ref };
};

export default useClickOutside;
