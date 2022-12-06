import React from "react";

const Banner = () => {
  return (
    <div className="my-20 w-5/6 mx-auto">
      <div className="my-5">
        <h3 className="text-primary text-lg font-normal">Hello, my name is</h3>
        <h1 className="text-neutral text-7xl font-extrabold my-8">
          Mehedy Hasan.
        </h1>
        <h1 className="text-accent text-7xl font-extrabold my-8">
          I build easy & accessible website.
        </h1>
      </div>
      <div className="w-1/2">
        <p className="text-accent">
          I’m a web developer specializing in{" "}
          <span className="text-primary">react js</span>. The main focus is
          front-end, but at the same time, I try to learn new technology also.
          Currently, I’m focused on learning mern stack development.
        </p>
      </div>
      <div className="my-10">
        <a
          className="py-3 px-5 border border-primary rounded text-primary"
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
