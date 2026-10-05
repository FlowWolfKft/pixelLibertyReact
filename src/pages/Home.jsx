import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Services from "../components/Services";
import WorkProcess from "../components/WorkProcess";

function Home() {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <WorkProcess />
      <About></About>
      <Blog fooldal="true"></Blog>
      <Contact></Contact>
    </>
  );
}
export default Home;
