import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ port }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const {
    name,
    description,
    tools,
    liveSiteLink,
    githubClientSite,
    githubServerSite,
    images,
  } = port;
  return (
    <div>
      <div className="w-full h-52 overflow-y-auto">
        <img src={images} alt={name} className="hover:grayscale-0" />
      </div>
      <div className="bg-base-300 py-5 lg:mb-0 mb-5">
        <div>
          <div className="divider text-secondary uppercase text-lg font-medium tracking-widest">
            {name}
          </div>
          <p className="text-center text-accent">{description}</p>
        </div>
        <div className="flex flex-wrap justify-center my-3 lg:mx-0 mx-5">
          <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
            <p className="text-xs text-accent">{tools[0]}</p>
          </div>

          <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
            <p className="text-xs text-accent">{tools[1]}</p>
          </div>

          <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
            <p className="text-xs text-accent">{tools[2]}</p>
          </div>

          <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
            <p className="text-xs text-accent">{tools[3]}</p>
          </div>
        </div>

        <div className="my-8 text-center">
          <Link
            className="py-2 px-3 border border-accent rounded text-primary hover:bg-success"
            to={liveSiteLink}
          >
            Live Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
