
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
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const InputSection = ({ onGenerateClip }: { onGenerateClip: (data: any) => void }) => {
  const [url, setUrl] = useState('');
  const [prompt, setPrompt] = useState('');
  const [duration, setDuration] = useState('1-5');
  const [language, setLanguage] = useState('english');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate URL
    if (!url) {
      toast.error("Please enter a valid URL");
      return;
    }

    if (!prompt) {
      toast.error("Please enter what content you're looking for");
      return;
    }
    
    // Check if duration requires a paid plan
    if (duration === '10-15' || duration === 'custom') {
      toast.info("This duration requires a paid plan", {
        description: "Please check our pricing page for more information.",
        action: {
          label: "View Pricing",
          onClick: () => navigate('/pricing')
        }
      });
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
    <div className="w-full glass-card p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4 text-white">Create Your Clip</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-1">
            URL
          </label>
          <Input
            id="url"
            placeholder="https://example.com/watch?v=..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full bg-black/50 border-gray-700 text-white"
          />
          <p className="text-xs text-gray-400 mt-1">
            Paste any URL from YouTube, Spotify, or other podcast platforms
          </p>
        </div>
        
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-1">
            What are you looking for?
          </label>
          <Textarea
            id="prompt"
            placeholder="E.g., Find a clip where they talk about artificial intelligence and its impact on jobs"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full resize-none bg-black/50 border-gray-700 text-white"
            rows={3}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-300 mb-1">
              Clip Duration
            </label>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger id="duration" className="w-full bg-black/50 border-gray-700 text-white">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1F2C] border border-gray-700 text-white">
                <SelectItem value="1-5">1-5 minutes</SelectItem>
                <SelectItem value="5-10">5-10 minutes</SelectItem>
                <SelectItem value="10-15">10-15 minutes (Pro)</SelectItem>
                <SelectItem value="custom">Custom Length (Pro)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-300 mb-1">
              Language
            </label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger id="language" className="w-full bg-black/50 border-gray-700 text-white">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1F2C] border border-gray-700 text-white">
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

        <div className="text-xs text-amber-400 bg-amber-950/30 p-3 rounded-lg flex items-start">
          <AlertCircle className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
          <span>
            Free tier allows up to 11 minutes of content. For longer clips and advanced features, 
            check our <a href="/pricing" className="text-primary underline">pricing plans</a>.
          </span>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/80 text-background font-medium py-2 rounded-full transition-colors"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
