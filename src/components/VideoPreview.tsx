
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

interface VideoPreviewProps {
  clipData?: any;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ clipData }) => {
  const [aspectRatio, setAspectRatio] = useState("16:9");
  
  if (!clipData) {
    return (
      <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="bg-podbite-light-blue p-4 rounded-full inline-flex items-center justify-center">
            <Play className="w-10 h-10 text-podbite-blue" />
          </div>
          <h3 className="text-xl font-semibold text-podbite-dark">Your clip will appear here</h3>
          <p className="text-podbite-gray max-w-md">
            Enter a YouTube URL and prompt above to generate your first clip
          </p>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    toast.success("Starting download...");
  };

  const handleShare = (platform: string) => {
    toast.success(`Preparing to share to ${platform}...`);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4 text-podbite-dark">Your Clip</h2>
      
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="export">Export & Share</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview" className="space-y-4">
          <div className="mb-4">
            <div className="grid grid-cols-3 gap-2">
              <Button 
                variant={aspectRatio === "16:9" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setAspectRatio("16:9")}
                className={aspectRatio === "16:9" ? "bg-podbite-blue hover:bg-blue-500" : ""}
              >
                16:9
              </Button>
              <Button 
                variant={aspectRatio === "9:16" ? "default" : "outline"}
                size="sm" 
                onClick={() => setAspectRatio("9:16")}
                className={aspectRatio === "9:16" ? "bg-podbite-blue hover:bg-blue-500" : ""}
              >
                9:16
              </Button>
              <Button 
                variant={aspectRatio === "1:1" ? "default" : "outline"}
                size="sm" 
                onClick={() => setAspectRatio("1:1")}
                className={aspectRatio === "1:1" ? "bg-podbite-blue hover:bg-blue-500" : ""}
              >
                1:1
              </Button>
            </div>
          </div>

          <div className={`relative w-full ${aspectRatio === "9:16" ? "max-w-[400px] mx-auto" : ""}`}>
            {aspectRatio === "16:9" && (
              <AspectRatio ratio={16/9} className="bg-gray-100 rounded-md overflow-hidden border">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-pulse-soft">
                      <Play className="w-16 h-16 text-podbite-blue mx-auto" />
                      <p className="text-podbite-gray mt-2">Video Preview</p>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            )}
            
            {aspectRatio === "9:16" && (
              <AspectRatio ratio={9/16} className="bg-gray-100 rounded-md overflow-hidden border">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-pulse-soft">
                      <Play className="w-16 h-16 text-podbite-blue mx-auto" />
                      <p className="text-podbite-gray mt-2">Video Preview</p>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            )}
            
            {aspectRatio === "1:1" && (
              <AspectRatio ratio={1/1} className="bg-gray-100 rounded-md overflow-hidden border">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-pulse-soft">
                      <Play className="w-16 h-16 text-podbite-blue mx-auto" />
                      <p className="text-podbite-gray mt-2">Video Preview</p>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            )}
          </div>
          
          <div className="pt-4">
            <h3 className="font-medium text-sm text-podbite-gray mb-2">From Your Prompt:</h3>
            <p className="text-podbite-dark italic">{clipData.prompt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs bg-podbite-light-blue text-podbite-blue px-2 py-1 rounded-full">
                {clipData.duration} minutes
              </span>
              <span className="text-xs bg-podbite-light-blue text-podbite-blue px-2 py-1 rounded-full">
                {clipData.language}
              </span>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="export" className="space-y-4">
          <div className="p-4 bg-podbite-light border border-podbite-light-blue rounded-md">
            <h3 className="font-medium mb-3">Download Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="flex items-center justify-center gap-2"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4" />
                <span>MP4 Video</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center justify-center gap-2"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4" />
                <span>MP3 Audio</span>
              </Button>
            </div>
          </div>

          <div className="p-4 bg-podbite-light border border-podbite-light-blue rounded-md">
            <h3 className="font-medium mb-3">Share to Social Media</h3>
            <div className="flex flex-wrap gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="rounded-full w-12 h-12" 
                      onClick={() => handleShare('Instagram')}
                    >
                      <Instagram className="w-5 h-5 text-podbite-dark" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
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
                      className="rounded-full w-12 h-12"
                      onClick={() => handleShare('YouTube Shorts')}
                    >
                      <Youtube className="w-5 h-5 text-podbite-dark" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
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
                      className="rounded-full w-12 h-12"
                      onClick={() => handleShare('Twitter')}
                    >
                      <Twitter className="w-5 h-5 text-podbite-dark" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
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
                      className="rounded-full w-12 h-12"
                      onClick={() => handleShare('Other platforms')}
                    >
                      <Share className="w-5 h-5 text-podbite-dark" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
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
