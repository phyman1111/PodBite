
import React, { useState } from 'react';
import Header from "@/components/Header";
import InputSection from "@/components/InputSection";
import VideoPreview from "@/components/VideoPreview";
import Footer from "@/components/Footer";

const Index = () => {
  const [clipData, setClipData] = useState<any>(null);

  const handleGenerateClip = (data: any) => {
    setClipData(data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-podbite-dark mb-3">
            Create Perfect Podcast Clips
          </h1>
          <p className="text-podbite-gray max-w-xl mx-auto">
            Turn long-form podcasts into bite-sized video clips ready for social media sharing
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <InputSection onGenerateClip={handleGenerateClip} />
          <VideoPreview clipData={clipData} />
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2 text-podbite-dark">How It Works</h2>
            <p className="text-podbite-gray mb-8 max-w-2xl mx-auto">
              Transform hours of podcast content into shareable clips in just three easy steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-podbite-light-blue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-podbite-blue font-bold text-xl">1</span>
              </div>
              <h3 className="font-medium mb-2">Paste YouTube URL</h3>
              <p className="text-sm text-podbite-gray">
                Enter the link to your favorite podcast episode on YouTube
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-podbite-light-blue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-podbite-blue font-bold text-xl">2</span>
              </div>
              <h3 className="font-medium mb-2">Describe What You Want</h3>
              <p className="text-sm text-podbite-gray">
                Tell us what content you're looking for in natural language
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-podbite-light-blue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-podbite-blue font-bold text-xl">3</span>
              </div>
              <h3 className="font-medium mb-2">Download & Share</h3>
              <p className="text-sm text-podbite-gray">
                Get your perfectly formatted clip ready for social media
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
