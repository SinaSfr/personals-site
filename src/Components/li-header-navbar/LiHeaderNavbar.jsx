import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ChevronDown from "../../assets/icons/ChevronDown";
import SubsetLiHeaderNavbar from "../subset-li-header-navbar/SubsetLiHeaderNavbar";

export default function LiHeaderNavbar({ item }) {
  const [activeLink, setActiveLink] = useState(true);

  return (
    <li
      key={item.id}
      className="py-4 pr-3 pl-4"
      onClick={() => setActiveLink(!activeLink)}
    >
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `"w-full flex justify-between text-sm" ${
            isActive ? "text-blue-400" : "text-white"
          } `
        }
      >
        {item.title}
        {item.subMenu.length > 0 && (
          <ChevronDown
            stroke="white"
            className={`size-5 transition-all ${
              activeLink ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </NavLink>
      { item.subMenu.length > 0 &&
       <SubsetLiHeaderNavbar item={item} activeLink={activeLink}/>
      }
    </li>
  );
}
