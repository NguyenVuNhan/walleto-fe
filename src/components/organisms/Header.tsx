import React, { memo, useState } from "react";
import MenuIcon from "src/assets/Icons/Menu";
import logo from "src/assets/logo.svg";
import logoFull from "src/assets/logo-full.svg";
import AccountCircleIcon from "src/assets/Icons/AccountCircle";
import MenuItem from "src/components/atoms/MenuItem";
import Menu from "src/components/atoms/Menu";
import IconButton from "src/components/atoms/IconButton";

interface Props {}

const Header = memo<Props>(() => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between w-full p-2 bg-blue-300 shadow-md">
      <div className="flex">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img className="block h-10 mx-2 sm:hidden" src={logo} alt="walleto" />
        <img
          className="hidden h-10 mx-2 sm:block"
          src={logoFull}
          alt="walleto"
        />
      </div>
      <div className="flex">
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
              <MenuItem>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
});
export default Header;
