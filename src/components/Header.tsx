
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-podbite-blue">
            Pod<span className="text-podbite-dark">Bite</span>
          </h1>
          <span className="ml-2 text-xs px-2 py-0.5 bg-podbite-light-blue text-podbite-blue rounded-full">
            Beta
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-podbite-blue">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-podbite-blue">About</a>
          <a href="#" className="text-gray-600 hover:text-podbite-blue">Help</a>
        </nav>
        
        <Button
          variant="outline"
          className="border-podbite-blue text-podbite-blue hover:bg-podbite-blue hover:text-white transition-colors"
        >
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
