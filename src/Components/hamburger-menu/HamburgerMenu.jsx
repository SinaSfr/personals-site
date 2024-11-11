import React, { useState } from "react";
import dbHeaderNavbar from "../../Db/db-header_navbar/DbHeaderNavbar";
import LiHamburgerMenu from "../LiHamburgerMenu.jsx/LiHamburgerMenu";

export default function HamburgerMenu() {
  const [LinkActiveId, setLinkActiveId] = useState(null);

  return (
    <ul className="flex">
      {dbHeaderNavbar.map((item) => (
        <LiHamburgerMenu
          key={item.id}
          item={item}
          LinkActiveId={LinkActiveId}
          setLinkActiveId={setLinkActiveId}
        />
      ))}
    </ul>
  );
}
