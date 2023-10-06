import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className=" text-deepBlue py-4  bg-white">
      {/* Main Section */}
      <div className="flex flex-col justify-between items-center my-8">
        {/* First line */}
        <div className="flex flex-row space-x-6 text-deepBlue font-bold">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Technology</a>
          <a href="">Services</a>
          <a href="">Help</a>
        </div>
        <div className="space-x-3 text-2xl my-4">
          <FontAwesomeIcon icon={faFacebook} /> {/* Use the imported faFacebook icon */}
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <div class="">
            <p>@ 2023 Git4Git, Inc All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
