import React from "react";
import { GalleryLinks } from "../../constant/GalleryLinks";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "../../App.css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <Swiper // install Swiper modules
              modules={[Scrollbar, A11y, Autoplay]}
              spaceBetween={false}
              slidesPerView={5}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // 👈 THIS WILL PAUSE ON HOVER
              }}
            >
              <ul className="flex">
                {GalleryLinks.map((data, index) => {
                  const Icon = data.icon;
                  return (
                    <li key={index}>
                      <SwiperSlide className="group">
                        <div className="relative">
                          <span>
                            <img
                              src={data.image}
                              alt="image"
                              className=" bg-cover w-full h-full"
                            />
                          </span>
                          <div
                            className=" absolute inset-0 
                                rounded-4xl 
                              flex items-center justify-center
                                opacity-0 
                                group-hover:opacity-100 
                                duration-500"
                          >
                            <Link to={data.link}>
                              <Icon className="text-white text-4xl " />
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    </li>
                  );
                })}
              </ul>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
