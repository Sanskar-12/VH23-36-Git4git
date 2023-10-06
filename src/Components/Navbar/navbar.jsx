<<<<<<< HEAD
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
=======
>>>>>>> ac5b43addfb00cb251f714359cc7949f1acebe2a
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const navbar = () => {
  return (
    <>
    <nav className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 ...">
        <div className="relative w-[1080px] mx-auto flex items-center justify-between ">

            
            <a href="/" className="cursor-pointer py-7 pr-7 flex space-x-4">
                <img
                src="./src/Assets/images/blockchainlogo.jpg"
                width="40px"
                height="20px"/>
                <p class="text-white font-bold mt-2 text-lg">Git4Git</p>
            </a>

            <ul class="flex space-x-6">
            <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group">
                <a href="#">Home</a>

                <div class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200" ></div>
                </li>
                <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group">
                <a href="#">About Us</a>

                <div class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200" ></div>
                </li>
                <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group">
                <a href="#">Technology</a>

                <div class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200" ></div>
                </li>

                <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group">
                <a href="#">Services</a>

                <div class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200" ></div>
                </li>
                
                <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group">
                <a href="#">Help</a>

                <div class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200" ></div>
                </li>
            </ul>

            <div class="flex space-x-6">
                <img
                    src="./src/Assets/images/india-flag.svg"
                    width="40px"
                     />
                <a href="https://github.com/Sanskar-12/VH23-36-Git4git" className="mt-2 text-2xl">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <button class="py-3 px-5 font-mullish text-white border-lightBlue border
                rounded-sm text-sm  font-bold">Log in</button>
                <button class="py-3 px-4 font-mullish rounded-sm text-sm font-bold
                bg-white text-lightBlue300 border transition-all duration-200
                hover:text-lightBlue500 flex">Sign Up
                </button>
            </div>


        </div>
    </nav>
    </>
  )
}

export default navbar