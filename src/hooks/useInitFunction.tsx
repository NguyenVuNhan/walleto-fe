import { useEffect } from "react";

const useInitFunction = <Fn extends (...args: any[]) => void>(
  fn: Fn,
  ...args: Parameters<Fn>
) => {
  useEffect(() => {
    fn(...args);
  }, [fn, ...args]);
};

export default useInitFunction;
