import { Logo } from "../../images";
import { Link } from "react-router-dom";
import { Navlinks } from "../../constant/Navlinks";
import { SocialLinks } from "../../constant/SocialLinks";
import { FaHeart, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";

const NavbarResponsive = ({ showMenu }) => {
  return (
    <>
      <div>
        <div className=" z-0 ">
          <div
            className={` lg:hidden
           fixed h-screen w-[75%] bg-primary-blue
           flex flex-col justify-between px-8 py-6  z-50
           duration-500 transition-all ease-in-out 
           overflow-y-scroll    
   
           ${showMenu ? "top-0 left-0" : "-top-[100%] -left-[0%]"}
            `}
          >
            <div className="flex flex-col gap-4 sm:gap-8">
              <div className="flex items-center justify-between flex-col">
                <div className="my-10 flex items-center justify-center hover:bg-primary/40 duration-500 p-3 rounded-2xl">
                  <Link to="/" className="">
                    <img src={Logo} alt={Logo} />
                  </Link>
                </div>
              </div>
              <div className="">
                <ul className="flex flex-col  hover: rounded-2xl p-2 hover:bg-primary/40">
                  {Navlinks.map((data, index) => (
                    <li
                      key={index}
                      className="uppercase font-bold text-white text-[14px]  p-2 rounded-2xl duration-500 flex justify-center hover:bg-primary-blue/40 items-center hover:text-secondary  hover:underline "
                    >
                      <Link to={data.link}> {data.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center gap-5 sm:gap-10 flex-col sm:flex-row  font-bold">
                <Link
                  to="/"
                  className="flex justify-center items-center
                      relative overflow-hidden bg-primary-cyan border   font-bold capitalize
                     py-2 px-13 sm:py-4 rounded-2xl before:z-[-10]
                      before:content-[''] before:absolute before:top-[-100%] before:left-0
                      before:w-full before:h-full before:bg-primary before:transition-all before:duration-500
                      hover:before:top-0 z-10 text-white "
                >
                  <button>Enroll Now</button>
                </Link>

                <Link
                  to="/signin"
                  className=" flex items-center justify-center gap-3 group  relative overflow-hidden bg-primary-cyan
                      border   font-bold capitalize px-13 py-2 sm:py-4 rounded-2xl before:z-[-10]
                      before:content-[''] before:absolute before:top-[-100%] before:left-0
                      before:w-full before:h-full before:bg-primary before:transition-all before:duration-500
                      hover:before:top-0 z-10 text-white  "
                >
                  <PiSignInBold className="group-hover:translate-x-2.5 duration-500" />
                  <span>Login</span>
                </Link>
              </div>
              <div>
                <ul className="flex justify-center items-center gap-5">
                  {SocialLinks.map((data, index) => {
                    const Icon = data.icons;
                    return (
                      <li
                        key={index}
                        className="px-2 py-2 bg-secondary-blue/20 hover:bg-primary duration-500  rounded-full"
                      >
                        <Link
                          to={data.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white "
                        >
                          <Icon />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col  items-center justify-center  text-white  ">
                <div className="flex flex-col gap-5 justify-center items-center">
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
              </div>
              <div className=" flex flex-col  items-center justify-center text-white gap-2  ">
                Copyright
                <span className="flex">
                  &nbsp;
                  <span>©</span> &nbsp;<span>{new Date().getFullYear()}</span>
                  &nbsp;
                </span>
                <span>All rights reserved | </span>
                <span> This template is made with &nbsp;</span>
                <FaHeart className="text-secondary hover:text-primary duration-500 t" />
                &nbsp; by &nbsp;
                <span className="text-secondary hover:underline hover:text-primary duration-500">
                  <Link to="#">Colorlib</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarResponsive;
