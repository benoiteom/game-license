import React from "react";
import Link from "next/link";
// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-white text-md font-bold leading-relaxed inline-block mr-4 py-3 whitespace-nowrap uppercase"
                href="#pablo"
              >
                GameLicense
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-black lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link href="/add-game">
                <li className="flex cursor-pointer items-center text-gray-100 hover:text-gray-200 px-4 py-4 lg:py-2 text-sm uppercase font-bold">
                  Add a Game
                </li>
              </Link>
              <li className="flex items-center">
                <Link href='/about'>
                  <button
                    className="bg-blueGray-700 text-gray-100 active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Donate
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
