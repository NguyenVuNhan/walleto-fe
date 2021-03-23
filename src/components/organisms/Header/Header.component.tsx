import React, { memo, useContext, useState } from "react";
import MenuIcon from "src/assets/Icons/Menu";
import logo from "src/assets/logo.svg";
import AccountCircleIcon from "src/assets/Icons/AccountCircle";
import MenuItem from "src/components/atoms/MenuItem";
import Menu from "src/components/atoms/Menu";
import IconButton from "src/components/atoms/IconButton";
import { Props } from "./Header.container";
import { ThemeContextType, ThemeCtx } from "src/themes";
import Brightness4Icon from "src/assets/Icons/Brightness4";
import Brightness7Icon from "src/assets/Icons/Brightness7";

const Header = memo<Props>(({ onMenuClick, onLogout, children }) => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeCtx);
  const [open, setOpen] = useState(false);

  return (
    <header className="z-10 flex justify-between w-full p-2 shadow-e3 bg-surface text-onSurface">
      <div className="flex items-center">
        <IconButton onClick={onMenuClick}>
          <MenuIcon />
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
            <Brightness7Icon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setTheme("light")}>
            <Brightness4Icon />
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
              <AccountCircleIcon />
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
