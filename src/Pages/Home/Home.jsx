import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="lg:w-5/6 lg:mx-auto">
      <Banner />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
