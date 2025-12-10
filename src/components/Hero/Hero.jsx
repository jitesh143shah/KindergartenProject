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

const Hero = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // 👈 THIS WILL PAUSE ON HOVER
        }}
      >
        <SwiperSlide className="flex">
          <div className="bg-[url('../../src/assets/hero.png')] bg-cover bg-center w-full h-full  ">
            <div className="container">
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 py-15 lg:py-25 px-10">
                  <div className="flex  justify-center items-center">
                    <div className="font-bold bg-white flex flex-col gap-5 md:gap-8 py-10 md:py-15 lg:py-25 px-10 lg:px-25 item-center rounded-[20%]">
                      <h1 className="text-3xl sm:text-4xl lg:text-7xl text-secondary-blue ">
                        Quality Learning
                      </h1>
                      <h3 className="text-2xl sm:text-3xl lg:text-5xl text-amber-300">
                        For Every Child
                      </h3>
                      <div>
                        <button className="py-3 px-4 lg:px-8 text-[12px] md:text-xl bg-primary rounded-full text-white  hover:bg-secondary duration-500">
                          Explore Classes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="bg-[url('../../src/assets/instra2.png')] bg-cover bg-center">
            <div className="container">
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 py-15 lg:py-25 px-10">
                  <div className="flex  justify-center items-center">
                    <div className="font-bold bg-white flex flex-col gap-5 md:gap-8 py-10 md:py-15 lg:py-25 px-10 lg:px-25 item-center rounded-[20%]">
                      <h1 className="text-3xl sm:text-4xl lg:text-7xl text-secondary-blue ">
                        Quality Learning
                      </h1>
                      <h3 className="text-2xl sm:text-3xl lg:text-5xl text-amber-300">
                        For Every Child
                      </h3>
                      <div>
                        <button className="py-3 px-4 lg:px-8 text-[12px] md:text-xl bg-primary rounded-full text-white  hover:bg-secondary duration-500">
                          Explore Classes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="bg-[url('../../src/assets/hero.png')] bg-cover bg-center">
            <div className="container">
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 py-15 lg:py-25 px-10">
                  <div className="flex  justify-center items-center">
                    <div className="font-bold bg-white flex flex-col gap-5 md:gap-8 py-10 md:py-15 lg:py-25 px-10 lg:px-25 item-center rounded-[20%]">
                      <h1 className="text-3xl sm:text-4xl lg:text-7xl text-secondary-blue ">
                        Quality Learning
                      </h1>
                      <h3 className="text-2xl sm:text-3xl lg:text-5xl text-amber-300">
                        For Every Child
                      </h3>
                      <div>
                        <button className="py-3 px-4 lg:px-8 text-[12px] md:text-xl bg-primary rounded-full text-white  hover:bg-secondary duration-500">
                          Explore Classes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="bg-[url('../../src/assets/hero.png')] bg-cover bg-center">
            <div className="container">
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 py-15 lg:py-25 px-10">
                  <div className="flex  justify-center items-center">
                    <div className="font-bold bg-white flex flex-col gap-5 md:gap-8 py-10 md:py-15 lg:py-25 px-10 lg:px-25 item-center rounded-[20%]">
                      <h1 className="text-3xl sm:text-4xl lg:text-7xl text-secondary-blue ">
                        Quality Learning
                      </h1>
                      <h3 className="text-2xl sm:text-3xl lg:text-5xl text-amber-300">
                        For Every Child
                      </h3>
                      <div>
                        <button className="py-3 px-4 lg:px-8 text-[12px] md:text-xl bg-primary rounded-full text-white  hover:bg-secondary duration-500">
                          Explore Classes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
