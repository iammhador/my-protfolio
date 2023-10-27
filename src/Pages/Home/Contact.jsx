import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "./Form";
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
      className="lg:mb-32 my-20 w-11/12 mx-auto"
    >
      <div className="justify-center flex text-3xl font-bold items-center border-b-2 py-2 border-accent">
        <h3>
          <span className="text-primary mr-2 ">03. </span> Contact
        </h3>
      </div>
      <div className="text-center mt-10 lg:w-1/2 md:w-full mx-auto text-accent">
        <p>
          If you want to give me some opportunity or have any queries, feel free
          to reach me.
        </p>
        <div className="mt-10">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
