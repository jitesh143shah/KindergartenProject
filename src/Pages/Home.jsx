import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Logo } from "../images";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";

const Home = () => {
  return (
    <>
      <Outlet />
      <Hero />
      <About />
    </>
  );
};

export default Home;
