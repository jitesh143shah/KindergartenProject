import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Logo } from "../images";

const Home = () => {
  return (
    <>
      {/* <Outlet/> */}
      <div>
        <section className="relative">
          {/* Background image */}
          <img
            src={Logo}
            alt="Wave Background"
            className="w-full h-[400px] object-cover"
          />

          <svg
            className="absolute bottom-0 left-0 w-full h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            {/* Pink border wave */}
            <path
              d="M0,40 C300,120 900,0 1200,80 L1200,120 L0,120 Z"
              fill="#f9a8d4"
            />
            {/* White overlay wave (sits on top of pink, slightly higher) */}
            <path
              d="M0,50 C300,130 900,10 1200,90 L1200,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </section>
      </div>
    </>
  );
};

export default Home;
