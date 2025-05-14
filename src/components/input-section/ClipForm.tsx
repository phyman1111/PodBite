
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { AlertCircle } from 'lucide-react';
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
import DurationSelector from './DurationSelector';

interface ClipFormProps {
  onGenerateClip: (data: any) => void;
}

const ClipForm: React.FC<ClipFormProps> = ({ onGenerateClip }) => {
  const [url, setUrl] = useState('');
  const [prompt, setPrompt] = useState('');
  const [duration, setDuration] = useState('5');
  const [language, setLanguage] = useState('english');
  const [isLoading, setIsLoading] = useState(false);
  const [customDuration, setCustomDuration] = useState('');
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
    
    // Check if duration requires a login
    const durationValue = duration === 'custom' ? parseInt(customDuration) : parseInt(duration);
    
    if (durationValue > 11) {
      toast.info("This duration requires you to login", {
        description: "Please login to use clips longer than 11 minutes.",
        action: {
          label: "Login",
          onClick: () => navigate('/login')
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
        duration: duration === 'custom' ? customDuration : duration,
        language
      };
      
      onGenerateClip(clipData);
      setIsLoading(false);
      toast.success("Clip generated successfully!");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-1">
          URL
        </label>
        <Input
          id="url"
          placeholder="https://example.com/podcast/..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full bg-black/50 border-gray-700 text-white focus:ring-primary focus:border-primary transition-all"
        />
        <p className="text-xs text-gray-400 mt-1">
          Paste any URL from podcasts, videos, or audio content
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
          className="w-full resize-none bg-black/50 border-gray-700 text-white focus:ring-primary focus:border-primary transition-all"
          rows={3}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DurationSelector 
          duration={duration} 
          setDuration={setDuration}
          customDuration={customDuration}
          setCustomDuration={setCustomDuration}
        />
        
        <div>
          <label htmlFor="language" className="block text-sm font-medium text-gray-300 mb-1">
            Language
          </label>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger id="language" className="w-full bg-black/50 border-gray-700 text-white">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1F2C] border border-gray-700 text-white max-h-[300px]">
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="spanish">Spanish (Español)</SelectItem>
              <SelectItem value="french">French (Français)</SelectItem>
              <SelectItem value="german">German (Deutsch)</SelectItem>
              <SelectItem value="chinese">Chinese (中文)</SelectItem>
              <SelectItem value="japanese">Japanese (日本語)</SelectItem>
              <SelectItem value="korean">Korean (한국어)</SelectItem>
              <SelectItem value="russian">Russian (Русский)</SelectItem>
              <SelectItem value="portuguese">Portuguese (Português)</SelectItem>
              <SelectItem value="italian">Italian (Italiano)</SelectItem>
              <SelectItem value="dutch">Dutch (Nederlands)</SelectItem>
              <SelectItem value="arabic">Arabic (العربية)</SelectItem>
              <SelectItem value="hindi">Hindi (हिन्दी)</SelectItem>
              <SelectItem value="turkish">Turkish (Türkçe)</SelectItem>
              <SelectItem value="polish">Polish (Polski)</SelectItem>
              <SelectItem value="swedish">Swedish (Svenska)</SelectItem>
              <SelectItem value="vietnamese">Vietnamese (Tiếng Việt)</SelectItem>
              <SelectItem value="thai">Thai (ไทย)</SelectItem>
              <SelectItem value="indonesian">Indonesian (Bahasa Indonesia)</SelectItem>
              <SelectItem value="greek">Greek (Ελληνικά)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="text-xs text-amber-400 bg-amber-950/30 p-3 rounded-lg flex items-start">
        <AlertCircle className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
        <span>
          Free access allows up to 11 minutes of content. For longer clips, 
          please <a href="/login" className="text-primary underline">login</a>.
        </span>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/80 text-background font-medium py-2 rounded-full transition-all duration-300 hover:scale-105 btn-glow"
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
  );
};

export default ClipForm;
