import React from "react";
import Card from "./Card";

const portfolioInfo = [
  {
    name: "Bookmart",
    description: "Second Hand Book Selling Website",
    liveSiteLink: "https://bookmart-f2207.web.app/",
    tools: ["React", "Tailwind", "MongoDB", "Express"],
    githubClientSite: "https://github.com/iammhador/bookmart-client",
    githubServerSite: "https://github.com/iammhador/bookmart-server",
    images: "https://i.ibb.co/JsZrFRC/bookmart.jpg",
  },
  {
    name: "Fly With Me",
    description: "Personal Tourist Guide Website",
    liveSiteLink: "https://fly-with-me-484dc.web.app/",
    tools: ["React", "Firebase", "Express", "MongoDB"],
    githubClientSite: "https://github.com/iammhador/a11-fly-with-me-client",
    githubServerSite: "https://github.com/iammhador/a11-fly-with-me-server",
    images: "https://i.ibb.co/Zzykqyy/fly-With-Me.png",
  },
  {
    name: "Sikho Sobai",
    description: "Online Education Platform Website",
    liveSiteLink: "https://sikho-sobai.web.app/",
    tools: ["React", "Tailwind", "Firebase", "Express"],
    githubClientSite: "https://github.com/iammhador/sikho_sobai-client",
    githubServerSite: "https://github.com/iammhador/sikho_sobai-server",
    images: "https://i.ibb.co/DLPrz41/sikho-Sobai.jpg",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="my-32 w-5/6 mx-auto">
      <div className="justify-end flex text-3xl font-bold items-center border-b-2 py-2 border-accent">
        <span className="text-primary mr-2 ">02. </span> Portfolio
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
        {portfolioInfo.map((port, i) => (
          <Card port={port} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
