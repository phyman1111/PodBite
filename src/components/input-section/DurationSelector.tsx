
import React from 'react';
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface DurationSelectorProps {
  duration: string;
  setDuration: (duration: string) => void;
  customDuration: string;
  setCustomDuration: (duration: string) => void;
}

const DurationSelector: React.FC<DurationSelectorProps> = ({ 
  duration, 
  setDuration, 
  customDuration, 
  setCustomDuration 
}) => {
  const handleCustomDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (parseInt(value) > 11) {
      toast.error("Clips longer than 11 minutes are not available", {
        description: "Please select a duration of 11 minutes or less."
      });
    }
    
    setCustomDuration(value);
  };
  
  return (
    <div>
      <label htmlFor="duration" className="block text-sm font-medium text-gray-300 mb-1">
        Clip Duration (minutes)
      </label>
      <Select value={duration} onValueChange={setDuration}>
        <SelectTrigger id="duration" className="w-full bg-black/50 border-gray-700 text-white">
          <SelectValue placeholder="Select duration" />
        </SelectTrigger>
        <SelectContent className="bg-[#1A1F2C] border border-gray-700 text-white">
          <SelectItem value="1">1 minute</SelectItem>
          <SelectItem value="2">2 minutes</SelectItem>
          <SelectItem value="3">3 minutes</SelectItem>
          <SelectItem value="4">4 minutes</SelectItem>
          <SelectItem value="5">5 minutes</SelectItem>
          <SelectItem value="6">6 minutes</SelectItem>
          <SelectItem value="7">7 minutes</SelectItem>
          <SelectItem value="8">8 minutes</SelectItem>
          <SelectItem value="9">9 minutes</SelectItem>
          <SelectItem value="10">10 minutes</SelectItem>
          <SelectItem value="11">11 minutes</SelectItem>
          <SelectItem value="custom">Custom Length</SelectItem>
        </SelectContent>
      </Select>
      
      {duration === 'custom' && (
        <div className="mt-2">
          <Input
            type="number"
            placeholder="Enter minutes (up to 11)"
            value={customDuration}
            onChange={handleCustomDurationChange}
            className="w-full bg-black/50 border-gray-700 text-white focus:ring-primary focus:border-primary transition-all"
            min="1"
            max="11"
          />
        </div>
      )}
    </div>
  );
};

export default DurationSelector;
