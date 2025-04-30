
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0')] bg-cover bg-center opacity-10 pointer-events-none"></div>
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
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
        
        <div className="glass-card p-6 mb-12 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-6 text-center">Meet Our Team</h2>
          
          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-black/40 border border-gray-800 rounded-xl overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gray-800 mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/public/lovable-uploads/e52bd2a2-bdb1-4e4d-b690-9dfc8c958d1a.png" 
                    alt="Hriday Kadam" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">Hriday Kadam</h3>
                <p className="text-primary mb-4">Founder & CEO</p>
                <p className="text-gray-400 text-sm mb-4">
                  Passionate about making content more accessible and helping creators reach wider audiences.
                </p>
                <div className="flex justify-center space-x-3">
                  <a 
                    href="https://www.linkedin.com/in/hridaykadam/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-black/30 rounded-full text-gray-400 hover:text-primary transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://x.com/hridaykadam" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-black/30 rounded-full text-gray-400 hover:text-primary transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Join thousands of content creators using PodBite to share their best moments
          </p>
          <Button 
            className="bg-primary text-background hover:bg-primary/80 rounded-full"
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
