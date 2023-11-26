import React, { useEffect } from "react";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
const portfolioInfo = [
  {
    name: "Tiffin Bati",
    description: "Bachelor Subscription Base Food Service",
    liveSiteLink: "https://tiffin-bati-f.vercel.app/",
    tools: ["Next JS", "Ant Design", "Prisma", "PostgreSQL"],
    githubClientSite: "https://github.com/iammhador/Tiffin_Bati_Frontend",
    githubServerSite: "https://github.com/iammhador/Tiffin_Bati_Backend",
    images:
      "https://i.ibb.co/RgzcMjF/Fire-Shot-Capture-064-Tiffin-Bati-Homemade-Flavors-at-Your-Doorstep-tiffin-bati-f-vercel-app.png",
  },
  {
    name: "Build My Rig",
    description: "PC Builder",
    liveSiteLink: "https://build-my-rig-six.vercel.app/",
    tools: ["React", "Redux", "Tailwind", "MongoDB"],
    githubClientSite: "https://github.com/iammhador/build-my-rid",
    githubServerSite: "https://github.com/iammhador/build-my-rid-server",
    images:
      "https://i.ibb.co/GRjJ5mj/Fire-Shot-Capture-062-Build-My-Rig-build-my-rig-six-vercel-app.png",
  },
  {
    name: "Info Card Official",
    description: "Manage your social media in one platform",
    liveSiteLink: "https://info-card-official.netlify.app/",
    tools: ["React", "MongoDB", "Express", "Firebase"],
    githubClientSite: "https://github.com/iammhador/Client-Info-Card",
    githubServerSite: "https://github.com/iammhador/Server-Info-Card",
    images:
      "https://i.ibb.co/VTVrZRz/Fire-Shot-Capture-036-Info-Card-Official-info-card-official-netlify-app.png",
  },
  {
    name: "Bookmart",
    description: "Second Hand Book Selling Website",
    liveSiteLink: "https://bookmart-f2207.web.app/",
    tools: ["React", "Tailwind", "MongoDB", "Express"],
    githubClientSite: "https://github.com/iammhador/bookmart-client",
    githubServerSite: "https://github.com/iammhador/bookmart-server",
    images: "https://i.ibb.co/wQwXfgy/bookmart-long.png",
  },
  {
    name: "Fly With Me",
    description: "Personal Tourist Guide Website",
    liveSiteLink: "https://fly-with-me-484dc.web.app/",
    tools: ["React", "Firebase", "Express", "MongoDB"],
    githubClientSite: "https://github.com/iammhador/a11-fly-with-me-client",
    githubServerSite: "https://github.com/iammhador/a11-fly-with-me-server",
    images: "https://i.ibb.co/7rH6jp6/fly-with-me-long.png",
  },
  {
    name: "Sikho Sobai",
    description: "Online Education Platform Website",
    liveSiteLink: "https://sikho-sobai.web.app/",
    tools: ["React", "Tailwind", "Firebase", "Express"],
    githubClientSite: "https://github.com/iammhador/sikho_sobai-client",
    githubServerSite: "https://github.com/iammhador/sikho_sobai-server",
    images: "https://i.ibb.co/C0PFC5R/sikho-sobai-long.png",
  },
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div
      data-aos="fade-down"
      id="portfolio"
      className="lg:my-32 my-20 w-5/6 mx-auto"
    >
      <div className="justify-end flex text-3xl font-bold items-center border-b-2 py-2 border-accent">
        <span className="text-primary mr-2 ">02. </span> Project
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
