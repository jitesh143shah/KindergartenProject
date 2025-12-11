import React from "react";
import { TestimonialsLinks } from "../../constant/TestimonialsLinks";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "../../App.css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
const Testimonials = () => {
  return (
    <div>
      <div className="bg-[url('../../src/assets/section_bg3.png')] bg-cover bg-center">
        <div className="container py-20 md:py-40">
          <div>
            <Swiper // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              autoplay={{
                delay: 30000000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // 👈 THIS WILL PAUSE ON HOVER
              }}
            >
              <ul className="flex items-center justify-center">
                {TestimonialsLinks.map((data, index) => (
                  <>
                    <SwiperSlide className="group" key={`testimonial-${index}`}>
                      <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center gap-10 lg:gap-15">
                          <div className="flex  justify-center">
                            <img
                              src={data.icon}
                              alt="Icons"
                              className="group-hover:rotate-180  duration-500 h-10 w-10 md:h-15 md:w-15 lg:h-20  lg:w-20"
                            />
                          </div>
                          <p className="text-center text-[16px] md:text-xl lg:text-2xl w-[70%] md:w-[80%] text-secondary-blue/80">
                            "{data.description}"
                          </p>
                        </div>
                        <div className=" group flex items-center justify-center gap-5 py-10">
                          <div>
                            <img
                              src={data.image}
                              alt={data.name}
                              className="w-20 h-20 bg-cover rounded-full group-hover:scale-110 duration-500"
                            />
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-xl text-primary hover:text-red-600 duration-500">
                              {data.name}
                            </div>
                            <div>{data.position}</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                ))}
              </ul>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
