import React, { useState } from "react";

interface Props {}

const Drawer = (props: Props) => {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={[
        "transform top-0 left-0 w-screen sm:w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30",
        open ? "translate-x-0" : "translate-x-full",
      ].join(" ")}
    >
      Hello
    </aside>
  );
};

export default Drawer;
