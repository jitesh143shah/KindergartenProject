import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Blog = () => {
  return (
    <>
      <div>
        <div className="bg-[url('../../src/assets/hero.png')]  bg-cover bg-center w-full h-full ">
          <div className="container w-l h-[450px] flex justify-center items-center gap-5 group hover:text-white duration-500">
            <h1 className="text-4xl md:text-6xl lg:text-7xl  font-bold ">
              Blog
            </h1>
            <FaArrowDown className="text-4xl md:text-6xl lg:text-7xl  group-hover:scale-115 group-hover:translate-y-15 duration-500" />
          </div>
        </div>
        <div className="container">
          <div>blog 1</div>
        </div>
      </div>
    </>
  );
};

export default Blog;
