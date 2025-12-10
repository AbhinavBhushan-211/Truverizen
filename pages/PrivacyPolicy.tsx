import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16 min-h-screen bg-slate-950 font-sans text-slate-300"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-2 text-white">Privacy Policy</h1>
        <p className="text-slate-500 mb-10">Last updated: February 28, 2025</p>

        <div className="bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-800 shadow-sm space-y-8">
            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                <p className="text-slate-400 leading-relaxed">
                    Truverizen Technologies ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-400">
                    <li><strong>Personal Data:</strong> Name, email address, phone number, and company name when you voluntarily provide it through our contact forms.</li>
                    <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, and operating system.</li>
                    <li><strong>Cookies:</strong> We use cookies to improve your experience and analyze website traffic.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
                <p className="text-slate-400 leading-relaxed">
                    We use the collected data for the following purposes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-slate-400">
                    <li>To provide and maintain our Service.</li>
                    <li>To notify you about changes to our Service.</li>
                    <li>To allow you to participate in interactive features when you choose to do so.</li>
                    <li>To provide customer support.</li>
                    <li>To gather analysis or valuable information so that we can improve our Service.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. Data Security</h2>
                <p className="text-slate-400 leading-relaxed">
                    The security of your data is important to us. We implement industry-standard security measures, including encryption and secure servers, to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. Contact Us</h2>
                <p className="text-slate-400 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 p-4 bg-slate-950 rounded-lg border border-slate-800">
                    <p className="text-slate-300 font-medium">Email: privacy@truverizen.ai</p>
                    <p className="text-slate-300 font-medium">Address: WeWork, 1st floor, Galaxy Business Park, Noida, UP 201309</p>
                </div>
            </section>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;