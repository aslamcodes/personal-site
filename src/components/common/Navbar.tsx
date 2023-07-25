// src/components/Navbar.js

import React, { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <nav className="text-amber-900 p-5 bg-white bg-opacity-70 backdrop-blur-md rounded-b-md shadow-md fixed top-0 left-0 right-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className=" font-bold text-xl">Mohamed Aslam</div>
          <div className="flex space-x-4">
            <a
              href="#home"
              className=" hover:text-gray-200 transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className=" hover:text-gray-200 transition duration-300"
            >
              About
            </a>
            <a
              href="#portfolio"
              className=" hover:text-gray-200 transition duration-300"
            >
              Portfolio
            </a>

            <a className=" hover:text-gray-200 transition duration-300">
              Blogs
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
