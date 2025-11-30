import { Outlet } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Classes from "../components/Classes/Classes";
import { EventsSection, TeacherSection } from "../components/imports";

const Home = () => {
  return (
    <>
      <Outlet />
      <Hero />
      <About />
      <Classes />
      <EventsSection />
      <TeacherSection />
    </>
  );
};

export default Home;
