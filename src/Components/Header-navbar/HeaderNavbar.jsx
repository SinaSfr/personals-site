import React, { useState } from "react";

import dbHeaderNavbar from "../../Db/db-header_navbar/DbHeaderNavbar";

import LiHeaderNavbar from "../li-header-navbar/LiHeaderNavbar";

export default function HeaderNavbar({ isOpen, setIsOpen }) {
 

  const closeMenuHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed transition-all top-0 bottom-0 min-h-full overflow-y-scroll pt-5 bg-black bg-opacity-85 w-64 z-20 ${
          isOpen ? "left-0" : "left-[-100%]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="">
          {dbHeaderNavbar.map((item) => (
            <LiHeaderNavbar key={item.id} item={item} />
          ))}
        </ul>
      </nav>
      <div
        className={`fixed top-0 w-full left-0 h-full bg-black bg-opacity-50 z-10 ${
          !isOpen ? "hidden" : "block"
        }`}
        onClick={closeMenuHandler}
      ></div>
    </>
  );
}
