
import React, { useState } from 'react';
import Header from "@/components/Header";
import InputSection from "@/components/InputSection";
import VideoPreview from "@/components/VideoPreview";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Index = () => {
  const [clipData, setClipData] = useState<any>(null);

  const handleGenerateClip = (data: any) => {
    setClipData(data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0')] bg-cover bg-center opacity-10 pointer-events-none"></div>
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
            Create Perfect Podcast Clips
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Turn long-form content into bite-sized video clips ready for social media sharing
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <InputSection onGenerateClip={handleGenerateClip} />
          <VideoPreview clipData={clipData} />
        </div>
        
        <div className="glass-card p-6 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-white">Featured Content</h2>
            <p className="text-gray-400">
              See how creators are using PodBite to share their best moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-black/40 border border-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-video bg-black/60"></div>
                <div className="p-4">
                  <h3 className="font-medium text-white mb-1">Featured Clip #{item}</h3>
                  <p className="text-sm text-gray-400">Example podcast clip created with PodBite</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              className="bg-primary text-background hover:bg-primary/80 rounded-full"
              asChild
            >
              <Link to="/pricing">
                Get Started <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
