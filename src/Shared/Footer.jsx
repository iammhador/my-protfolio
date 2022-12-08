import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-100 text-accent rounded">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            target="blank"
            href="https://www.facebook.com/iammhador"
            className="text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-secondary duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/iammhador/"
            className="text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-secondary duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            target="blank"
            href="https://github.com/iammhador"
            className="text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-secondary duration-300"
          >
            <FaGithub />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/iammhador/"
            className="text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-secondary duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by iammhador.</p>
      </div>
    </footer>
  );
};

export default Footer;
