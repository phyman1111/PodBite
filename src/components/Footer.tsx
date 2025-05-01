
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-8 glass-effect">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-white mb-3">PodBite</h3>
            <p className="text-sm text-gray-400 mb-4">
              Transform hours of content into bite-sized clips ready for sharing.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/hridaykadam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform inline-block"
              >
                <Twitter size={20} />
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
          
          <div className="flex justify-start md:justify-end">
            <div>
              <h3 className="text-lg font-medium text-white mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/terms" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PodBite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
