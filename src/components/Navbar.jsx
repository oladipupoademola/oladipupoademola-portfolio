import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // Close menu on mobile navigation
  };

  return (
    <div className="bg-[#00030C]">
      <nav className="container mx-auto flex items-center justify-between p-5 relative">
        {/* Logo / Brand */}
        <div
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={() => handleNavigate("/home")}
        >
          DML
        </div>

        {/* Hamburger button - visible only on mobile */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Menu links */}
        <ul
          className={`
            md:flex md:items-center md:gap-6
            absolute md:static bg-[#00030C] w-full md:w-auto left-0 top-full md:top-auto
            transition-max-height duration-300 ease-in-out overflow-hidden
            ${isOpen ? "max-h-60 py-4" : "max-h-0"}
          `}
        >
          <li>
            <button
              className="block w-full text-left text-[#F9F9F9] font-semibold px-4 py-2 hover:text-[#FF5B02]"
              onClick={() => handleNavigate("/home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="block w-full text-left text-[#888888] px-4 py-2 hover:text-[#FF5B02]"
              onClick={() => handleNavigate("/contact")}
            >
              Contact Me
            </button>
          </li>
          <li>
            <button
              className="block w-full text-left text-[#888888] px-4 py-2 hover:text-[#FF5B02]"
              onClick={() => handleNavigate("/projects")}
            >
              Projects
            </button>
          </li>
          {/* Contact button inside menu on mobile */}
          <li className="md:hidden px-4 py-2">
            <button
              className="w-full bg-[#E2E2E4] text-[#00030C] rounded-full h-10"
              onClick={() => handleNavigate("/contact")}
            >
              Contact Me
            </button>
          </li>
        </ul>

        {/* Contact button visible only on desktop */}
        <div className="hidden md:block">
          <button
            className="text-[#00030C] bg-[#E2E2E4] w-32 h-10 rounded-full"
            onClick={() => handleNavigate("/contact")}
          >
            Contact Me
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
