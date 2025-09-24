import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const linkClasses = ({ isActive }) =>
    `block py-3 px-4 text-white hover:text-gray-200 font-medium transition-colors ${
      isActive ? "text-yellow-300" : ""
    }`; // Made block for mobile, added py-3 for touch target

  return (
    <nav className="bg-blue-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex-shrink-0 flex items-center">
            <HeaderLogo />
            <span className="text-white text-lg sm:text-xl font-bold ml-2 [max-width:320px]:text-base [max-width:320px]:truncate">
              Alumni Portal
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
              <NavLink to="/" className={linkClasses} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/college" className={linkClasses}>
                College
              </NavLink>
            </li>
            <li>
              <NavLink to="/students" className={linkClasses}>
                Students
              </NavLink>
            </li>
            <li>
              <NavLink to="/user" className={linkClasses}>
                User
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu backdrop (tap to close) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:hidden fixed top-0 left-0 w-full h-full bg-blue-600 z-50 transition-all duration-300 ease-in-out transform`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4 pt-16">
          <button
            onClick={closeMenu}
            className="text-white hover:text-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu links */}
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className={linkClasses}
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/college"
            className={linkClasses}
            onClick={closeMenu}
          >
            College
          </NavLink>
          <NavLink
            to="/students"
            className={linkClasses}
            onClick={closeMenu}
          >
            Students
          </NavLink>
          <NavLink
            to="/user"
            className={linkClasses}
            onClick={closeMenu}
          >
            User
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
