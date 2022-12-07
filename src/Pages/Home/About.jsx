import React from "react";

const About = () => {
  return (
    <div id="about" className="mb-32 w-5/6 mx-auto">
      <div className="flex text-3xl font-bold items-center border-b-2 py-2 border-accent">
        <h3>
          <span className="text-primary mr-2">01. </span> About Me
        </h3>
      </div>
      <div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10">
          <div className="">
            <p className="text-accent mb-5 ">
              Hey! I'm Mehedy Hasan Ador and I love to explore myself. I explore
              lots of fields. At some moments, my interest grows in the
              development sector.{" "}
              <span className="text-primary">
                Last three years I hold this sector and try to explore the
                fields.
              </span>
            </p>

            <p className="text-accent">
              There were so many changes that happened to me.{" "}
              <span className="text-primary">
                I completed two courses fully and one course is running.
              </span>{" "}
              My passions always help me to survive. As you know, how depressed
              the sector is! When you are stuck, the code is not working and
              other issues. But, I never quite. I always hold and try to figure
              out where is the problem and at the end I will always get success.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap justify-end">
              <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                HTML
              </p>

              <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                CSS
              </p>

              <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                BootStrap
              </p>

              <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                Tailwind
              </p>

              <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                JavaScript
              </p>

              <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                React JS
              </p>

              <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                Express
              </p>

              <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                Node JS
              </p>

              <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                MongoDB
              </p>

              <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                Firebase
              </p>

              <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                Wordpress
              </p>

              <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                Elementor
              </p>

              <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                Divi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
