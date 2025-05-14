
import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-5 mt-6 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div>
            <h3 className="text-lg font-medium text-white">PodBite</h3>
            <p className="text-sm text-gray-400">Transform content into bite-sized clips</p>
          </div>
          
          <div className="flex space-x-6 items-center">
            <div className="flex space-x-4">
              <a 
                href="https://x.com/podbite_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform inline-block"
              >
                <X size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
