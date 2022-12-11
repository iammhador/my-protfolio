import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../Assets/Working late-bro.svg";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div data-aos="fade-down">
      <img src={img} alt="Coming Soon" className="mx-auto w-5/12" />
      <div className="lg:w-1/3 w-10/12 mx-auto">
        <h3 className="py-5 px-8 border-2 border-accent text-secondary rounded-md text-center lg:text-xl text-base shadow-2xl">
          Blog Section Is Under Construction
        </h3>
      </div>
    </div>
  );
};

export default Blog;
