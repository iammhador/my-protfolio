import React from "react";

const Banner = () => {
  return (
    <div className="my-20 md:my-20 lg:mt-20 w-5/6 mx-auto lg:h-screen">
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
          I’m a web developer specializing in{" "}
          <span className="text-primary">react js</span>. The main focus is
          front-end, but at the same time, I try to learn new technology also.
          Currently, I’m focused on learning mern stack development.
        </p>
      </div>
      <div className="my-10">
        <a
          className="py-2 px-2 lg:py-3 lg:px-5 border border-primary rounded text-primary hover:bg-success"
          href="/src/Assets/iammhador-resume.pdf"
          download
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Banner;
