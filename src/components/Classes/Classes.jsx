import { Link } from "react-router-dom";
import { ClassesLinks } from "../../constant/ClassesLinks";
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

const Classes = () => {
  return (
    <div>
      <div className="bg-[url('../../src/assets/section_bg3.png')]">
        <div className="container">
          <div className="py-40 ">
            <div className="pb-20 ">
              <div className="text-center flex flex-col items-center justify-center">
                <div className="text-5xl  font-bold ">
                  <span className="text-secondary-blue">Classes We Offer</span>
                </div>
                <p className="w-[70%] mt-10 text-xl text-secondary-blue/90">
                  Our set he for firmament morning sixth subdue today the
                  darkness creeping gathered divide our let god moving today.
                  Moving in fourth air night bring upon lesser subdue fowl male
                  signs.
                </p>
              </div>
            </div>
            <div>
              <div>
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, // 👈 THIS WILL PAUSE ON HOVER
                  }}
                >
                  <div>
                    <div>
                      {ClassesLinks.map(
                        (
                          {
                            title,
                            image,
                            description,
                            age,
                            classes,
                            price,
                            closed,
                          },
                          index
                        ) => (
                          <ul className="flex gap-5 px-5 py-5">
                            <SwiperSlide className="flex">
                              <li key={index} className="">
                                <div className="bg-white rounded-4xl shadow-md overflow-hidden border-none hover:shadow-xl duration-300 group">
                                  <div className="relative">
                                    <img
                                      src={image}
                                      alt={image}
                                      className="w-full h-56 object-cover group-hover:scale-105 duration-500"
                                    />
                                    {closed && (
                                      <span className="absolute top-4 left-4 bg-[#ff4d6d] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                        Admission Closed
                                      </span>
                                    )}
                                  </div>
                                  <div className="px-5 py-5">
                                    <div className="py-3 ">
                                      <div className="text-xl font-extrabold text-[#4A3AFF] duration-500 hover:text-red-500 group-hover:text-primary">
                                        {title}
                                      </div>
                                      <div className="text-gray-500  mt-2">
                                        {description}
                                      </div>
                                    </div>
                                    <hr className="text-gray-400/80" />
                                    <div className="mt-4 flex items-center font-bold justify-between py-2">
                                      <div>
                                        <span className="text-[#ff0059]">
                                          {age}
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                          Age Group
                                        </p>
                                      </div>
                                      <div>
                                        <span className="text-[#f7b500]">
                                          {classes}
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                          Classes
                                        </p>
                                      </div>
                                      <div>
                                        <span className="text-[#0096ff]">
                                          {price}/h
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                          Class Price
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </SwiperSlide>
                          </ul>
                        )
                      )}
                    </div>
                  </div>
                  {/* <SwiperSlide className="flex">
                    <div>
                      <div>
                        <ul className="flex gap-5 px-5 py-5">
                          {ClassesLinks.map(
                            (
                              {
                                title,
                                image,
                                description,
                                age,
                                classes,
                                price,
                                closed,
                              },
                              index
                            ) => (
                              <li key={index} className="">
                                <div className="bg-white rounded-4xl shadow-md overflow-hidden border-none hover:shadow-xl duration-300 group">
                                  <div className="relative">
                                    <img
                                      src={image}
                                      alt={image}
                                      className="w-full h-56 object-cover group-hover:scale-105 duration-500"
                                    />
                                    {closed && (
                                      <span className="absolute top-4 left-4 bg-[#ff4d6d] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                        Admission Closed
                                      </span>
                                    )}
                                  </div>
                                  <div className="px-5 py-5">
                                    <div className="py-3 ">
                                      <div className="text-xl font-extrabold text-[#4A3AFF] duration-500 hover:text-red-500 group-hover:text-primary">
                                        {title}
                                      </div>
                                      <div className="text-gray-500  mt-2">
                                        {description}
                                      </div>
                                    </div>
                                    <hr className="text-gray-400/80" />
                                    <div className="mt-4 flex items-center font-bold justify-between py-2">
                                      <div>
                                        <span className="text-[#ff0059]">
                                          {age}
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                          Age Group
                                        </p>
                                      </div>
                                      <div>
                                        <span className="text-[#f7b500]">
                                          {classes}
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                          Classes
                                        </p>
                                      </div>
                                      <div>
                                        <span className="text-[#0096ff]">
                                          {price}/h
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                          Class Price
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex">
                    <div>
                      <div>
                        <ul className="flex gap-5 px-5 py-5">
                          {ClassesLinks.map(
                            (
                              {
                                title,
                                image,
                                description,
                                age,
                                classes,
                                price,
                                closed,
                              },
                              index
                            ) => (
                              <li key={index} className="">
                                <div className="bg-white rounded-4xl shadow-md overflow-hidden border-none hover:shadow-xl duration-300 group">
                                  <div className="relative">
                                    <img
                                      src={image}
                                      alt={image}
                                      className="w-full h-56 object-cover group-hover:scale-105 duration-500"
                                    />
                                    {closed && (
                                      <span className="absolute top-4 left-4 bg-[#ff4d6d] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                        Admission Closed
                                      </span>
                                    )}
                                  </div>
                                  <div className="px-5 py-5">
                                    <div className="py-3 ">
                                      <div className="text-xl font-extrabold text-[#4A3AFF] duration-500 hover:text-red-500 group-hover:text-primary">
                                        {title}
                                      </div>
                                      <div className="text-gray-500  mt-2">
                                        {description}
                                      </div>
                                    </div>
                                    <hr className="text-gray-400/80" />
                                    <div className="mt-4 flex items-center font-bold justify-between py-2">
                                      <div>
                                        <span className="text-[#ff0059]">
                                          {age}
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                          Age Group
                                        </p>
                                      </div>
                                      <div>
                                        <span className="text-[#f7b500]">
                                          {classes}
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                          Classes
                                        </p>
                                      </div>
                                      <div>
                                        <span className="text-[#0096ff]">
                                          {price}/h
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                          Class Price
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex">
                    <div>
                      <div>
                        <ul className="flex gap-5 px-5 py-5">
                          {ClassesLinks.map(
                            (
                              {
                                title,
                                image,
                                description,
                                age,
                                classes,
                                price,
                                closed,
                              },
                              index
                            ) => (
                              <li key={index} className="">
                                <div className="bg-white rounded-4xl shadow-md overflow-hidden border-none hover:shadow-xl duration-300 group">
                                  <div className="relative">
                                    <img
                                      src={image}
                                      alt={image}
                                      className="w-full h-56 object-cover group-hover:scale-105 duration-500"
                                    />
                                    {closed && (
                                      <span className="absolute top-4 left-4 bg-[#ff4d6d] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                        Admission Closed
                                      </span>
                                    )}
                                  </div>
                                  <div className="px-5 py-5">
                                    <div className="py-3 ">
                                      <div className="text-xl font-extrabold text-[#4A3AFF] duration-500 hover:text-red-500 group-hover:text-primary">
                                        {title}
                                      </div>
                                      <div className="text-gray-500  mt-2">
                                        {description}
                                      </div>
                                    </div>
                                    <hr className="text-gray-400/80" />
                                    <div className="mt-4 flex items-center font-bold justify-between py-2">
                                      <div>
                                        <span className="text-[#ff0059]">
                                          {age}
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                          Age Group
                                        </p>
                                      </div>
                                      <div>
                                        <span className="text-[#f7b500]">
                                          {classes}
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                          Classes
                                        </p>
                                      </div>
                                      <div>
                                        <span className="text-[#0096ff]">
                                          {price}/h
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                          Class Price
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex">
                    <div>
                      <div>
                        <ul className="flex gap-5 px-5 py-5">
                          {ClassesLinks.map(
                            (
                              {
                                title,
                                image,
                                description,
                                age,
                                classes,
                                price,
                                closed,
                              },
                              index
                            ) => (
                              <li key={index} className="">
                                <div className="bg-white rounded-4xl shadow-md overflow-hidden border-none hover:shadow-xl duration-300 group">
                                  <div className="relative">
                                    <img
                                      src={image}
                                      alt={image}
                                      className="w-full h-56 object-cover group-hover:scale-105 duration-500"
                                    />
                                    {closed && (
                                      <span className="absolute top-4 left-4 bg-[#ff4d6d] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                        Admission Closed
                                      </span>
                                    )}
                                  </div>
                                  <div className="px-5 py-5">
                                    <div className="py-3 ">
                                      <div className="text-xl font-extrabold text-[#4A3AFF] duration-500 hover:text-red-500 group-hover:text-primary">
                                        {title}
                                      </div>
                                      <div className="text-gray-500  mt-2">
                                        {description}
                                      </div>
                                    </div>
                                    <hr className="text-gray-400/80" />
                                    <div className="mt-4 flex items-center font-bold justify-between py-2">
                                      <div>
                                        <span className="text-[#ff0059]">
                                          {age}
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                          Age Group
                                        </p>
                                      </div>
                                      <div>
                                        <span className="text-[#f7b500]">
                                          {classes}
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                          Classes
                                        </p>
                                      </div>
                                      <div>
                                        <span className="text-[#0096ff]">
                                          {price}/h
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                          Class Price
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide> */}
                </Swiper>
                {/* <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                >
                  {ClassesLinks.map((item, index) => (
                    <SwiperSlide key={index}>
                      <ul className="flex gap-5 px-5 py-5">
                        <li>
                          <div className="bg-white rounded-4xl shadow-md overflow-hidden border-none hover:shadow-xl duration-300 group">
                            <div className="relative">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-56 object-cover group-hover:scale-105 duration-500"
                              />

                              {item.closed && (
                                <span className="absolute top-4 left-4 bg-[#ff4d6d] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                  Admission Closed
                                </span>
                              )}
                            </div>

                            <div className="px-5 py-5">
                              <div className="py-3">
                                <div className="text-xl font-extrabold text-[#4A3AFF] duration-500 hover:text-red-500 group-hover:text-primary">
                                  {item.title}
                                </div>

                                <div className="text-gray-500 mt-2">
                                  {item.description}
                                </div>
                              </div>

                              <hr className="text-gray-400/80" />

                              <div className="mt-4 flex items-center font-bold justify-between py-2">
                                <div>
                                  <span className="text-[#ff0059]">
                                    {item.age}
                                  </span>
                                  <p className="text-gray-500 text-xs">
                                    Age Group
                                  </p>
                                </div>

                                <div>
                                  <span className="text-[#f7b500]">
                                    {item.classes}
                                  </span>
                                  <p className="text-gray-500 text-xs">
                                    Classes
                                  </p>
                                </div>

                                <div>
                                  <span className="text-[#0096ff]">
                                    {item.price}/h
                                  </span>
                                  <p className="text-gray-500 text-xs">
                                    Class Price
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </SwiperSlide>
                  ))}
                </Swiper> */}
              </div>
              <div className="flex justify-center pt-15">
                <Link to="#">
                  <button
                    className="
                  relative overflow-hidden
                  border border-primary text-primary font-bold capitalize
                  px-13 py-4 rounded-full
                  before:z-[-10]
                  before:content-[''] before:absolute before:top-[-100%] before:left-0
                  before:w-full before:h-full before:bg-primary before:transition-all before:duration-500
                  hover:before:top-0
                  z-10
                  hover:text-white
                "
                  >
                    More classes
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
