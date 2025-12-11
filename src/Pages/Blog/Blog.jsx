import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Blog = () => {
  return (
    <>
      <div>
        <div className="bg-[url('../../src/assets/hero.png')]  bg-cover bg-center w-full h-full ">
          <div className="container w-l h-[450px] flex justify-center items-center gap-5 group">
            <h1 className="text-4xl font-bold">Blog</h1>
            <FaArrowDown className="text-3xl group-hover:scale-105 group-hover:translate-y-8 duration-500" />
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
