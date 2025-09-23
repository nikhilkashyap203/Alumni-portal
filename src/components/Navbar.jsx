import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <span className="text-white text-xl font-bold">Alumni Portal</span>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-200 font-medium transition">Home</Link>
          </li>
          <li>
            <Link to="/college" className="text-white hover:text-gray-200 font-medium transition">College</Link>
          </li>
          <li>
            <Link to="/students" className="text-white hover:text-gray-200 font-medium transition">Students</Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-white hover:text-gray-200 font-medium transition">Dashboard</Link>
          </li>
          <li>
            <Link to="/user" className="text-white hover:text-gray-200 font-medium transition">User</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;