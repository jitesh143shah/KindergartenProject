import React from "react";
import { Navlinks } from "../../constant/Navlinks";
import { Link } from "react-router-dom";
import { Logo } from "../../images";

const Navbar = () => {
  return (
    <>
      <div className="bg-primary text-white">
        <div className="container text-xl">
          <div>Navbar</div>
        </div>
      </div>
      <div className="bg-white shadow-md">
        <div className="container">
          <div className="flex justify-between py-5 items-center ">
            <div className="flex items-center justify-center">
              <img src={Logo} alt="" />
            </div>
            <div className="flex items-center justify-center gap-5 capitalize font-bold">
              <ul className="flex gap-5 ">
                {Navlinks.map(({ link, title }, index) => (
                  <Link
                    to={link}
                    key={index}
                    className="group flex flex-col gap-5 group relative "
                  > 
                    <li className="text-secondary-blue hover:text-primary group-hover:w-full  ">
                      {title}
                        <p className="top-10 left-0   absolute h-[4px] bg-primary w-0 group-hover:w-full duration-500" />
                    </li>
                  </Link>
                ))}
              </ul>
                  

              <div>
                <Link to="/" className="px-10 py-4  rounded-full text-white duration-500
                bg-gradient-to-l to-primary from-secondary hover:to-secondary hover:from-primary ">
                  <button>Enroll Now</button>
                </Link>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
