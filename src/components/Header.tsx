
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Mic } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 glass-effect sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <Mic className="w-6 h-6 text-primary mr-1" />
            <h1 className="text-2xl font-bold">
              Pod<span className="text-primary">Bite</span>
            </h1>
            <span className="ml-2 text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full">
              Beta
            </span>
          </div>
        </Link>
        
        <nav className="hidden md:flex space-x-4">
          <Link to="/pricing" className="text-gray-300 hover:text-primary">Pricing</Link>
          <Link to="/about" className="text-gray-300 hover:text-primary">About</Link>
          <Link to="/help" className="text-gray-300 hover:text-primary">Help</Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="border-primary text-primary hidden md:flex hover:bg-primary hover:text-background rounded-full transition-colors"
            asChild
          >
            <Link to="/login">Login</Link>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="glass-effect">
              <div className="flex flex-col space-y-4 mt-8">
                <Link to="/pricing" className="text-gray-300 hover:text-primary text-lg py-2">Pricing</Link>
                <Link to="/about" className="text-gray-300 hover:text-primary text-lg py-2">About</Link>
                <Link to="/help" className="text-gray-300 hover:text-primary text-lg py-2">Help</Link>
                <Link to="/login" className="text-gray-300 hover:text-primary text-lg py-2">Login</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
