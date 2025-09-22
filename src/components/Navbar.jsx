import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <span className="text-white text-xl font-bold">Alumni Portal</span>
        </div>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              exact
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
              to="/dashboard"
              className="text-white hover:text-gray-200 font-medium transition"
              activeClassName="text-yellow-300"
            >
              Dashboard
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
    </div>
  </nav>
);

export default Navbar;
