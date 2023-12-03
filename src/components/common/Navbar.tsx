"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="text-amber-900 p-5 bg-white bg-opacity-70 backdrop-blur-md rounded-b-md shadow-md fixed z-50 top-0 left-0 right-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="font-bold text-xl mb-4 md:mb-0">Mohamed Aslam</div>
          <div className="md:flex  space-x-2 md:space-x-4">
            {path === "/" ? (
              <>
                <a href="#home" className="hover:text-gray-200 duration-300">
                  Home
                </a>
                <a href="#about" className="hover:text-gray-200 duration-300">
                  About
                </a>
                <a
                  href="#timeline"
                  className="hover:text-gray-200 duration-300"
                >
                  Timeline
                </a>
              </>
            ) : (
              <Link href="/">Home</Link>
            )}
            {/* <Link
              href="/portfolio"
              className="hover:text-gray-200 duration-300"
            >
              Portfolio
            </Link> */}
            {/* <Link href="/blogs" className="hover:text-gray-200 duration-300">
              Blogs
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
