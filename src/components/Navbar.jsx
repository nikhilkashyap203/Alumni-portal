
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <HeaderLogo />
            <span className="text-white text-lg sm:text-xl font-bold ml-2">Alumni Portal</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex md:space-x-6">
            <li>
              <NavLink
                exact="true"
                to="/"
                className="text-white hover:text-gray-200 font-medium transition"
                activeClassName="text-yellow-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/college"
                className="text-white hover:text-gray-200 font-medium transition"
                activeClassName="text-yellow-300"
              >
                College
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/students"
                className="text-white hover:text-gray-200 font-medium transition"
                activeClassName="text-yellow-300"
              >
                Students
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user"
                className="text-white hover:text-gray-200 font-medium transition"
                activeClassName="text-yellow-300"
              >
                User
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              exact="true"
              to="/"
              className="block text-white hover:text-gray-200 font-medium transition py-2"
              activeClassName="text-yellow-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/college"
              className="block text-white hover:text-gray-200 font-medium transition py-2"
              activeClassName="text-yellow-300"
              onClick={() => setIsMenuOpen(false)}
            >
              College
            </NavLink>
            <NavLink
              to="/students"
              className="block text-white hover:text-gray-200 font-medium transition py-2"
              activeClassName="text-yellow-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Students
            </NavLink>
            <NavLink
              to="/user"
              className="block text-white hover:text-gray-200 font-medium transition py-2"
              activeClassName="text-yellow-300"
              onClick={() => setIsMenuOpen(false)}
            >
              User
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;