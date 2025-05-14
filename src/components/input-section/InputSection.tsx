
import React, { useState } from 'react';
import ClipForm from './ClipForm';
import ClipPreview from './ClipPreview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { ExternalLink } from "lucide-react";

interface InputSectionProps {
  onGenerateClip: (data: any) => void;
  clipData?: any;
}

const InputSection: React.FC<InputSectionProps> = ({ onGenerateClip, clipData }) => {
  const [openLanguageDialog, setOpenLanguageDialog] = useState(false);
  const [languageRequest, setLanguageRequest] = useState('');
  
  const handleAddLanguage = () => {
    setOpenLanguageDialog(true);
  };
  
  const handleCopyAndRedirect = () => {
    const message = `Please add this language - "${languageRequest}" to PodBite`;
    navigator.clipboard.writeText(message);
    toast({
      title: "Message copied to clipboard",
      description: "You can now paste this in a DM to us on Twitter/X."
    });
    
    setTimeout(() => {
      window.open('https://x.com/podbite_', '_blank');
    }, 1000);
    
    setOpenLanguageDialog(false);
  };

  return (
    <>
      <div className="w-full glass-card p-6 animate-fade-in">
        <Tabs defaultValue="create" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-black/50 rounded-xl">
            <TabsTrigger value="create" className="data-[state=active]:bg-primary data-[state=active]:text-background rounded-xl hover:scale-105 transition-all duration-300">Create Clip</TabsTrigger>
            <TabsTrigger value="preview" className="data-[state=active]:bg-primary data-[state=active]:text-background rounded-xl hover:scale-105 transition-all duration-300">Preview</TabsTrigger>
          </TabsList>
          
          <TabsContent value="create" className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-white">Create Your Clip</h2>
            <ClipForm onGenerateClip={onGenerateClip} onAddLanguage={handleAddLanguage} />
          </TabsContent>
          
          <TabsContent value="preview" className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-white">Your Clip</h2>
            <ClipPreview clipData={clipData} />
          </TabsContent>
        </Tabs>
      </div>
      
      <Dialog open={openLanguageDialog} onOpenChange={setOpenLanguageDialog}>
        <DialogContent className="glass-effect border-white/10">
          <DialogHeader>
            <DialogTitle className="text-white">Request a New Language</DialogTitle>
            <DialogDescription>
              Enter the language you'd like us to add. We'll prepare a message for you to send to our team on X.
            </DialogDescription>
          </DialogHeader>
          <Input 
            placeholder="e.g. Spanish, French, Japanese" 
            value={languageRequest} 
            onChange={(e) => setLanguageRequest(e.target.value)}
            className="bg-black/50 text-white"
          />
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setOpenLanguageDialog(false)}
            >
              Cancel
            </Button>
            <Button 
              className="bg-primary text-background hover:bg-primary/80"
              onClick={handleCopyAndRedirect}
              disabled={!languageRequest.trim()}
            >
              <span className="mr-2">Copy & Contact Us</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InputSection;
