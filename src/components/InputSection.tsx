
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
import { AlertCircle, Play, Download, Share, Instagram, Twitter, Youtube } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface InputSectionProps {
  onGenerateClip: (data: any) => void;
  clipData?: any;
}

const InputSection: React.FC<InputSectionProps> = ({ onGenerateClip, clipData }) => {
  const [url, setUrl] = useState('');
  const [prompt, setPrompt] = useState('');
  const [duration, setDuration] = useState('1-5');
  const [language, setLanguage] = useState('english');
  const [isLoading, setIsLoading] = useState(false);
  const [aspectRatio, setAspectRatio] = useState("16:9");
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
    
    // Check if duration requires a paid plan
    if (duration === '10-15' || duration === 'custom') {
      if (duration !== 'custom') {
        toast.info("This duration requires a paid plan", {
          description: "Please check our pricing page for more information.",
          action: {
            label: "View Pricing",
            onClick: () => navigate('/pricing')
          }
        });
        return;
      }
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
    <div className="w-full glass-card p-6 animate-fade-in">
      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6 bg-black/50 rounded-full">
          <TabsTrigger value="create" className="data-[state=active]:bg-primary data-[state=active]:text-background rounded-full hover:scale-105 transition-all duration-300">Create Clip</TabsTrigger>
          <TabsTrigger value="preview" className="data-[state=active]:bg-primary data-[state=active]:text-background rounded-full hover:scale-105 transition-all duration-300">Preview</TabsTrigger>
        </TabsList>
        
        <TabsContent value="create" className="space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-white">Create Your Clip</h2>
          
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
                
                {duration === 'custom' && (
                  <div className="mt-2">
                    <Input
                      type="number"
                      placeholder="Enter minutes (max 30)"
                      value={customDuration}
                      onChange={(e) => setCustomDuration(e.target.value)}
                      className="w-full bg-black/50 border-gray-700 text-white focus:ring-primary focus:border-primary transition-all"
                      min="1"
                      max="30"
                    />
                  </div>
                )}
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
        </TabsContent>
        
        <TabsContent value="preview" className="space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-white">Your Clip</h2>
          
          {!clipData ? (
            <div className="w-full flex flex-col items-center justify-center min-h-[300px] bg-black/30 rounded-xl border border-gray-800">
              <div className="text-center space-y-4">
                <div className="bg-primary/20 p-4 rounded-full inline-flex items-center justify-center">
                  <Play className="w-10 h-10 text-primary animate-pulse-soft" />
                </div>
                <p className="text-gray-400">Generate a clip to see the preview</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="mb-4">
                <div className="grid grid-cols-3 gap-2">
                  <Button 
                    variant={aspectRatio === "16:9" ? "default" : "outline"} 
                    size="sm" 
                    onClick={() => setAspectRatio("16:9")}
                    className={aspectRatio === "16:9" ? "bg-primary text-background hover:bg-primary/80 rounded-full" : "border-gray-700 text-gray-300 rounded-full"}
                  >
                    16:9
                  </Button>
                  <Button 
                    variant={aspectRatio === "9:16" ? "default" : "outline"}
                    size="sm" 
                    onClick={() => setAspectRatio("9:16")}
                    className={aspectRatio === "9:16" ? "bg-primary text-background hover:bg-primary/80 rounded-full" : "border-gray-700 text-gray-300 rounded-full"}
                  >
                    9:16
                  </Button>
                  <Button 
                    variant={aspectRatio === "1:1" ? "default" : "outline"}
                    size="sm" 
                    onClick={() => setAspectRatio("1:1")}
                    className={aspectRatio === "1:1" ? "bg-primary text-background hover:bg-primary/80 rounded-full" : "border-gray-700 text-gray-300 rounded-full"}
                  >
                    1:1
                  </Button>
                </div>
              </div>

              <div className={`relative w-full ${aspectRatio === "9:16" ? "max-w-[400px] mx-auto" : ""}`}>
                {aspectRatio === "16:9" && (
                  <AspectRatio ratio={16/9} className="bg-black/60 rounded-xl overflow-hidden border border-gray-800">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-pulse-soft">
                          <Play className="w-16 h-16 text-primary mx-auto" />
                        </div>
                      </div>
                    </div>
                  </AspectRatio>
                )}
                
                {aspectRatio === "9:16" && (
                  <AspectRatio ratio={9/16} className="bg-black/60 rounded-xl overflow-hidden border border-gray-800">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-pulse-soft">
                          <Play className="w-16 h-16 text-primary mx-auto" />
                        </div>
                      </div>
                    </div>
                  </AspectRatio>
                )}
                
                {aspectRatio === "1:1" && (
                  <AspectRatio ratio={1/1} className="bg-black/60 rounded-xl overflow-hidden border border-gray-800">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-pulse-soft">
                          <Play className="w-16 h-16 text-primary mx-auto" />
                        </div>
                      </div>
                    </div>
                  </AspectRatio>
                )}
              </div>
              
              <div className="pt-4">
                <h3 className="font-medium text-sm text-gray-400 mb-2">From Your Prompt:</h3>
                <p className="text-white italic">{clipData.prompt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                    {clipData.duration} minutes
                  </span>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                    {clipData.language}
                  </span>
                </div>
              </div>
              
              <div className="pt-4 space-y-4">
                <h3 className="font-medium text-sm text-white mb-2">Export & Share</h3>
                <div className="flex flex-wrap gap-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="rounded-full w-12 h-12 border-gray-700 hover:bg-primary/20 text-white hover:scale-110 transition-all duration-300" 
                          onClick={() => {
                            toast.info("Premium feature", {
                              description: "Download options are available in our Pro plan",
                              action: {
                                label: "View Pricing",
                                onClick: () => navigate('/pricing')
                              }
                            });
                          }}
                        >
                          <Download className="w-5 h-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-black/90 text-white border-gray-800 rounded-xl">
                        <p>Download clip</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="rounded-full w-12 h-12 border-gray-700 hover:bg-primary/20 text-white hover:scale-110 transition-all duration-300" 
                          onClick={() => {
                            toast.info("Premium feature", {
                              description: "Share to Instagram is available in our Pro plan",
                              action: {
                                label: "View Pricing",
                                onClick: () => navigate('/pricing')
                              }
                            });
                          }}
                        >
                          <Instagram className="w-5 h-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-black/90 text-white border-gray-800 rounded-xl">
                        <p>Share to Instagram</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="rounded-full w-12 h-12 border-gray-700 hover:bg-primary/20 text-white hover:scale-110 transition-all duration-300"
                          onClick={() => {
                            toast.info("Premium feature", {
                              description: "Share to YouTube Shorts is available in our Pro plan",
                              action: {
                                label: "View Pricing",
                                onClick: () => navigate('/pricing')
                              }
                            });
                          }}
                        >
                          <Youtube className="w-5 h-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-black/90 text-white border-gray-800 rounded-xl">
                        <p>Share to YouTube Shorts</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="rounded-full w-12 h-12 border-gray-700 hover:bg-primary/20 text-white hover:scale-110 transition-all duration-300"
                          onClick={() => {
                            toast.info("Premium feature", {
                              description: "Share to Twitter is available in our Pro plan",
                              action: {
                                label: "View Pricing",
                                onClick: () => navigate('/pricing')
                              }
                            });
                          }}
                        >
                          <Twitter className="w-5 h-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-black/90 text-white border-gray-800 rounded-xl">
                        <p>Share to X (Twitter)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InputSection;
