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
            href="https://www.facebook.com/iammhador"
            className="text-2xl hover:text-secondary"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/iammhador/"
            className="text-2xl hover:text-secondary"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/iammhador"
            className="text-2xl hover:text-secondary"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/iammhador/"
            className="text-2xl hover:text-secondary"
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
