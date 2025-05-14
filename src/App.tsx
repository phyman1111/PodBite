
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About";
import HelpPage from "./pages/Help";
import TermsPage from "./pages/Terms";
import PrivacyPage from "./pages/Privacy";
import ContactPage from "./pages/Contact";

// Initialize the query client outside the component
const queryClient = new QueryClient();

// Analytics component for tracking
const Analytics = () => {
  React.useEffect(() => {
    // Initialize analytics here
    console.log('Analytics initialized');
    
    // Track page view
    const trackPageView = () => {
      console.log(`Page viewed: ${window.location.pathname}`);
      // Add your actual analytics tracking code here
    };
    
    // Track initial page load
    trackPageView();
    
    // Listen for location changes
    const handleRouteChange = () => {
      trackPageView();
    };
    
    // Listen for location changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  
  return null;
};

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Analytics />
            <div className="min-h-screen bg-black">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </TooltipProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
