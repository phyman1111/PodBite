
import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Play, Download, Share, Instagram, Twitter, Youtube } from "lucide-react";
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
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

interface VideoPreviewProps {
  clipData?: any;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ clipData }) => {
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const navigate = useNavigate();
  
  if (!clipData) {
    return (
      <div className="w-full glass-card p-6 flex flex-col items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="bg-primary/20 p-4 rounded-full inline-flex items-center justify-center">
            <Play className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-white">Your clip will appear here</h3>
          <p className="text-gray-400 max-w-md">
            Enter a URL and prompt above to generate your first clip
          </p>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    toast.info("Premium feature", {
      description: "Download options are available in our Pro plan",
      action: {
        label: "View Pricing",
        onClick: () => navigate('/pricing')
      }
    });
  };

  const handleShare = (platform: string) => {
    toast.info("Premium feature", {
      description: `Sharing to ${platform} is available in our Pro plan`,
      action: {
        label: "View Pricing",
        onClick: () => navigate('/pricing')
      }
    });
  };

  return (
    <div className="w-full glass-card p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4 text-white">Your Clip</h2>
      
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4 bg-black/50">
          <TabsTrigger value="preview" className="data-[state=active]:bg-primary data-[state=active]:text-background">Preview</TabsTrigger>
          <TabsTrigger value="export" className="data-[state=active]:bg-primary data-[state=active]:text-background">Export & Share</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview" className="space-y-4">
          <div className="mb-4">
            <div className="grid grid-cols-3 gap-2">
              <Button 
                variant={aspectRatio === "16:9" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setAspectRatio("16:9")}
                className={aspectRatio === "16:9" ? "bg-primary text-background hover:bg-primary/80" : "border-gray-700 text-gray-300"}
              >
                16:9
              </Button>
              <Button 
                variant={aspectRatio === "9:16" ? "default" : "outline"}
                size="sm" 
                onClick={() => setAspectRatio("9:16")}
                className={aspectRatio === "9:16" ? "bg-primary text-background hover:bg-primary/80" : "border-gray-700 text-gray-300"}
              >
                9:16
              </Button>
              <Button 
                variant={aspectRatio === "1:1" ? "default" : "outline"}
                size="sm" 
                onClick={() => setAspectRatio("1:1")}
                className={aspectRatio === "1:1" ? "bg-primary text-background hover:bg-primary/80" : "border-gray-700 text-gray-300"}
              >
                1:1
              </Button>
            </div>
          </div>

          <div className={`relative w-full ${aspectRatio === "9:16" ? "max-w-[400px] mx-auto" : ""}`}>
            {aspectRatio === "16:9" && (
              <AspectRatio ratio={16/9} className="bg-black/60 rounded-lg overflow-hidden border border-gray-800">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-pulse-soft">
                      <Play className="w-16 h-16 text-primary mx-auto" />
                      <p className="text-gray-400 mt-2">Video Preview</p>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            )}
            
            {aspectRatio === "9:16" && (
              <AspectRatio ratio={9/16} className="bg-black/60 rounded-lg overflow-hidden border border-gray-800">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-pulse-soft">
                      <Play className="w-16 h-16 text-primary mx-auto" />
                      <p className="text-gray-400 mt-2">Video Preview</p>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            )}
            
            {aspectRatio === "1:1" && (
              <AspectRatio ratio={1/1} className="bg-black/60 rounded-lg overflow-hidden border border-gray-800">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-pulse-soft">
                      <Play className="w-16 h-16 text-primary mx-auto" />
                      <p className="text-gray-400 mt-2">Video Preview</p>
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
        </TabsContent>
        
        <TabsContent value="export" className="space-y-4">
          <div className="p-4 bg-black/40 border border-gray-800 rounded-lg">
            <h3 className="font-medium mb-3 text-white">Download Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="flex items-center justify-center gap-2 border-gray-700 hover:bg-primary/20 text-white"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4" />
                <span>MP4 Video</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center justify-center gap-2 border-gray-700 hover:bg-primary/20 text-white"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4" />
                <span>MP3 Audio</span>
              </Button>
            </div>
          </div>

          <div className="p-4 bg-black/40 border border-gray-800 rounded-lg">
            <h3 className="font-medium mb-3 text-white">Share to Social Media</h3>
            <div className="flex flex-wrap gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="rounded-full w-12 h-12 border-gray-700 hover:bg-primary/20 text-white" 
                      onClick={() => handleShare('Instagram')}
                    >
                      <Instagram className="w-5 h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 text-white border-gray-800">
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
                      className="rounded-full w-12 h-12 border-gray-700 hover:bg-primary/20 text-white"
                      onClick={() => handleShare('YouTube Shorts')}
                    >
                      <Youtube className="w-5 h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 text-white border-gray-800">
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
                      className="rounded-full w-12 h-12 border-gray-700 hover:bg-primary/20 text-white"
                      onClick={() => handleShare('Twitter')}
                    >
                      <Twitter className="w-5 h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 text-white border-gray-800">
                    <p>Share to X (Twitter)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full w-12 h-12 border-gray-700 hover:bg-primary/20 text-white"
                      onClick={() => handleShare('Other platforms')}
                    >
                      <Share className="w-5 h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 text-white border-gray-800">
                    <p>Copy Link</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VideoPreview;
