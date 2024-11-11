import React, { useEffect, useRef, useState } from "react";
import HeaderNavbar from "../../Components/Header-navbar/HeaderNavbar";
import { Bars3 } from "../../assets/icons/Bars3";
import Xmark from "../../assets/icons/Xmark";
import HamburgerMenu from "../../Components/hamburger-menu/HamburgerMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const openMenuHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const scrollHandler = () => {
    if (window.scrollY > 100) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  return (
    <header
      className={`flex fixed left-0 right-0 top-0 p-5 bg-white z-50 justify-between items-center ${
        hasShadow ? "shadow" : ""
      }`}
      onScroll={scrollHandler}
    >
      <div className="container mx-auto flex justify-between items-center xl:justify-around">
          <img src="../../images/logo.webp" alt="" />
          {/* {!isOpen ? <Bars3 onClick={openMenuHandler} /> : <Xmark />}
      <HeaderNavbar isOpen={isOpen} setIsOpen={setIsOpen} /> */}
          <HamburgerMenu />
        </div>
    </header>
  );
}
