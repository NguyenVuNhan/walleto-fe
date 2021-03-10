import React, { FC, useState } from "react";
import Drawer from "../organisms/Drawer";
import Header from "../organisms/Header";

interface Props {}

const MainTemplate: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-screen h-screen">
      <Header onMenuClick={() => setOpen(!open)} />
      <div className="flex flex-grow">
        <Drawer open={open} />
        <div className="h-full w-full px-1 pt-6 overflow-y-auto bg-gray-200 sm:px-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainTemplate;
