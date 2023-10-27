import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="my-20 md:my-20 lg:mt-20 w-5/6 mx-auto lg:h-screen"
    >
      <div className="my-5">
        <h3 className="text-primary text-lg font-normal">Hello, my name is</h3>
        <h1 className="text-neutral text-3xl my-3 lg:text-7xl md:text-3xl font-extrabold lg:my-8">
          Mehedy Hasan.
        </h1>
        <h1 className="text-accent text-4xl my-4 lg:text-7xl sm:text-4xl font-extrabold Lg:my-8">
          I build easy & accessible website.
        </h1>
      </div>
      <div className="w-10/12 lg:w-1/2">
        <p className="text-accent">
          I'm a web developer who specializes in react.js. Although front-end
          development is my major focus, I constantly attempt to stay current
          with new technologies. At the present, I'm focusing on learning{" "}
          <span className="text-primary">MERN Stack</span> development.
        </p>
      </div>
      <div className="my-10">
        <a
          className="py-2 px-2 lg:py-3 lg:px-5 border border-secondary rounded text-secondary hover:bg-success"
          href="https://www.linkedin.com/in/iammhador/"
          target="blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Banner;
