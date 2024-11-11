import React from "react";
import ServicesBox from "../Components/services-box/ServicesBox";
// import StatisticBox from "../Components/statistic-box/StatisticBox";
import FeedbackSwiper from "../Components/feedback-swiper/FeedbackSwiper";
import PlanBox from "../Components/Plan-box/PlanBox";
import Footer from "../Layout/Footer/Footer";

export default function Main() {
  return (
    <>
      <div className="bg-slate-100">
        <div className="container px-5 mt-16 pt-16 pb-10 mx-auto sm:flex sm:items-center sm:px-8 md:pt-40 md:justify-around xl:justify-center xl:gap-16">
          <div className="">
            <h6 className="font-light text-sm">This is Me</h6>
            <h1 className="lg:text-6xl">Sina Safari</h1>
            <p className="text-justify mb-4 text-gray-500 font-thin text-sm md:max-w-80 xl:max-w-[30rem]">
              You will begin to realise why this exercise is called the Dickens
              Pattern with reference to the ghost showing Scrooge some different
              futures.
            </p>
            <button className="px-8 py-3 border-none text-white bg-gradient-to-r from-indigo-400 to-blue-400">
              Discover Now
            </button>
          </div>
          <div className="mt-24 flex justify-center sm:mt-0  lg:w-auto">
            <img
              src="../../images/funflower.jpg"
              alt=""
              className="size-48 rounded-md sm:size-80 lg:size-[30rem]"
            />
          </div>
        </div>
      </div>

      <section className="px-5 pt-16 sm:px-8">
        <div className="container mx-auto sm:flex sm:items-center md:justify-around xl:justify-center gap-16">
          <div className="mb-10 flex justify-center ">
            <img
              src="../../images/funflower.jpg"
              alt=""
              className="size-48 rounded-md sm:size-64 lg:size-80"
            />
          </div>
          <div className="">
            <h6 className="font-light text-sm mb-8">ABOUT ME</h6>
            <h2 className="text-xl font-bold mb-10 md:text-4xl">
              Personal Details
            </h2>
            <p className="text-justify mb-8 text-gray-500 font-thin text-sm md:max-w-80 xl:max-w-[30rem]">
              Here, I focus on a range of items and features that we use in life
              without giving them a second thought. such as Coca Cola. Dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco.
            </p>
            <button className="px-8 py-3 border-none text-white bg-gradient-to-r from-indigo-400 to-blue-400">
              View Full Details
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-32 px-5 text-center sm:px-8">
        <div>
          <h2 className="text-4xl font-bold mb-10 text-center">
            My Offered Services
          </h2>
          <p className="text-gray-500 font-thin text-sm">
            At about this time of year, some months after New Year’s resolutions
            have been made and kept, or made and neglected.
          </p>
        </div>
        <div className="flex flex-wrap justify-around xl:max-w-[70rem] xl:mx-auto">
          <ServicesBox />
        </div>
      </section>

      {/* <section className="bg-gradient-to-r from-indigo-400 to-blue-400">
        <StatisticBox />
      </section> */}

      <section className="bg-slate-100 py-32 sm:px-8">
        <div className="container mx-auto">
          <div className="px-5 pb-20">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Client's Feedback About Me
            </h2>
            <p className="text-gray-500 font-thin text-sm text-center">
              It is very easy to start smoking but it is an uphill task to quit
              it. Ask any chain smoker or even a person.
            </p>
          </div>
          <div>
            <FeedbackSwiper />
          </div>
        </div>
      </section>

      <section className="py-32 px-5 sm:px-8">
        <div className="pb-20">
          <h2 className="text-4xl font-bold mb-4 text-center max-w-72 mx-auto sm:max-w-none">
            Choose Your Plan
          </h2>
          <p className="text-gray-500 font-thin text-sm text-center">
            When someone does something that they know that they shouldn’t do,
            did they.
          </p>
        </div>
        <div className="sm:flex flex-wrap lg:justify-center">
          <PlanBox />
        </div>
      </section>

      <Footer />
    </>
  );
}
