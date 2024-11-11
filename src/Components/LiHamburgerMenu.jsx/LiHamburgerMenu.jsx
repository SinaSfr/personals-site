import React, { useState } from "react";
import ChevronDown from "../../assets/icons/ChevronDown";
import { NavLink } from "react-router-dom";
import SubsetLiHamburgerMenu from "../Subset-Li-Hamburger-Menu/SubsetLiHamburgerMenu";

export default function LiHamburgerMenu({
  item,
  LinkActiveId,
  setLinkActiveId,
}) {


  const clickedLinkHandler = (id) => {
    if (id === LinkActiveId) {
      setLinkActiveId(null);
    } else {
      setLinkActiveId(id);
    }
  };

  return (
    <>
      <li
        key={item.id}
        className="py-4 pr-3 pl-4"
        onClick={() => clickedLinkHandler(item.id)}
      >
        <NavLink
          to={item.path}
          className={`w-full flex justify-between items-center gap-1 text-sm ${
            LinkActiveId === item.id ? "text-blue-400" : "text-black"
          }`}
        >
          {item.title}
          {item.subMenu.length > 0 && (
            <ChevronDown
              stroke="black"
              className={`size-4 transition-all ${
                LinkActiveId === item.id
                  ? "rotate-180 stroke-blue-400"
                  : "rotate-0 stroke-black"
              }`}
            />
          )}
        </NavLink>
        {item.subMenu.length > 0 && (
          <SubsetLiHamburgerMenu
            item={item}
            LinkActiveId={LinkActiveId === item.id}
          />
        )}
      </li>
    </>
  );
}
