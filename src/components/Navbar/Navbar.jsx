import { Navlinks } from "../../constant/Navlinks";
import { Link } from "react-router-dom";
import { Logo } from "../../images";
import { SocialLinks } from "../../constant/SocialLinks";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";
import { AuthForm } from "../../Pages/imports";

const Navbar = () => {
  return (
    <>
      <div className="bg-primary text-white">
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
              {SocialLinks.map(({ icons }, index) => {
                const Icons = icons;
                return (
                  <li key={index} className="duration-500 hover:scale-x-[-1]">
                    <Link to="/">
                      <Icons className="text-white text-[18px]" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              to="/signin"
              className="flex items-center justify-center gap-1 "
            >
              <PiSignInBold />
              <span>Signin</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md">
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
                    <li className="text-secondary-blue hover:text-primary group-hover:w-full  ">
                      {title}
                      <p className="top-10 left-0   absolute h-[4px] bg-primary w-0 group-hover:w-full duration-500" />
                    </li>
                  </Link>
                ))}
              </ul>

              <div>
                <Link
                  to="/"
                  className="px-10 py-4 rounded-full text-white 
               bg-gradient-to-l from-secondary to-primary 
               hover:from-primary hover:to-secondary  duration-700
               transition-all hover:duration-700 ease-in-out translate-0 hover:translate-1 "
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
