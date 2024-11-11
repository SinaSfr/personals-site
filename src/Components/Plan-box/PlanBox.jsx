import React from "react";
import dbPlanBox from "../../Db/db-plan-box/DbPlanBox";

export default function PlanBox() {
  return (
    <>
      {dbPlanBox.map((item) => (
        <div
          key={item.id}
          className="flex  items-center justify-center flex-col hover:relative hover:z-10 hover:transition linear gap-8 py-10 px-5 my-4 bg-slate-50 test group hover:text-white hover:bg-indigo-400 hover:scale-105 sm:w-1/2 md:w-1/2 lg:w-1/5"
        >
          <div className="text-center">
            <h2 className="flex justify-center items-center text-2xl border-[30px] border-solid border-indigo-100 w-32 h-32 rounded-full mb-4">
              {item.id}
            </h2>
            <h4 className="mb-2 text-lg">{item.title}</h4>
            <span className="text-gray-500 text-sm font-thin group-hover:text-white">
              {item.text}
            </span>
          </div>
          <ul className="w-full list-none text-gray-500 text-sm font-thin text-center group-hover:text-white">
            <li className="border-t py-3">{item.firstFeature}</li>
            <li className="border-t py-3">{item.secondFeature}</li>
            <li className="border-y py-3">{item.thirdFeature}</li>
          </ul>
          <span className="font-bold text-4xl">${item.price}</span>
        </div>
      ))}
    </>
  );
}
