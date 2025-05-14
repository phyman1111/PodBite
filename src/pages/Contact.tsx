
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { X, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const ContactPage = () => {
  const redirectToTwitter = () => {
    window.open('https://x.com/podbite_', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0')] bg-cover bg-center opacity-10 pointer-events-none"></div>
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
            Contact Us
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Get in touch with our team
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <Card className="glass-card p-6 flex flex-col items-center text-center">
            <X className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Connect on X</h2>
            <p className="text-gray-400 mb-6">
              Follow us or send us a direct message on X for the fastest response
            </p>
            <Button 
              className="bg-primary text-background hover:bg-primary/80 rounded-3xl"
              onClick={redirectToTwitter}
            >
              <X className="mr-2 h-4 w-4" />
              Message on X
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Card>
          
          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Support Availability</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <span className="text-primary text-2xl font-semibold">Available 24/7</span>
              </div>
              <div className="bg-primary/10 p-4 rounded-xl text-center">
                <p className="text-white">We're always here to help!</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 mb-1">Typical response time:</p>
              <p className="text-white">Within 24 hours</p>
            </div>
          </Card>
        </div>
        
        <div className="glass-card p-6 mb-12 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-6">Frequently Asked Support Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-800 pb-4">
              <h3 className="font-medium text-white mb-2">How do I request a refund?</h3>
              <p className="text-gray-400 text-sm">
                To request a refund, please contact us via X with your account email and order number. 
                All refund requests are processed within 5-7 business days.
              </p>
            </div>
            
            <div className="border-b border-gray-800 pb-4">
              <h3 className="font-medium text-white mb-2">Can I change my subscription plan?</h3>
              <p className="text-gray-400 text-sm">
                Yes, you can update your subscription at any time from your account settings. 
                Changes will take effect on your next billing cycle.
              </p>
            </div>
            
            <div className="pb-4">
              <h3 className="font-medium text-white mb-2">I'm experiencing technical issues. What should I do?</h3>
              <p className="text-gray-400 text-sm">
                For technical support, please provide details about the issue, include screenshots if possible, 
                and the steps to reproduce the problem. Our team will investigate and get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
