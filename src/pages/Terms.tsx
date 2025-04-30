
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0')] bg-cover bg-center opacity-10 pointer-events-none"></div>
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
            Terms of Service
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Last updated: April 30, 2023
          </p>
        </div>
        
        <div className="glass-card p-6 mb-12 max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none text-gray-300">
            <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to PodBite ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service") govern your use of our website and services operated by PodBite.
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
            
            <h2 className="text-xl font-semibold text-white my-4">2. Use of Service</h2>
            <p>
              PodBite provides a platform that allows users to create short clips from podcasts and videos. You are responsible for ensuring that your use of the service complies with applicable copyright laws and fair use principles.
            </p>
            <p>
              You agree not to use our service:
            </p>
            <ul className="list-disc pl-6 my-3 space-y-1">
              <li>For any unlawful purpose or in violation of any laws</li>
              <li>To violate the intellectual property rights of others</li>
              <li>To distribute harmful or malicious content</li>
              <li>To attempt to interfere with or disrupt the service</li>
              <li>To impersonate other individuals</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-white my-4">3. Account Registration</h2>
            <p>
              When you create an account with us, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </p>
            
            <h2 className="text-xl font-semibold text-white my-4">4. Subscription and Payments</h2>
            <p>
              Some features of the service are available on a subscription basis. By subscribing to a paid tier, you agree to pay the subscription fees as described at the time of purchase. Subscription fees may change at any time, but changes will not affect the current subscription period.
            </p>
            <p>
              You may cancel your subscription at any time, but no refunds will be provided for the current subscription period. You will continue to have access to paid features until the end of your current billing cycle.
            </p>
            
            <h2 className="text-xl font-semibold text-white my-4">5. Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are owned by PodBite and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p>
              You retain ownership of any content you create using our services. However, by using our service, you grant us a worldwide, non-exclusive license to use, reproduce, modify, and distribute your content for the purpose of providing and improving our services.
            </p>
            
            <h2 className="text-xl font-semibold text-white my-4">6. Limitation of Liability</h2>
            <p>
              In no event shall PodBite, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>
            
            <h2 className="text-xl font-semibold text-white my-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time at our sole discretion. By continuing to access or use our service after revisions become effective, you agree to be bound by the revised terms.
            </p>
            
            <h2 className="text-xl font-semibold text-white my-4">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us via our contact page.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsPage;
