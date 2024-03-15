"use client";
import logo from "@/assets/images/logos/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="border-gray-200 md:px-24 md:pt-12 p-6">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={logo} className="w-[120px]" alt="Logo" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button className="md:block hidden  items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* my main interactive button in below */}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            open
              ? `
          items-center justify-between  w-full md:flex md:w-auto md:order-1
          `
              : `items-center justify-between hidden w-full md:flex md:w-auto md:order-1`
          }
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link
                href="/about-us"
                className="block py-2 px-3 md:p-0 text-whiterounded md:bg-transparent hover:text-darkBlue "
                aria-current="page"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/what-we-do"
                className="block py-2 px-3 md:p-0 hover:text-darkBlue rounded hover:bg-gray-100 md:hover:bg-transparent  "
              >
                What We do
              </Link>
            </li>
            <li>
              <Link
                href="/our-work"
                className="block py-2 px-3 md:p-0 hover:text-darkBlue rounded hover:bg-gray-100 md:hover:bg-transparent  "
              >
                Our work
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-2 px-3 md:p-0 hover:text-darkBlue rounded hover:bg-gray-100 md:hover:bg-transparent  "
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/say-hi"
                className="block py-2 px-3 md:p-0 hover:text-darkBlue rounded hover:bg-gray-100 md:hover:bg-transparent  "
              >
                Say hi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;