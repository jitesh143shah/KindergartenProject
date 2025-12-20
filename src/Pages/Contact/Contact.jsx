import React from "react";
import { SocialLinks } from "../../constant/SocialLinks";
import { ContactPageLink } from "../../constant/ContactPageLink";
import { FaArrowDown, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="">
        <div className="bg-[url('./assets/instra4.png')]  bg-cover bg-center w-full h-full ">
          <div className="container w-l h-[450px] flex justify-center items-center gap-5 group hover:text-white duration-500">
            <h1 className="text-4xl md:text-6xl lg:text-7xl  font-bold capitalize">
              Contact
            </h1>
            <FaArrowDown className="text-4xl md:text-6xl lg:text-7xl  group-hover:scale-115 group-hover:translate-y-15 duration-500" />
          </div>
        </div>
        <div className=" container pt-10 ">
          <div>
            <div>
              <div>
                <iframe
                  title="Tinkune Maps"
                  width="100%"
                  height="350"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kathmandu-12,%20Tinkune+(Kindergarden)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <Link to="https://www.mapsdirections.info/de/evolkerung-auf-einer-karte-berechnen/">
                    interaktive Bevölkerungskarte
                  </Link>
                </iframe>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-20  ">
            <div className="flex flex-col gap-5 bg-secondary/30 py-10 px-5 pr-15">
              <div className="flex flex-col gap-4">
                <span className="text-2xl md:text-3xl font-bold flex gap-2 items-center ">
                  <FaStar className="text-primary text-[20px] " />
                  Expert Team
                </span>
                <span className="text-2xl md:text-3xl xl:text-4xl font-bold text-secondary-blue">
                  Expert Team Get In Touch With Conchitec!!
                </span>
                <p className="text-justify text-1xl sm:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              {ContactPageLink.map(({ icons: Icon, name, title }, index) => {
                const IconComponent = Icon;
                return (
                  <div
                    key={index}
                    className="flex gap-5 md:gap-10 justify-between items-center group"
                  >
                    <div className="flex flex-col">
                      <span className="text-xl sm:text-2xl font-bold text-secondary-blue">
                        {title}
                      </span>
                      <span>{name}</span>
                    </div>
                    <div
                      className="p-2 sm:p-3 rounded-full text-xl
                    duration-500  bg-secondary border-1 group-hover:bg-primary hover:text-white"
                    >
                      <Icon />
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-between  items-center flex-col sm:flex-row gap-5">
                <div className="text-xl text-secondary-blue font-bold">
                  Social Media
                </div>
                <div className="flex gap-1 ">
                  {SocialLinks.map(({ icons: Icon }, index) => {
                    const IconComponent = Icon;
                    return (
                      <div
                        key={index}
                        className="bg-secondary flex items-center justify-center
                      rounded-full p-2 hover:bg-primary hover:text-white duration-500"
                      >
                        {<Icon />}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 px-10 py-15 font-roboto  ">
              <form action="">
                <h1 className="text-2xl md:text-4xl font-bold pb-10 text-secondary-blue">
                  General Inquiries
                </h1>
                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-col md:flex-row w-full gap-5 ">
                    <div>
                      <label htmlFor="fname">
                        <span className="mt-3">First Name:</span>
                      </label>
                      <input
                        type="text"
                        id="fname"
                        className="bg-white/50  px-3 py-4 w-full
                         focus:bg-primary/90 focus:text-white focus:text-green "
                        placeholder="Enter Your First Name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lname">
                        <span>Last Name:</span>
                      </label>
                      <input
                        type="text"
                        id="lname"
                        className="bg-white/50  px-3 py-4 w-full focus:bg-primary/90 focus:text-white focus:text-green "
                        placeholder="Enter Your Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email">
                      <span className="flex  gap-1 ">
                        Email:
                        <FaStar className="text-red-500 text-[8px]" />
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-white/50  px-3 py-4 w-full focus:bg-primary/90 focus:text-white focus:text-green "
                      placeholder="Enter Your Email Here"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="number">
                      <span>Mobile Number:</span>
                      <input
                        type="number"
                        id="number"
                        className="bg-white/50  px-3 py-4 w-full focus:bg-primary/90 focus:text-white focus:text-green "
                        placeholder="Enter Your Mobile Number"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex w-full">
                    <label
                      htmlFor="message"
                      className="w-full focus:bg-primary/90 focus:text-white focus:text-green "
                    >
                      <span>Message:</span>
                      <textarea
                        id="message"
                        className="bg-white/50 px-3 py-4 w-full focus:bg-primary/90 focus:text-white focus:text-green "
                        placeholder="Share  why you are contacting"
                        required
                      ></textarea>
                    </label>
                  </div>
                  <div>
                    <a href="#">
                      <button className="bg-secondary py-4 md:px-25 xl:px-35 px-15 rounded-full cursor-pointer hover:bg-primary duration-500">
                        Send
                      </button>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
