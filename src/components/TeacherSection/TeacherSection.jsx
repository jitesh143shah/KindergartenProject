import React from "react";
import { TeachersLinks } from "../../constant/TeachersLinks";
import { Link } from "react-router-dom";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../App.css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const TeacherSection = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div className=" py-20 md:py-35">
            <div className="pb-15 ">
              <div className="text-center flex flex-col items-center justify-center">
                <div className="text-3xl  lg:text-5xl  font-bold ">
                  <span className="text-secondary-blue">Expert Teachers</span>
                </div>
                <p className="w-[70%] mt-10 lg:text-xl text-[14px] text-secondary-blue/90">
                  Our set he for firmament morning sixth subdue today the
                  darkness creeping gathered divide our let god moving today.
                  Moving in fourth air night bring upon lesser subdue fowl male
                  signs.
                </p>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <Swiper // install Swiper modules
                    modules={[
                      Navigation,
                      Pagination,
                      Scrollbar,
                      A11y,
                      Autoplay,
                    ]}
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{
                      640: { slidesPerView: 2 },
                      768: { slidesPerView: 3 },
                      1024: { slidesPerView: 4 },
                    }}
                    navigation
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true, // 👈 THIS WILL PAUSE ON HOVER
                    }}
                  >
                    <ul>
                      {TeachersLinks.map((data, index1) => (
                        <li key={index1}>
                          <SwiperSlide className="group">
                            <span className="relative -z-10  ">
                              <img
                                src={data.image}
                                alt={data.image}
                                className="rounded-4xl  w-full h-full duration-500  group-hover:duration-500"
                              />
                              <span
                                className=" absolute inset-0 
                                rounded-4xl 
                                bg-primary/20 
                                opacity-0 
                                group-hover:opacity-100 
                                duration-500"
                              ></span>
                            </span>
                            <div className="flex z-0 flex-col justify-center items-center gap-2 mt-5">
                              <span className="font-bold text-xl md:text-2xl text-secondary-blue hover:text-primary duration-500">
                                {data.name}
                              </span>
                              <span>{data.position}</span>
                            </div>
                            <ul
                              className=" absolute top-1/2 left-0  inset-0
                              flex justify-center  gap-5 
                              opacity-0 -z-0
                              group-hover:opacity-100
                              duration-500  "
                            >
                              {data.social.map((item, index2) => {
                                const Icon = item.icon;
                                // DELAY CLASSES
                                // Stagger delay per icon
                                const delays = [
                                  "delay-100",
                                  "delay-200",
                                  "delay-300",
                                  "delay-500",
                                ];
                                return (
                                  <li
                                    key={index2}
                                    className={`
                                      opacity-0 
                                      translate-y-5
                                      group-hover:opacity-100 
                                      group-hover:translate-y-0 
                                      duration-300
                                      ${delays[index2]}
                                    `}
                                  >
                                    <Link
                                      to={item.link}
                                      className="cursor-pointer"
                                    >
                                      <Icon className="text-white text-2xl md:text-xl  hover:text-secondary rounded-full duration-300" />
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </SwiperSlide>
                        </li>
                      ))}
                    </ul>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSection;
