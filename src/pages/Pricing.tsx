
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();
  
  const handleSignUp = (tier: string) => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0')] bg-cover bg-center opacity-10 pointer-events-none"></div>
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
            Choose Your Plan
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Select the plan that fits your content creation needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Free Tier */}
          <div className="pricing-card relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-500 rounded-t-xl"></div>
            <h2 className="text-xl font-semibold text-white mb-2">Free Tier</h2>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$0</span>
              <span className="text-gray-400 ml-2">/ forever</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Perfect for casual users who want to try the platform
            </p>
            
            <hr className="border-gray-800 mb-6" />
            
            <ul className="space-y-3 mb-8">
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-gray-500" />
                <span>Up to 11 minutes per clip</span>
              </li>
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-gray-500" />
                <span>Basic video editing</span>
              </li>
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-gray-500" />
                <span>Limited downloads per day</span>
              </li>
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-gray-500" />
                <span>No account required</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-white/10 text-white hover:bg-white/20 rounded-full"
              onClick={() => handleSignUp('free')}
            >
              Get Started
            </Button>
          </div>
          
          {/* Pro Tier */}
          <div className="pricing-card relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-xl"></div>
            <span className="absolute -top-4 right-4 bg-primary text-xs text-background font-medium px-3 py-1 rounded-full">
              POPULAR
            </span>
            <h2 className="text-xl font-semibold text-white mb-2">Pro Tier</h2>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$9</span>
              <span className="text-gray-400 ml-2">/ month</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              For content creators who need more advanced features
            </p>
            
            <hr className="border-gray-800 mb-6" />
            
            <ul className="space-y-3 mb-8">
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-primary" />
                <span>Up to 30 minutes per clip</span>
              </li>
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-primary" />
                <span>HD editing effects</span>
              </li>
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-primary" />
                <span>Social-ready formats (9:16, 1:1, 16:9)</span>
              </li>
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-primary" />
                <span>Save clip history with login</span>
              </li>
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-primary" />
                <span>Share directly to socials</span>
              </li>
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-primary" />
                <span>Multilingual transcription & subtitles</span>
              </li>
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-primary" />
                <span>Priority processing</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-primary text-background hover:bg-primary/80 rounded-full"
              onClick={() => handleSignUp('pro')}
            >
              Sign Up
            </Button>
          </div>
          
          {/* Power Tier */}
          <div className="pricing-card relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500 rounded-t-xl"></div>
            <h2 className="text-xl font-semibold text-white mb-2">Power Tier</h2>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$19</span>
              <span className="text-gray-400 ml-2">/ month</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Professional solution for teams and power users
            </p>
            
            <hr className="border-gray-800 mb-6" />
            
            <ul className="space-y-3 mb-8">
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-purple-500" />
                <span>Unlimited clip length</span>
              </li>
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-purple-500" />
                <span>Team access + workspace</span>
              </li>
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-purple-500" />
                <span>AI highlights + summaries</span>
              </li>
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-purple-500" />
                <span>Custom branding</span>
              </li>
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-purple-500" />
                <span>Cloud storage</span>
              </li>
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-purple-500" />
                <span>Advanced analytics</span>
              </li>
              <li className="pricing-feature">
                <Check className="w-4 h-4 text-purple-500" />
                <span>Dedicated support</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-purple-500 text-white hover:bg-purple-600 rounded-full"
              onClick={() => handleSignUp('power')}
            >
              Contact Sales
            </Button>
          </div>
        </div>
        
        <div className="glass-card p-6 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-800 pb-4">
              <h3 className="font-medium text-white mb-2">Can I change plans later?</h3>
              <p className="text-gray-400 text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be effective on your next billing cycle.
              </p>
            </div>
            
            <div className="border-b border-gray-800 pb-4">
              <h3 className="font-medium text-white mb-2">Is there a limit on the number of clips I can create?</h3>
              <p className="text-gray-400 text-sm">
                Free tier users have a daily limit of 3 clips. Pro users can create up to 30 clips per month, and Power tier users have unlimited clip creation.
              </p>
            </div>
            
            <div className="border-b border-gray-800 pb-4">
              <h3 className="font-medium text-white mb-2">How does billing work?</h3>
              <p className="text-gray-400 text-sm">
                We charge monthly or annually (with a discount) based on your selected plan. You can cancel at any time.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
