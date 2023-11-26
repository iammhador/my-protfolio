/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);

  return (
    <nav className="w-11/12 mx-auto border-b md:border-0 md:static bg-base-100 my-3">
      <div className="items-center px-4  mx-auto md:flex md:px-10 lg:px-0 ">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/" className="font-semibold text-lg">
            iammh<span className="text-primary">a</span>dor
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-secondary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0 my-10 lg:my-0">
            <li>
              <Link to="/" className="text-secondary hover:text-primary">
                Home
              </Link>
            </li>

            {/* <li>
              <Link to="/blog" className="text-secondary hover:text-primary">
                Blog
              </Link>
            </li> */}

            <li>
              <a href="#about" className="text-secondary hover:text-primary">
                About
              </a>
            </li>

            <li>
              <a
                href="#portfolio"
                className="text-secondary hover:text-primary"
              >
                Project
              </a>
            </li>

            <li>
              <a href="#contact" className="text-secondary hover:text-primary">
                Contact
              </a>
            </li>

            <li>
              <button className="text-accent hover:text-primary">
                <a
                  className="py-3 px-5 border border-secondary rounded text-secondary hover:bg-success"
                  href="https://drive.google.com/file/d/1SQe-AFSe54gc3WQtGDyMUGdw5SgIjXFD/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
