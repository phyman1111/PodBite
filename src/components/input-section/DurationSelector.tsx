
import React from 'react';
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    setCustomDuration(e.target.value);
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
          <SelectItem value="5">5 minutes</SelectItem>
          <SelectItem value="10">10 minutes</SelectItem>
          <SelectItem value="15">15 minutes</SelectItem>
          <SelectItem value="30">30 minutes</SelectItem>
          <SelectItem value="custom">Custom Length</SelectItem>
        </SelectContent>
      </Select>
      
      {duration === 'custom' && (
        <div className="mt-2">
          <Input
            type="number"
            placeholder="Enter minutes"
            value={customDuration}
            onChange={handleCustomDurationChange}
            className="w-full bg-black/50 border-gray-700 text-white focus:ring-primary focus:border-primary transition-all"
            min="1"
          />
        </div>
      )}
    </div>
  );
};

export default DurationSelector;
