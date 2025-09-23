import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-3 sm:py-4 mt-auto border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Logo/Brand */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white hover:text-gray-300">
              MyProject
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">
              Your go-to platform for alumni and student management.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Pages</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors hover:underline text-blue-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors hover:underline text-blue-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-3 pt-3 text-center">
          <p className="text-xs sm:text-sm text-gray-400">&copy; {currentYear} MyProject. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;