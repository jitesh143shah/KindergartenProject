import { Navlinks } from "../../constant/Navlinks";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../images";
import { SocialLinks } from "../../constant/SocialLinks";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";
import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import NavbarResponsive from "./NavbarResponsive";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const { pathname } = useLocation();
  return (
    <>
      <div className="relative z-[50]  ">
        <div className="bg-primary text-white hidden lg:flex ">
          <div
            className="container  flex justify-between 
        items-center py-2"
          >
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-7 text-[10px] lg:text-[15px]">
              <Link
                to="https://www.google.com/maps/search/?api=1&query=57/A,+Green+Lane,+NYC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-8 juce  items-center hover:text-secondary hover:underline duration-500"
              >
                <span>
                  <FaLocationDot />
                </span>
                <span className="uppercase">57/A, Green Lane, NYC</span>
              </Link>
              <Link
                to="tel:+10783673692"
                className="flex gap-5  items-center hover:text-secondary cursor-pointer  hover:underline duration-500"
              >
                <span>
                  <FaPhoneAlt />
                </span>
                <span className="">+10 (78) 367 3692</span>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-5 ">
              <ul className="flex  gap-5 ">
                {SocialLinks.map(({ icons: Icons }, index) => {
                  const IconComponent = Icons;
                  return (
                    <li
                      key={index}
                      className="hover:scale-x-[-1] hover:bg-secondary bg-white/20 rounded-full  px-1 py-1 duration-500"
                    >
                      <Link to="/">
                        <Icons className="text-white text-[10px] lg:text-[18px]  " />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Link
                to="/signin"
                className="flex items-center justify-center gap-3 group hover:underline duration-500 "
              >
                <PiSignInBold className="group-hover:translate-x-2.5 duration-500" />
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          //  className="bg-white shadow-md "
          className={`w-full  duration-500 transition-all ease-linear  ${
            isFixed
              ? "fixed top-0 left-0  bg-white shadow-md z-50    "
              : "relative bg-transarent  bg-white shadow-md "
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
                <div className="hidden lg:flex items-center gap-5">
                  <ul className="flex  ">
                    {Navlinks.map((data, index) => (
                      <li
                        key={index}
                        className={` px-3 h-full transition duration-300  ${
                          pathname == data.link
                            ? "text-primary bg-secondary/50 w-full relative  " // active link
                            : "text-secondary-blue hover:text-primary group md:cursor-pointer  " //unactive link for the navbar
                        }`}

                        // className="text-secondary-blue hover:text-primary group md:cursor-pointer  "
                      >
                        <Link
                          to={data.link}
                          className="group flex flex-col gap-5 group relative z-[999]  overflow-visible "
                        >
                          {data.title}
                          <p className="top-10 left-0   absolute h-[4px] bg-primary w-0 group-hover:w-full duration-500" />
                        </Link>

                        {/* SUBMENU */}
                        {data.submenu && (
                          <div className="absolute pt-8 hidden group-hover:md:block hover:md:block transform 0.3s  ease-in translate-x-0 hover: ">
                            <div>
                              <div className="py-3">
                                <div className="w-4 h-4  bg-secondary/90 absolute mt-1 left-3  rotate-45"></div>
                              </div>
                              <div className="bg-secondary/90 px-5 py-3.5 grid grid-cols-2 gap-5  ">
                                {data.sublink.map((subdata, ind) => (
                                  <div
                                    key={ind}
                                    className="text-sm font-bold p-2  hover:text-primary-blue  duration-500  flex flex-col  gap-3"
                                  >
                                    <div>
                                      <h1 className="capitalize">
                                        {subdata.name}
                                      </h1>
                                    </div>
                                    <div>
                                      {subdata.submenulink?.map(
                                        (submenudata, index2) => (
                                          <div
                                            key={index2}
                                            className="flex flex-col gap-5 "
                                          >
                                            <Link
                                              to={submenudata.link}
                                              className="font-semibold hover:underline duration-300 pt-2 hover:text-red-500"
                                            >
                                              {submenudata.name}
                                            </Link>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link
                      to="/"
                      //className="px-10 py-4 rounded-full text-white
                      //  bg-gradient-to-l from-secondary to-primary
                      //  hover:from-primary hover:to-secondary  duration-900
                      //  transition-all hover:duration-700   "
                    >
                      <button
                        className="
                      relative overflow-hidden bg-primary-cyan
                      border   font-bold capitalize
                      px-13 py-4 rounded-full
                      before:z-[-10]
                      before:content-[''] before:absolute before:top-[-100%] before:left-0
                      before:w-full before:h-full before:bg-primary before:transition-all before:duration-500
                      hover:before:top-0
                      z-10
                      text-white
  "
                      >
                        Enroll Now
                      </button>
                    </Link>
                  </div>
                </div>
                <div>
                  {/* Mobile Menu Icon */}
                  <div className="lg:hidden flex text-primary z-50 justify-center items-center">
                    {showMenu ? (
                      <IoClose
                        onClick={toggleMenu}
                        className="text-3xl md:text-5xl duration-500 cursor-pointer"
                      />
                    ) : (
                      <IoMenu
                        onClick={toggleMenu}
                        className="text-3xl md:text-5xl duration-500 cursor-pointer"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <NavbarResponsive showMenu={showMenu} />
      </div>
    </>
  );
};

export default Navbar;
