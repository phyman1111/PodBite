
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0')] bg-cover bg-center opacity-10 pointer-events-none"></div>
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
            Privacy Policy
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Last updated: April 30, 2023
          </p>
        </div>
        
        <div className="glass-card p-6 mb-12 max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none text-gray-300">
            <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              PodBite ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
            <p>
              By using our service, you agree to the collection and use of information in accordance with this policy.
            </p>
            
            <h2 className="text-xl font-semibold text-white my-4">2. Information We Collect</h2>
            <p>
              We may collect several different types of information for various purposes:
            </p>
            <h3 className="text-lg font-medium text-white mt-3 mb-2">2.1. Personal Data</h3>
            <p>
              While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you, including:
            </p>
            <ul className="list-disc pl-6 my-3 space-y-1">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Payment information</li>
              <li>Usage data</li>
            </ul>
            
            <h3 className="text-lg font-medium text-white mt-3 mb-2">2.2. Usage Data</h3>
            <p>
              We may also collect information on how the service is accessed and used. This may include:
            </p>
            <ul className="list-disc pl-6 my-3 space-y-1">
              <li>Your computer's IP address</li>
              <li>Browser type and version</li>
              <li>Pages of our service that you visit</li>
              <li>Time and date of your visit</li>
              <li>Time spent on those pages</li>
              <li>Other diagnostic data</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-white my-4">3. How We Use Your Data</h2>
            <p>
              PodBite uses the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6 my-3 space-y-1">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features of our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To process payments</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-white my-4">4. Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
            
            <h2 className="text-xl font-semibold text-white my-4">5. Third-Party Services</h2>
            <p>
              Our service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
            
            <h2 className="text-xl font-semibold text-white my-4">6. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2 className="text-xl font-semibold text-white my-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us via our contact page.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
