
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const InputSection = ({ onGenerateClip }: { onGenerateClip: (data: any) => void }) => {
  const [url, setUrl] = useState('');
  const [prompt, setPrompt] = useState('');
  const [duration, setDuration] = useState('1-5');
  const [language, setLanguage] = useState('english');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate YouTube URL
    if (!url || !url.includes('youtube.com') && !url.includes('youtu.be')) {
      toast.error("Please enter a valid YouTube URL");
      return;
    }

    if (!prompt) {
      toast.error("Please enter what content you're looking for");
      return;
    }

    setIsLoading(true);

    // Simulate processing time
    setTimeout(() => {
      const clipData = {
        url,
        prompt,
        duration,
        language
      };
      
      onGenerateClip(clipData);
      setIsLoading(false);
      toast.success("Clip generated successfully!");
    }, 2000);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4 text-podbite-dark">Create Your Clip</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="youtube-url" className="block text-sm font-medium text-gray-700 mb-1">
            YouTube URL
          </label>
          <Input
            id="youtube-url"
            placeholder="https://www.youtube.com/watch?v=..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
            What are you looking for?
          </label>
          <Textarea
            id="prompt"
            placeholder="E.g., Find a clip where they talk about artificial intelligence and its impact on jobs"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full resize-none"
            rows={3}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
              Clip Duration
            </label>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger id="duration" className="w-full">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-5">1-5 minutes</SelectItem>
                <SelectItem value="5-10">5-10 minutes</SelectItem>
                <SelectItem value="10-15">10-15 minutes</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger id="language" className="w-full">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="german">German</SelectItem>
                <SelectItem value="chinese">Chinese</SelectItem>
                <SelectItem value="japanese">Japanese</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-podbite-blue hover:bg-blue-500 text-white font-medium py-2 rounded-md transition-colors"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating Clip...
            </>
          ) : "Generate Clip"}
        </Button>
      </form>
    </div>
  );
};

export default InputSection;
