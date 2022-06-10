import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Menus } from '../data/Menus';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? 'w-72' : 'w-20'
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
    >
      <img
        src={require('../assets/control.png')}
        className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${
          !open && 'rotate-180'
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src={require('../assets/logo.png')}
          className={`cursor-poiter duration-500 ${open && 'rotate-[360deg]'}`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-300 ${
            !open && 'scale-0'
          }`}
        >
          Payreq - Support
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((menu, index) => (
          <NavLink
            to={`/${menu.link}`}
            key={index}
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
              menu.gap ? 'mt-9' : 'mt-2'
            } ${index === 0 && 'bg-light-white'}`}
          >
            {menu.icon}
            <span className={`${!open && 'hidden'} origin-left duration-200`}>
              {menu.title}
            </span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
