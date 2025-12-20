import { FaArrowDown } from "react-icons/fa";
import { ClassesLinks } from "../../constant/ClassesLinks";

const ClassesPg = () => {
  return (
    <>
      <div>
        <div className="bg-[url('./assets/instra2.png')]  bg-cover bg-no-repeat  bg-center w-full h-full ">
          <div className="container w-l h-[250px] lg:h-[450px] flex justify-center items-center gap-5 group hover:text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl  font-bold duration-300 ">
              Classes
            </h1>
            <FaArrowDown className="text-3xl md:text-4xl lg:text-5xl   group-hover:scale-105 group-hover:translate-y-8 duration-500" />
          </div>
        </div>
        <div className="container py-10 lg:py-20 ">
          <div className="pb-10 lg:pb-20">
            <div className="text-center flex flex-col items-center justify-center">
              <div className="text-3xl lg:text-5xl  font-bold ">
                <span className="text-secondary-blue">Classes We Offer</span>
              </div>
              <p className="w-[70%] mt-10 text-[14px] md:text-xl text-secondary-blue/90">
                Our set he for firmament morning sixth subdue today the darkness
                creeping gathered divide our let god moving today. Moving in
                fourth air night bring upon lesser subdue fowl male signs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  ">
            {ClassesLinks.map(
              (
                { title, image, description, age, classes, price, closed },
                classesindex
              ) => (
                <ul className="grid gap-5 px-5 py-5 ">
                  <div className="" key={classesindex}>
                    <li className="">
                      <div className="bg-white rounded-4xl shadow-md overflow-hidden border-none hover:shadow-xl duration-300 group">
                        <div className="relative ">
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
                            <div className="text-gray-500 text-[14px] md:text-xl  mt-2">
                              {description}
                            </div>
                          </div>
                          <hr className="text-gray-400/80" />
                          <div className="mt-4 flex items-center font-bold justify-between py-2">
                            <div>
                              <span className="text-[#ff0059]">{age}</span>
                              <p className="text-gray-500 text-xs">Age Group</p>
                            </div>
                            <div>
                              <span className="text-[#f7b500]">{classes}</span>
                              <p className="text-gray-500 text-xs">Classes</p>
                            </div>
                            <div>
                              <span className="text-[#0096ff]">{price}/h</span>
                              <p className="text-gray-500 text-xs">
                                Class Price
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                </ul>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesPg;
