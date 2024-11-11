import React from "react";

export default function SubsetLiHeaderNavbar({ activeLink, item }) {
  return (
    <ul
      className={`flex-col gap-4 overflow-hidden transition-all pl-12 pt-4 ${
        activeLink ? "max-h-0 hidden" : "max-h-32 flex"
      }`}
    >
      {item.subMenu.length > 0 &&
        item.subMenu.map((subMenuItem) => (
          <li key={subMenuItem} className="text-white text-sm">{subMenuItem}</li>
        ))}
    </ul>
  );
}
