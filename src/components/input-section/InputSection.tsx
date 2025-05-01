
import React, { useState } from 'react';
import ClipForm from './ClipForm';
import ClipPreview from './ClipPreview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface InputSectionProps {
  onGenerateClip: (data: any) => void;
  clipData?: any;
}

const InputSection: React.FC<InputSectionProps> = ({ onGenerateClip, clipData }) => {
  return (
    <div className="w-full glass-card p-6 animate-fade-in">
      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6 bg-black/50 rounded-full">
          <TabsTrigger value="create" className="data-[state=active]:bg-primary data-[state=active]:text-background rounded-full hover:scale-105 transition-all duration-300">Create Clip</TabsTrigger>
          <TabsTrigger value="preview" className="data-[state=active]:bg-primary data-[state=active]:text-background rounded-full hover:scale-105 transition-all duration-300">Preview</TabsTrigger>
        </TabsList>
        
        <TabsContent value="create" className="space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-white">Create Your Clip</h2>
          <ClipForm onGenerateClip={onGenerateClip} />
        </TabsContent>
        
        <TabsContent value="preview" className="space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-white">Your Clip</h2>
          <ClipPreview clipData={clipData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InputSection;
