
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-8 glass-effect">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="flex items-center mb-2">
              <h3 className="text-lg font-medium text-white">PodBite</h3>
              <span className="ml-2 text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full">Beta</span>
            </div>
            <p className="text-sm text-gray-400">
              Transform hours of content into bite-sized clips ready for sharing.
            </p>
          </div>
          
          <div className="flex space-x-6 items-center">
            <Link to="/terms" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">Terms</Link>
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">Privacy</Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">Contact</Link>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/hridaykadam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform inline-block"
              >
                <X size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/hridaykadam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform inline-block"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
