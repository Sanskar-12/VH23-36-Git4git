
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

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
                <p className="text-white font-bold mt-2 text-lg">Git4Git</p>
            </a>

            <ul className="flex space-x-6">
            <li className="text-white font-mullish text-lg py-7 hover:text-pink cursor-pointer
                 transition-all duration-200 relative group">
                <a href="#">Home</a>

                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200" ></div>
                </li>
                <li className="text-white font-mullish text-lg py-7 hover:text-pink cursor-pointer
                 transition-all duration-200 relative group">
                <a href="#">About Us</a>

                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200" ></div>
                </li>
                <li className="text-white font-mullish text-lg py-7 hover:text-pink cursor-pointer
                 transition-all duration-200 relative group">
                <a href="#">Technology</a>

                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200" ></div>
                </li>

                <li className="text-white font-mullish text-lg py-7 hover:text-pink cursor-pointer
                 transition-all duration-200 relative group">
                <a href="#">Services</a>

                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200" ></div>
                </li>
                
                <li className="text-white font-mullish text-lg py-7 hover:text-pink cursor-pointer
                 transition-all duration-200 relative group">
                <a href="#">Help</a>

                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200" ></div>
                </li>
            </ul>

            <div className="flex space-x-6">
                <img

                    src="./src/Assets/images/india-flag.svg"
                    width="28px"
                    height="20px"
                    />
                   <div className='mt-2 text-2xl'>
                   <a href="https://github.com/Sanskar-12/VH23-36-Git4git"><FontAwesomeIcon icon={faGithub} /></a>
                   </div>

                <button className="py-3 px-5 font-mullish text-md text-white border-lightBlue hover:bg-wheat hover:text-deepBlue
                border rounded-sm  font-bold">Log in</button>
                <button className="py-3 px-4 font-mullish rounded-sm text-md font-bold

                bg-white text-lightBlue300 border transition-all duration-200
                hover:bg-deepBlue hover:text-wheat flex">Sign Up
                </button>
            </div>


        </div>
    </nav>
    </>
  )
}

export default navbar