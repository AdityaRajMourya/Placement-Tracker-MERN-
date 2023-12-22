import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white bg-white p-4 bg-white bg-opacity-25 p-6 rounded-md backdrop-filter backdrop-blur-md shadow-lg text-white p-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <p className="text-2xl font-bold">Placement Tracker</p>
          <p className="mt-2">Your go-to platform for tracking placement activities.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-lg font-semibold">Follow Us</p>
          <div className="flex space-x-4">
            <a href="www.facebook.com" className="text-white-500 hover:text-gray-700" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="www.twitter.com" className="text-white-400 hover:text-gray-600" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="www.linkedin.com" className="text-white-800 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-lg font-semibold">Contact Us</p>
          <p>Email: info@placementtrackerapp.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm">&copy; 2023 Placement Tracker App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
