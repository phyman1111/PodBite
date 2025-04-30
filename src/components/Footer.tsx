
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-12 glass-effect">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium text-white mb-4">PodBite</h3>
            <p className="text-sm text-gray-400 mb-4">
              Transform hours of podcast content into bite-sized video clips ready for social media sharing.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/hridaykadam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/hridaykadam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pricing" className="text-sm text-gray-400 hover:text-primary">Pricing</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-primary">About</Link>
              </li>
              <li>
                <Link to="/help" className="text-sm text-gray-400 hover:text-primary">Help</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-gray-400 hover:text-primary">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-400 hover:text-primary">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PodBite. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2 md:mt-0">
            Made with ♥ for content creators
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
