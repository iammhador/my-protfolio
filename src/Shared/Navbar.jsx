import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);

  return (
    <nav className="w-11/12 mx-auto border-b md:border-0 md:static bg-base-100 my-3">
      <div className="items-center px-4  mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/">iammhador</Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                  className="h-6 w-6"
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
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-accent hover:text-primary"
                }
              >
                <span className="text-primary">00.</span> Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-accent hover:text-primary"
                }
              >
                <span className="text-primary">01.</span> About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-accent hover:text-primary"
                }
              >
                <span className="text-primary">02.</span> Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-accent hover:text-primary"
                }
              >
                <span className="text-primary">03.</span> Contact
              </NavLink>
            </li>

            <li>
              <button className="text-accent hover:text-primary">
                <a
                  className="py-3 px-5 border border-primary rounded text-primary hover:bg-success"
                  href="/src/Assets/iammhador-resume.pdf"
                  download
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
