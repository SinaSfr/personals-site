import React from "react";
import ArrowRight from "../../assets/icons/ArrowRight";
import SocialmediaIcon from "../../Components/Socialmedia-Icon/SocialmediaIcon";
import Instagram from "../../assets/icons/Instagram";

export default function Footer() {
  return (
    <footer className="bg-black py-20 px-4 ">
      <div className="container mx-auto sm:px-8 sm:flex sm:flex-wrap sm:gap-8 lg:flex-nowrap lg:gap-8 xl:justify-center">
        <div className="sm:w-1/2 lg:w-2/5 xl:w-1/3">
          <h4 className="text-white text-lg mb-6">About Me</h4>
          <p className="text-gray-500 font-thin text-sm mb-4 lg:w-4/5">
            We have tested a number of registry fix and clean utilities and
            present our top 3 list on our site for your convenience.
          </p>
          <p className="text-gray-500 font-thin text-sm mb-4">
            Copyright ©2024 All rights reserved | This template is made with by
          </p>
        </div>

        <div className="sm:w-2/5 xl:w-1/3">
          <h4 className="text-white text-lg mb-6">Newsletter</h4>
          <p className="text-gray-500 font-thin text-sm mb-4">
            Stay updated with our latest trends
          </p>
          <div className="flex mb-7">
            <input
              type="text"
              name="email"
              id=""
              placeholder="Enter Email Address"
              className="text-sm font-thin pl-6 w-4/5 h-[3em] border-none outline-none"
            />
            <button className="py-1 px-3 bg-blue-400">
              <ArrowRight stroke="#ffffff" />
            </button>
          </div>
        </div>

        <div className="sm:w-1/2 lg:w-1/5 xl:w-1/12">
          <h4 className="text-white text-lg mb-6">Follow Me</h4>
          <p className="text-gray-500 font-thin text-sm mb-4">
            Let us be social
          </p>
          <SocialmediaIcon />
        </div>
      </div>
    </footer>
  );
}
