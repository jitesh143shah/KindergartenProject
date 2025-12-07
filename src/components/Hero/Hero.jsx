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
          <div className="bg-[url('../../src/assets/hero.png')] bg-cover bg-center  ">
            <div className="container">
              <div>
                <div className="grid grid-cols-2 py-25 px-10">
                  <div>
                    <div className="font-bold bg-white flex flex-col gap-8 py-25 px-25 item-center rounded-[20%]">
                      <h1 className="text-7xl text-secondary-blue ">
                        Quality Learning
                      </h1>
                      <h3 className="text-5xl text-amber-300">
                        For Every Child
                      </h3>
                      <div>
                        <button className="py-3 px-8 bg-primary rounded-full text-white  hover:bg-secondary duration-500">
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
                <div className="grid grid-cols-2 py-25 px-10">
                  <div>
                    <div className="font-bold bg-white flex flex-col gap-8 py-25 px-25 item-center rounded-[20%]">
                      <h1 className="text-7xl text-secondary-blue ">
                        Quality Learning
                      </h1>
                      <h3 className="text-5xl text-amber-300">
                        For Every Child
                      </h3>
                      <div>
                        <button className="py-3 px-8 bg-primary rounded-full text-white  hover:bg-secondary duration-500">
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
                <div className="grid grid-cols-2 py-25 px-10">
                  <div>
                    <div className="font-bold bg-white flex flex-col gap-8 py-25 px-25 item-center rounded-[20%]">
                      <h1 className="text-7xl text-secondary-blue ">
                        Quality Learning
                      </h1>
                      <h3 className="text-5xl text-amber-300">
                        For Every Child
                      </h3>
                      <div>
                        <button className="py-3 px-8 bg-primary rounded-full text-white  hover:bg-secondary duration-500">
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
                <div className="grid grid-cols-2 py-25 px-10">
                  <div>
                    <div className="font-bold bg-white flex flex-col gap-8 py-25 px-25 item-center rounded-[20%]">
                      <h1 className="text-7xl text-secondary-blue ">
                        Quality Learning
                      </h1>
                      <h3 className="text-5xl text-amber-300">
                        For Every Child
                      </h3>
                      <div>
                        <button className="py-3 px-8 bg-primary rounded-full text-white  hover:bg-secondary duration-500">
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
