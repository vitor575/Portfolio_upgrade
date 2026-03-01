import React from "react";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";
import Experience from "../Experience/Experience";
import ProjectsStack from "../ProjectsStack/ProjectsStack";
import Contact from "../Contact/Contact";

const Home: React.FC = () => {
  return (
    <>
      <Welcome />
      <About />
      <Experience />
      <ProjectsStack />
      <Contact />
    </>
  );
};

export default Home;
