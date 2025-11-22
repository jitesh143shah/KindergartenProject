import { About2, AboutIcon1, AboutIcon2, AboutIcon3 } from "../../images";

const About = () => {
  return (
    <div>
      <div>
        <div>
          <div className="container">
            <div className="py-30">
              <div className="text-center flex flex-col items-center justify-center ">
                <div className="text-4xl  font-bold">
                  <span className="text-secondary-blue">
                    Welcome to our &nbsp;
                    <span className="text-primary">Kindergarten</span>
                  </span>
                </div>
                <p className="w-[70%] mt-10 text-xl text-secondary-blue/90">
                  Our set he for firmament morning sixth subdue today the
                  darkness creeping gathered divide our let god moving today.
                  Moving in fourth air night bring upon lesser subdue fowl male
                  signs.
                </p>
              </div>
              <div className="grid grid-cols-2 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex justify-center items-center gap-5">
                    <div>
                      <img src={AboutIcon1} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold">Inter School Sports</span>
                      <span>
                        The words you use in your written communica speak
                        volumes.
                      </span>
                    </div>
                  </div>
                  <div>
                    <img src={AboutIcon2} alt="" />
                  </div>
                  <div>
                    <img src={AboutIcon3} alt="" />
                  </div>
                </div>
                <div>
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
