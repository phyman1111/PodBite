
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";

const ContactPage = () => {
  const redirectToTwitter = () => {
    window.open('https://x.com/podbite_', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
            Contact Us
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Get in touch with our team
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <Card className="glass-card p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center text-primary mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512" 
                width="48" 
                height="48" 
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Connect on X</h2>
            <p className="text-gray-400 mb-6">
              Follow us or send us a direct message on X for the fastest response
            </p>
            <Button 
              className="bg-primary text-background hover:bg-primary/80 rounded-3xl"
              onClick={redirectToTwitter}
            >
              <X className="mr-2 h-4 w-4" />
              Message on X
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Card>
          
          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Support Availability</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <span className="text-primary text-2xl font-semibold">Available 24/7</span>
              </div>
              <div className="bg-primary/10 p-4 rounded-xl text-center">
                <p className="text-white">We're always here to help!</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 mb-1">Typical response time:</p>
              <p className="text-white">Within 24 hours</p>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
