
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HelpPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0')] bg-cover bg-center opacity-10 pointer-events-none"></div>
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
            Help & Resources
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Learn how to get the most out of PodBite
          </p>
        </div>
        
        <div className="glass-card p-6 mb-12 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-6">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hover:translate-y-[-5px] transition-all duration-300">
              <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-medium text-white mb-2">Paste URL</h3>
              <p className="text-sm text-gray-400">
                Enter the link to your favorite podcast episode or video from any platform
              </p>
            </div>
            
            <div className="hover:translate-y-[-5px] transition-all duration-300">
              <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-medium text-white mb-2">Describe What You Want</h3>
              <p className="text-sm text-gray-400">
                Tell us what content you're looking for in natural language or use voice typing
              </p>
            </div>
            
            <div className="hover:translate-y-[-5px] transition-all duration-300">
              <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-medium text-white mb-2">Download & Share</h3>
              <p className="text-sm text-gray-400">
                Get your perfectly formatted clip ready for social media
              </p>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6 mb-12 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-800 pb-4 hover:bg-black/30 p-4 rounded-lg transition-all duration-300">
              <h3 className="font-medium text-white mb-2">What types of content can I use with PodBite?</h3>
              <p className="text-gray-400 text-sm">
                PodBite works with most podcast and video platforms, including YouTube, Spotify, Apple Podcasts, 
                SoundCloud, and more. Simply paste the URL, and we'll handle the rest.
              </p>
            </div>
            
            <div className="border-b border-gray-800 pb-4 hover:bg-black/30 p-4 rounded-lg transition-all duration-300">
              <h3 className="font-medium text-white mb-2">How accurate is the clip generation?</h3>
              <p className="text-gray-400 text-sm">
                PodBite uses advanced AI to find the most relevant moments based on your description. 
                While accuracy depends on the quality of the audio and the specificity of your request, 
                our technology continuously improves to deliver the best results.
              </p>
            </div>
            
            <div className="border-b border-gray-800 pb-4 hover:bg-black/30 p-4 rounded-lg transition-all duration-300">
              <h3 className="font-medium text-white mb-2">How long does it take to generate a clip?</h3>
              <p className="text-gray-400 text-sm">
                Most clips are generated within 1-3 minutes, depending on the length of the original content 
                and the complexity of your request.
              </p>
            </div>
            
            <div className="border-b border-gray-800 pb-4 hover:bg-black/30 p-4 rounded-lg transition-all duration-300">
              <h3 className="font-medium text-white mb-2">What formats can I download my clips in?</h3>
              <p className="text-gray-400 text-sm">
                You can download clips in standard MP4 format, optimized for different social media platforms, 
                including vertical (9:16), square (1:1), and horizontal (16:9) videos.
              </p>
            </div>
            
            <div className="border-b border-gray-800 pb-4 hover:bg-black/30 p-4 rounded-lg transition-all duration-300">
              <h3 className="font-medium text-white mb-2">How do I use the voice typing feature?</h3>
              <p className="text-gray-400 text-sm">
                Click the microphone icon next to the "What are you looking for?" field to activate voice typing. 
                Speak clearly into your microphone to describe the content you want, and the text will appear in the field automatically.
              </p>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6 text-center max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-4">Need More Help?</h2>
          <p className="text-gray-400 mb-6">
            Our support team is ready to assist you with any questions or issues
          </p>
          <Button 
            className="bg-primary text-background hover:bg-primary/80 rounded-full hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link to="/contact">
              Contact Support <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpPage;
