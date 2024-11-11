import React from "react";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function FeedbackSwiper() {
  const dbSwiperSlider = [
    {
      id: 1,
      image: "../../images/funflower.jpg",
      idea: "A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes.However.",
      name: "Harrier Maxwell",
      job: "CEO at Facebook",
    },
    {
      id: 2,
      image: "../../images/funflower.jpg",
      idea: "A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes.However.",
      name: "Harrier Maxwell",
      job: "CEO at Facebook",
    },
    {
      id: 3,
      image: "../../images/funflower.jpg",
      idea: "A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes.However.",
      name: "Harrier Maxwell",
      job: "CEO at Facebook",
    },
    {
      id: 4,
      image: "../../images/funflower.jpg",
      idea: "A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes.However.",
      name: "Harrier Maxwell",
      job: "CEO at Facebook",
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      speed={500}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
    >
      {dbSwiperSlider.map((item) => (
        <SwiperSlide key={item.id} className="mt-4">
          <div className="flex justify-center gap-4 bg-white pt-6 px-4 pb-3">
            <img src={item.image} alt="" className="size-8 rounded-full" />
            <div>
              <p className="text-gray-500 text-justify text-sm mb-4 font-thin xl:max-w-96">
                {item.idea}
              </p>
              <h4 className="mb-2 text-lg">{item.name}</h4>
              <span className="text-gray-500 text-justify text-sm font-thin">
                {item.job}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
