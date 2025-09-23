import React from "react";
import { Link } from "react-router-dom";
//clearimport './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center justify-start gap-x-4 p-4 bg-blue-600 text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/alumni">Alumni</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;