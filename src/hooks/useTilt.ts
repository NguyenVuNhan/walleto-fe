import { useEffect, useRef } from "react";

const useTilt = <T extends HTMLElement>(active: boolean = true) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    let el = ref.current;

    const config = {
      perspective: 1000,
      scale: "1.1",
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!el) {
        return;
      }
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const x = px - 0.5;
      const y = py - 0.5;
      const rotateY = x * -45;
      const rotateX = y * 45;

      el.style.setProperty(
        "transform",
        `perspective(${config.perspective}px)\
            rotateX(${rotateX}deg)\
            rotateY(${rotateY}deg)\
            scale3d(${config.scale}, ${config.scale}, ${config.scale})`
      );
    };

    const handleMouseLeave = () => {
      const rotateY = 0;
      const rotateX = 0;

      el.style.setProperty(
        "transform",
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      );
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [active]);

  return ref;
};

export default useTilt;
