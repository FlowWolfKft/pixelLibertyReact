import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
/*import Blog from "../components/Blog";*/
import Contact from "../components/Contact";
import Services from "../components/Services";
function Home() {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <About></About>

      <Contact></Contact>
    </>
  );
}
export default Home;
