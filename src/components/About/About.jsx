import { About2, AboutIcon1, AboutIcon2, AboutIcon3 } from "../../images";

const About = () => {
  return (
    <div>
      <div>
        <div>
          <div className="container">
            <div className="py-20 md:py-30">
              <div className="text-center flex flex-col items-center justify-center">
                <div className="text-2xl lg:text-4xl  font-bold ">
                  <span className="text-secondary-blue">
                    Welcome to our &nbsp;
                    <span className="text-primary">Kindergarten</span>
                  </span>
                </div>
                <p className="w-[90%] text-[14px]  text-justify md:w-[80%] mt-10 md:text-xl text-secondary-blue/90">
                  Our set he for firmament morning sixth subdue today the
                  darkness creeping gathered divide our let god moving today.
                  Moving in fourth air night bring upon lesser subdue fowl male
                  signs.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center mt-10 md:mt-20">
                <div className="flex flex-col  justify-center gap-10">
                  <div className="flex gap-15 group duration-500">
                    <div className="group-hover:animate-bounce animate-pulse duration-500">
                      <img src={AboutIcon1} alt="About Icons" />
                    </div>
                    <div className="flex flex-col ">
                      <span className="font-bold text-xl md:text-2xl text-dark-blue group-hover:scale-x-85 duration-500">
                        Inter School Sports
                      </span>
                      <span className="w-[70%] text-[14px] md:text-xl">
                        The words you use in your written communica speak
                        volumes.
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-15 group duration-500">
                    <div className="group-hover:animate-bounce animate-pulse duration-700">
                      <img src={AboutIcon2} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-xl md:text-2xl text-yellow-400 group-hover:scale-x-85 duration-500">
                        Friendly Environment
                      </span>
                      <span className="w-[70%]  text-[14px] md:text-xl">
                        The words you use in your written communica speak
                        volumes.
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-15 group duration-500">
                    <div className="group-hover:animate-bounce animate-pulse duration-900">
                      <img src={AboutIcon3} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-xl md:text-2xl text-secondary group-hover:scale-x-85 duration-500 ">
                        Multimedia Class
                      </span>
                      <span className="w-[70%]  text-[14px] md:text-xl">
                        The words you use in your written communica speak
                        volumes.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hover:scale-95 duration-500">
                  <img src={About2} alt="About" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
