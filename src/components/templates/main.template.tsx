import React, { FC, ReactNode, useState } from "react";
import Drawer from "../organisms/Drawer";
import Header from "../organisms/Header";

interface Props {
  action?: ReactNode;
}

const MainTemplate: FC<Props> = ({ children, action }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-screen h-screen">
      <Header onMenuClick={() => setOpen(!open)}>{action}</Header>
      <div className="flex flex-grow">
        <Drawer open={open} />
        <div className="h-full w-full px-1 pt-6 overflow-y-auto bg-background sm:px-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainTemplate;
