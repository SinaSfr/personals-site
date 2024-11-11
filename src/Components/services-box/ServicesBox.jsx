import React from "react";
import Laptop from "../../assets/icons/Laptop";
import dbServicesBox from "../../Db/db-services-box/DbServicesBox";

export default function ServicesBox() {
  return (
    <>
      {dbServicesBox.map((item) => (
        <div key={item.id} className="flex flex-col items-center mt-14 gap-4 max-w-80 lg:max-w-[21rem]">
          {item.icon}
          <h3 className="text-xl">{item.title}</h3>
          <p className="text-gray-500 text-sm font-thin">
            {item.description}
          </p>
        </div>
      ))}
    </>
  );
}
