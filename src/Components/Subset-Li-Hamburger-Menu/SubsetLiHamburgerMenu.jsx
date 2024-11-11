import React from "react";

export default function SubsetLiHamburgerMenu({ LinkActiveId, item }) {
  return (
    <ul
      className={`absolute top-[5.6rem] flex-col gap-4 bg-white py-2 pl-2 pr-32 overflow-hidden transition-all shadow ${
        LinkActiveId ? "max-h-32 flex" : "max-h-0 hidden"
      }`}
    >
      {item.subMenu.length > 0 &&
        item.subMenu.map((subMenuItem) => (
          <li key={subMenuItem} className="text-black text-sm">
            {subMenuItem}
          </li>
        ))}
    </ul>
  );
}
