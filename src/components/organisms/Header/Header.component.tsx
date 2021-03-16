import React, { memo, useState } from "react";
import MenuIcon from "src/assets/Icons/Menu";
import logo from "src/assets/logo.svg";
import logoFull from "src/assets/logo-full.svg";
import AccountCircleIcon from "src/assets/Icons/AccountCircle";
import MenuItem from "src/components/atoms/MenuItem";
import Menu from "src/components/atoms/Menu";
import IconButton from "src/components/atoms/IconButton";
import { Props } from "./Header.container";
import DatePicker from "../DatePicker/DatePicker.component";

const Header = memo<Props>(({ onMenuClick, onLogout }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <header className="flex justify-between w-full p-2 text-white bg-gray-600 shadow-md">
      <div className="flex items-center">
        <IconButton onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <img className="block h-10 mx-2 sm:hidden" src={logo} alt="walleto" />
        <img
          className="hidden h-10 mx-2 sm:block"
          src={logoFull}
          alt="walleto"
        />
      </div>
      <div className="">
        <DatePicker date={date} onChange={setDate} />
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
              <MenuItem onClick={onLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
});
export default Header;
