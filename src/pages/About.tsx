
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="fixed inset-0 opacity-10 pointer-events-none"></div>
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary animate-heartbeat">
            About PodBite
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Our mission is to make podcast content more accessible and shareable
          </p>
        </div>
        
        <div className="glass-card p-6 mb-12 max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Our Story</h2>
            <p className="text-gray-300 mb-4">
              PodBite was born out of a simple need: making long-form audio and video content more digestible and shareable in today's fast-paced digital world.
            </p>
            <p className="text-gray-300">
              As podcast consumers ourselves, we noticed that amazing insights and conversations were often buried in hours of content. 
              We built PodBite to solve this problem, using AI to help extract the most valuable moments from any podcast or video, 
              allowing creators and listeners to share these bite-sized moments across social media platforms.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">
              We believe in a world where knowledge and entertainment from podcasts and long-form content is more 
              accessible to everyone. Our goal is to build tools that help content creators reach wider audiences 
              and help consumers discover and share the content they love more easily.
            </p>
          </div>
        </div>
        
        <div className="glass-card p-6 mb-12 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-6 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-full glass-effect p-6 rounded-xl transition-all duration-300 hover:translate-y-[-5px] group">
                <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-4 overflow-hidden flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                  <span className="text-2xl text-primary font-bold group-hover:scale-110 transition-transform duration-300">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white text-center">Team Member</h3>
                <p className="text-primary mb-4 text-center">Position</p>
                <div className="flex justify-center">
                  <a 
                    href="https://x.com/podbite_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-black/30 rounded-full text-gray-400 hover:text-primary transition-colors hover:bg-black/50"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 512 512" 
                      width="18" 
                      height="18" 
                      fill="currentColor" 
                      className="fa-brands fa-x-twitter"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-card p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Join thousands of content creators using PodBite to share their best moments
          </p>
          <Button 
            className="bg-primary text-background hover:bg-primary/80 rounded-3xl hover:scale-105 transition-all duration-300"
            size="lg"
            asChild
          >
            <Link to="/">Try PodBite Now</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
