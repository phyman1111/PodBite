
import React, { useState } from 'react';
import Header from "@/components/Header";
import InputSection from "@/components/input-section";
import Footer from "@/components/Footer";

const Index = () => {
  const [clipData, setClipData] = useState<any>(null);

  const handleGenerateClip = (data: any) => {
    setClipData(data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0')] bg-cover bg-center opacity-5 pointer-events-none"></div>
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 relative z-10 flex flex-col items-center justify-center">
        <div className="text-center mb-10 md:mb-12 animate-fade-in max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary text-shimmer">
            Curated conversations, just for you.
          </h1>
          <p className="text-gray-300 mb-6">
            Transform long podcasts into shareable clips with PodBite's AI technology
          </p>
        </div>
        
        <div className="w-full max-w-3xl">
          <InputSection onGenerateClip={handleGenerateClip} clipData={clipData} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
