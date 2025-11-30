import { href, Link } from "react-router-dom";
import { SocialLinks } from "../../constant/SocialLinks";
import { Logo } from "../../images";
import { Navlinks } from "../../constant/Navlinks";
import { AboutUsLinks } from "../../constant/AboutUsLinks";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary-blue px-0  py-25 text-white">
      <div className="container">
        <div>
          <div className="grid grid-cols-[60%_40%] justify-center gap-0   ">
            <div className=" flex flex-col gap-5 ">
              <div>
                <img src={Logo} alt="" />
              </div>
              <p className="text-justify w-[75%] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ut
                rerum ad quia tempore eligendi! Sunt dolor dignissimos nemo ad!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ut
                rerum ad quia tempore eligendi! Sunt dolor dignissimos nemo ad!
              </p>
              <div>
                <ul className="flex  gap-5 py-10 ">
                  {SocialLinks.map(({ icons: Icon, href }, index) => {
                    const IconComponent = Icon;
                    return (
                      <li
                        key={index}
                        className="px-2 py-2 bg-secondary-blue/20 hover:bg-primary duration-500  rounded-full"
                      >
                        <Link to={href} target="_blank">
                          <Icon className="text-xl " />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex  justify-between">
              <div>
                <span className="font-bold text-2xl  py-2">Quick Links</span>
                <div>
                  <ul>
                    {Navlinks.map(({ title, link }, index) => (
                      <li
                        key={index}
                        className="py-2 capitalize hover:underline duration-500"
                      >
                        <Link to={link}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <span className="font-bold text-2xl">About Us</span>
                <ul className="text-white">
                  {AboutUsLinks.map(({ title }, index) => (
                    <li
                      key={index}
                      className="py-2 capitalize hover:underline duration-500"
                    >
                      <Link to={href}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-[18px] pt-20">
          Copyright <span>© &nbsp;{new Date().getFullYear()} &nbsp;</span> All
          rights reserved | This template is made with &nbsp;
          <FaHeart className="text-secondary hover:text-primary duration-500" />
          &nbsp; by &nbsp;
          <span className="text-secondary hover:underline hover:text-primary duration-500">
            <Link>Colorlib</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
