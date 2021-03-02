import React, { FC } from "react";
import login from "../../assets/login.png";
import { useTilt } from "../../hooks";

interface Props {}

const AuthTemplate: FC<Props> = ({ children }) => {
  const ref = useTilt<HTMLDivElement>();

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-500 via-yellow-400 to-green-400 flex items-center justify-center flex-wrap sm:p-4">
      <div
        className="bg-white w-full max-w-screen-lg sm:rounded-2xl overflow-hidden flex flex-wrap justify-between px-4 items-center sm:px-10 md:px-20"
        style={{ height: 600 }}
      >
        <div
          ref={ref}
          data-active={true}
          className="transition-transform duration-75 w-4/12 md:w-5/12 hidden md:block"
        >
          <img src={login} className="max-w-full" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;
