<<<<<<< HEAD
<<<<<<< HEAD

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
=======
=======

>>>>>>> eb3536f1de1af371f62ee31ec3ca41b2a52a1ea0
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
<<<<<<< HEAD
>>>>>>> 6df1bf2c4dd7f4a1724634a19ce2fca344ded7b5
=======

>>>>>>> eb3536f1de1af371f62ee31ec3ca41b2a52a1ea0

// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 ...">
        <div className="relative w-[1080px] mx-auto flex items-center justify-between ">
          <Link to="/home" className="cursor-pointer py-7 pr-7 flex space-x-4">
            <img
              src="./src/Assets/images/blockchainlogo.jpg"
              width="40px"
              height="20px"
            />
            <p className="text-white font-bold mt-2 text-lg">Git4Git</p>
          </Link>

          <ul className="flex space-x-6">
            <li
              className="text-white font-mullish text-lg py-7 hover:text-pink cursor-pointer
                 transition-all duration-200 relative group"
            >
              <Link to="/home">Home</Link>

              <div
                className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200"
              ></div>
            </li>
            <li
              className="text-white font-mullish text-lg py-7 hover:text-pink cursor-pointer
                 transition-all duration-200 relative group"
            >
              <Link to="/about">About Us</Link>

              <div
                className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200"
              ></div>
            </li>
            <li
              className="text-white font-mullish text-lg py-7 hover:text-pink cursor-pointer
                 transition-all duration-200 relative group"
            >
              <Link to="/technology">Technology</Link>

              <div
                className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200"
              ></div>
            </li>

            <li
              className="text-white font-mullish text-lg py-7 hover:text-pink cursor-pointer
                 transition-all duration-200 relative group"
            >
              <Link to="services">Services</Link>

              <div
                className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200"
              ></div>
            </li>

            <li
              className="text-white font-mullish text-lg py-7 hover:text-pink cursor-pointer
                 transition-all duration-200 relative group"
            >
              <Link to="/help">Help</Link>

              <div
                className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200"
              ></div>
            </li>
          </ul>

          <div className="flex space-x-6">
            <img
              src="./src/Assets/images/india-flag.svg"
              width="28px"
              height="20px"
            />
            <div className="mt-2 text-2xl">
              <a href="https://github.com/Sanskar-12/VH23-36-Git4git">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <Link to={"/login"}>
              <button
                className="py-3 px-5 font-mullish text-md text-white border-lightBlue hover:bg-white hover:text-deepBlue
                border rounded-sm  font-bold"
              >
                Log in
              </button>
            </Link>

            <Link to={"/register"}>
              <button
                className="py-3 px-4 font-mullish rounded-sm text-md font-bold

                bg-white text-lightBlue300 border transition-all duration-200
                hover:bg-deepBlue hover:text-white flex"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
