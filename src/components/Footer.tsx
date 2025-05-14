
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-5 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center">
            <img 
              src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/f4a6496a18fa65420937d2709390e6314d613420_image.png" 
              alt="PodBite Logo" 
              className="h-6 mr-2" 
            />
            <div>
              <h3 className="text-lg font-medium text-white">Pod<span className="text-primary">Bite</span></h3>
              <p className="text-sm text-gray-400">Transform content into bite-sized clips</p>
            </div>
          </div>
          
          <div>
            <a 
              href="https://x.com/podbite_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform inline-block"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512" 
                width="20" 
                height="20" 
                fill="currentColor" 
                className="fa-brands fa-x-twitter"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
