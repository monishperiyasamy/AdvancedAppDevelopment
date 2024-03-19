// PrivacyPolicy.jsx

import React from 'react';
import '../assets/Policy.css';
import NavigationBar from './NavigationBar'; // Assuming you have a NavigationBar component
import Footer from './Footer';

function PrivacyPolicy() {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>

      <section className="privacy-policy-section">
        <div className="privacy-policy-box">
          
          <div className="privacy-policy-content">
           
            <h3>Information We Collect</h3>
            <p>
              We may collect personal information, such as your name, email address, and contact details, when you interact with our services. We also automatically collect certain information about your device and usage of our services.
            </p>
            <h3>How We Use Your Information</h3>
            <p>
              We may use the information we collect to provide, maintain, and improve our services, to communicate with you, to protect our rights and interests, and for other legitimate purposes.
            </p>
            <h3>Information Sharing</h3>
            <p>
              We may share your information with third parties for various purposes, including to provide services on our behalf, to comply with legal obligations, and to protect against fraud and security risks.
            </p>
            <h3>Security</h3>
            <p>
              We take reasonable measures to protect your information from unauthorized access and use, but no security measures are 100% secure.
            </p>
            
          </div>
        </div>
      </section>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
