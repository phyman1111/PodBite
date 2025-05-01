
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { Play, Download, Share, Instagram, X, Youtube } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ClipPreviewProps {
  clipData?: any;
}

const ClipPreview: React.FC<ClipPreviewProps> = ({ clipData }) => {
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const navigate = useNavigate();

  if (!clipData) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-[300px] bg-black/30 rounded-xl border border-gray-800">
        <div className="text-center space-y-4">
          <div className="bg-primary/20 p-4 rounded-full inline-flex items-center justify-center">
            <Play className="w-10 h-10 text-primary animate-pulse-soft" />
          </div>
          <p className="text-gray-400">Generate a clip to see the preview</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <AspectRatioSelector aspectRatio={aspectRatio} setAspectRatio={setAspectRatio} />
      <VideoPreview aspectRatio={aspectRatio} />
      <ClipDetails clipData={clipData} />
      <ShareOptions navigate={navigate} />
    </div>
  );
};

interface AspectRatioSelectorProps {
  aspectRatio: string;
  setAspectRatio: (ratio: string) => void;
}

const AspectRatioSelector: React.FC<AspectRatioSelectorProps> = ({ aspectRatio, setAspectRatio }) => {
  return (
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
  );
};

interface VideoPreviewProps {
  aspectRatio: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ aspectRatio }) => {
  return (
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
  );
};

interface ClipDetailsProps {
  clipData: any;
}

const ClipDetails: React.FC<ClipDetailsProps> = ({ clipData }) => {
  return (
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
  );
};

interface ShareOptionsProps {
  navigate: (path: string) => void;
}

const ShareOptions: React.FC<ShareOptionsProps> = ({ navigate }) => {
  return (
    <div className="pt-4 space-y-4">
      <h3 className="font-medium text-sm text-white mb-2">Export & Share</h3>
      <div className="flex flex-wrap gap-3">
        <ShareButton 
          icon={<Download className="w-5 h-5" />} 
          tooltip="Download clip"
          navigate={navigate}
        />
        <ShareButton 
          icon={<Instagram className="w-5 h-5" />} 
          tooltip="Share to Instagram"
          navigate={navigate}
        />
        <ShareButton 
          icon={<Youtube className="w-5 h-5" />} 
          tooltip="Share to YouTube Shorts"
          navigate={navigate}
        />
        <ShareButton 
          icon={<X className="w-5 h-5" />} 
          tooltip="Share to X"
          navigate={navigate}
        />
      </div>
    </div>
  );
};

interface ShareButtonProps {
  icon: React.ReactNode;
  tooltip: string;
  navigate: (path: string) => void;
}

const ShareButton: React.FC<ShareButtonProps> = ({ icon, tooltip, navigate }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full w-12 h-12 border-gray-700 hover:bg-primary/20 text-white hover:scale-110 transition-all duration-300" 
            onClick={() => {
              toast.info("Premium feature", {
                description: `${tooltip} is available in our Pro plan`,
                action: {
                  label: "View Pricing",
                  onClick: () => navigate('/pricing')
                }
              });
            }}
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-black/90 text-white border-gray-800 rounded-xl">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ClipPreview;
