
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full py-4 glass-effect sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link to="/" className="flex items-center group">
          <div className="flex items-center transition-transform duration-300 group-hover:scale-105">
            <h1 className="text-2xl font-bold">
              Pod<span className="text-primary">Bite</span>
            </h1>
          </div>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/about" className="story-link text-gray-300 hover:text-primary transition-all duration-300">About</Link>
          <Link to="/help" className="story-link text-gray-300 hover:text-primary transition-all duration-300">Help</Link>
        </nav>
        
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/20">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="glass-effect border-none">
              <div className="flex flex-col space-y-6 mt-8">
                <Link to="/about" className="text-gray-300 hover:text-primary text-lg py-2 transition-colors duration-300 flex items-center space-x-2 hover:translate-x-1 transition-transform">
                  <span>About</span>
                </Link>
                <Link to="/help" className="text-gray-300 hover:text-primary text-lg py-2 transition-colors duration-300 flex items-center space-x-2 hover:translate-x-1 transition-transform">
                  <span>Help</span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
