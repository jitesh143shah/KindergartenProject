import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Logo } from "../images";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Classes from "../components/Classes/Classes";

const Home = () => {
  return (
    <>
      <Outlet />
      <Hero />
      <About />
      <Classes />
    </>
  );
};

export default Home;
