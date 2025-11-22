import { Navlinks } from "../../constant/Navlinks";
import { Link } from "react-router-dom";
import { Logo } from "../../images";
import { SocialLinks } from "../../constant/SocialLinks";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";
import { AuthForm } from "../../Pages/imports";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // When scrolled more than 50px, make navbar fixed
  //     setIsFixed(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-primary text-white ">
        <div
          className="container  flex justify-between 
        items-center py-2"
        >
          <div className="flex gap-7">
            <div className="flex gap-2 justify-center items-center hover:text-secondary">
              <span>
                <FaLocationDot />
              </span>
              <span className="uppercase">57/A, Green Lane, NYC</span>
            </div>
            <div className="flex gap-5 justify-center items-center hover:text-secondary">
              <span>
                <FaPhoneAlt />
              </span>
              <span>+10 (78) 367 3692</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <ul className="flex  gap-5 ">
              {SocialLinks.map(({ icons: Icons }, index) => {
                return (
                  <li
                    key={index}
                    className="hover:scale-x-[-1] hover:bg-secondary bg-white/20 rounded-full  px-1 py-1 duration-500"
                  >
                    <Link to="/">
                      <Icons className="text-white text-[18px]  " />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              to="/signin"
              className="flex items-center justify-center gap-3 group "
            >
              <PiSignInBold className="group-hover:translate-x-2.5 duration-500" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        //  className="bg-white shadow-md "
        className={`w-full  duration-500 transition: all 0.4s ease;  ${
          isFixed
            ? "fixed top-0 left-0  bg-white shadow-md z-50 duration-500 "
            : "relative bg-transarent  bg-white shadow-md duration-500 "
        }`}
      >
        <div className="container">
          <div className="flex justify-between py-5 items-center ">
            <div className="flex items-center justify-center">
              <Link to="/">
                <img src={Logo} alt={Logo} />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-5 capitalize font-bold">
              <ul className="flex gap-5 ">
                {Navlinks.map(({ link, title }, index) => (
                  <Link
                    to={link}
                    key={index}
                    className="group flex flex-col gap-5 group relative "
                  >
                    <li className="text-secondary-blue hover:text-primary group  ">
                      {title}
                      <p className="top-10 left-0   absolute h-[4px] bg-primary w-0 group-hover:w-full duration-500" />
                    </li>
                  </Link>
                ))}
              </ul>

              <div>
                <Link
                  to="/"
                  className=" 
                   px-10 py-4 rounded-full text-white bg-primary hover:bg-secondary duration-500                  
                  " //className="px-10 py-4 rounded-full text-white
                  //  bg-gradient-to-l from-secondary to-primary
                  //  hover:from-primary hover:to-secondary  duration-900
                  //  transition-all hover:duration-700   "
                >
                  <button> Enroll Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
