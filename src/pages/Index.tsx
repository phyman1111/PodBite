
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
    <div className="min-h-screen flex flex-col bg-black">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0')] bg-cover bg-center opacity-5 pointer-events-none"></div>
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
            Curated conversations, just for you.
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <InputSection onGenerateClip={handleGenerateClip} />
          <VideoPreview clipData={clipData} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
