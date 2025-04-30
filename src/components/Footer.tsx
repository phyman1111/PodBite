
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-12 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-podbite-gray">
              &copy; {new Date().getFullYear()} PodBite. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-podbite-gray hover:text-podbite-blue">Terms</a>
            <a href="#" className="text-sm text-podbite-gray hover:text-podbite-blue">Privacy</a>
            <a href="#" className="text-sm text-podbite-gray hover:text-podbite-blue">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
