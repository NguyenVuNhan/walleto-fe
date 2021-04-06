import React, { memo, useContext, useState } from "react";
import logo from "src/assets/logo.svg";
import MenuItem from "src/components/atoms/MenuItem";
import Menu from "src/components/atoms/Menu";
import IconButton from "src/components/atoms/IconButton";
import { Props } from "./Header.container";
import { ThemeContextType, ThemeCtx } from "src/themes";
import {
  MdAccountCircle,
  MdBrightness4,
  MdBrightness7,
  MdMenu,
} from "react-icons/md";

const Header = memo<Props>(({ onMenuClick, onLogout, children }) => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeCtx);
  const [open, setOpen] = useState(false);

  return (
    <header className="z-10 flex justify-between w-full p-2 shadow-e3 bg-surface text-onSurface">
      <div className="flex items-center">
        <IconButton onClick={onMenuClick}>
          <MdMenu />
        </IconButton>
        <img className="block h-10 mx-2" src={logo} alt="walleto" />
        <p className="hidden text-3xl font-medium sm:block">Walleto</p>
      </div>
      {/* <div className=""> */}
      {/*   <DatePicker date={date} onChange={setDate} /> */}
      {/* </div> */}
      <div className="flex items-center gap-1">
        {children}
        {theme === "light" ? (
          <IconButton onClick={() => setTheme("dark")}>
            <MdBrightness7 />
          </IconButton>
        ) : (
          <IconButton onClick={() => setTheme("light")}>
            <MdBrightness4 />
          </IconButton>
        )}
        <div className="relative flex items-center">
          <div>
            <IconButton
              id="user-menu"
              aria-expanded={open}
              aria-haspopup="true"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open user menu</span>
              <MdAccountCircle />
            </IconButton>
            <Menu open={open} onClose={() => setOpen(false)}>
              <MenuItem>Your Profile</MenuItem>
              <MenuItem onClick={onLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
});
export default Header;
