import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="bg-[url('../../src/assets/hero.png')] bg-cover bg-center">
        <div className="container">
          <div className="grid grid-cols-2 py-25 ">
            <div>
              <div className="font-bold bg-white flex flex-col gap-8 py-15 px-20 item-center rounded-4xl">
                <h1 className="text-7xl text-secondary-blue ">
                  Quality Learning
                </h1>
                <h3 className="text-4xl text-amber-300">For Every Child</h3>
                <div>
                  <button className="py-3 px-5 bg-primary rounded-full text-white  hover:bg-secondary duration-500">
                    Explore Classes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
