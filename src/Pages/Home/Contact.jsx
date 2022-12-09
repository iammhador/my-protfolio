import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div
      data-aos="fade-down"
      id="contact"
      className="lg:mb-32 my-20 w-5/6 mx-auto"
    >
      <div className="justify-center flex text-3xl font-bold items-center border-b-2 py-2 border-accent">
        <h3>
          <span className="text-primary mr-2 ">03. </span> Contact
        </h3>
      </div>
      <div className="text-center mt-10 lg:w-1/2 md:w-full mx-auto text-accent">
        <p>
          As you know, I'm fresher, so if you want to give me some opportunity
          or have any queries, feel free to reach me.
        </p>
        <div className="mt-10">
          <a
            className="py-4 px-5 border border-primary rounded text-primary hover:bg-success mt-10"
            href="mailto:iammhador@gmail.com"
            rel="noopener noreferrer"
          >
            Say Hello
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
