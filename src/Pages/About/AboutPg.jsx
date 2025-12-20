import { FaArrowDown } from "react-icons/fa";
import {
  About,
  EventsSection,
  Gallery,
  TeacherSection,
  Testimonials,
} from "../../components/imports";

const AboutPg = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="bg-[url('./assets/hero.png')]  bg-cover bg-center w-full h-full ">
            <div className="container w-l h-[450px] flex justify-center items-center gap-5 group hover:text-white duration-500">
              <h1 className="text-4xl md:text-6xl lg:text-7xl  font-bold ">
                About
              </h1>
              <FaArrowDown className="text-4xl md:text-6xl lg:text-7xl  group-hover:scale-115 group-hover:translate-y-15 duration-500" />
            </div>
          </div>
        </div>
      </div>
      <About />
      <EventsSection />
      <TeacherSection />
      <Testimonials />
      <Gallery />
    </>
  );
};

export default AboutPg;
