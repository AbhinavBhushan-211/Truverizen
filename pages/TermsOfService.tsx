import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16 min-h-screen bg-slate-950 font-sans text-slate-300"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-2 text-white">Terms of Service</h1>
        <p className="text-slate-500 mb-10">Last updated: February 28, 2025</p>

        <div className="bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-800 shadow-sm space-y-8">
            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
                <p className="text-slate-400 leading-relaxed">
                    By accessing or using the website and services provided by Truverizen Technologies ("Truverizen", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. Use of Services</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                   You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-400">
                    <li>Using the service in any way that violates applicable national or international law.</li>
                    <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the service.</li>
                    <li>Uploading invalid data, viruses, worms, or other software agents through the service.</li>
                    <li>Collecting or harvesting any personally identifiable information from the service.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. Intellectual Property</h2>
                <p className="text-slate-400 leading-relaxed">
                    The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Truverizen Technologies and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. User Accounts</h2>
                <p className="text-slate-400 leading-relaxed">
                    When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. Limitation of Liability</h2>
                <p className="text-slate-400 leading-relaxed">
                    In no event shall Truverizen Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">6. Changes to Terms</h2>
                <p className="text-slate-400 leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">7. Contact Us</h2>
                <p className="text-slate-400 leading-relaxed">
                    If you have any questions about these Terms, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-slate-950 rounded-lg border border-slate-800">
                    <p className="text-slate-300 font-medium">Email: legal@truverizen.ai</p>
                    <p className="text-slate-300 font-medium">Address: WeWork, 1st floor, Galaxy Business Park, Noida, UP 201309</p>
                </div>
            </section>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;