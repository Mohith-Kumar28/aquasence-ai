'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp, MessageCircle, Mail, Phone } from "lucide-react";

const faqs = [
  {
    question: "How does AquaSense AI work?",
    answer: "AquaSense AI uses advanced sensors to continuously monitor water quality parameters like temperature, pH, dissolved oxygen, and more. The data is processed using AI algorithms to provide real-time insights and predictive analytics, helping you maintain optimal conditions for your aquaculture operation."
  },
  {
    question: "What kind of sensors do I need?",
    answer: "We provide a complete sensor kit that includes everything you need to get started. Our system is compatible with a wide range of industry-standard sensors, and our team can help you select the right configuration for your specific needs."
  },
  {
    question: "Is the system difficult to install?",
    answer: "Not at all! Our system is designed for easy installation. The sensors are plug-and-play, and our mobile app will guide you through the setup process. Most customers are up and running in less than 30 minutes."
  },
  {
    question: "How accurate are the readings?",
    answer: "Our sensors are laboratory-grade and provide highly accurate measurements. We also use advanced calibration techniques and data validation to ensure the highest level of accuracy for all parameters."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 customer support via email, phone, and live chat. Our team of aquaculture experts is always available to help you with any questions or issues you might have."
  },
  {
    question: "Can I integrate with my existing systems?",
    answer: "Yes! AquaSense AI offers API access and webhook support, allowing you to integrate with your existing farm management systems, ERPs, or other third-party applications."
  },
  {
    question: "What's included in the free trial?",
    answer: "The free trial includes full access to all features for 14 days, including real-time monitoring, alerts, and basic analytics. You'll also have access to our customer support team during your trial period."
  },
  {
    question: "How is my data secured?",
    answer: "We take data security very seriously. All data is encrypted both in transit and at rest, and we follow industry best practices for data protection and privacy. You own your data, and we'll never sell it to third parties."
  }
];

const FaqItem = ({ faq, isOpen, onClick }: { faq: { question: string; answer: string }; isOpen: boolean; onClick: () => void }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
      onClick={onClick}
    >
      <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
      <span className="ml-6 flex-shrink-0">
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-cyan-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden"
        >
          <div className="pb-6">
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-cyan-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about AquaSense AI and how it can benefit your aquaculture operation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <FaqItem 
                      key={index} 
                      faq={faq} 
                      isOpen={openIndex === index} 
                      onClick={() => toggleFaq(index)} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
                <p className="text-gray-600 mb-6">
                  Our team is here to help. Contact us and we&apos;ll get back to you as soon as possible.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:support@aquasense.ai" 
                    className="flex items-center justify-center px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-gray-700 font-medium"
                  >
                    <Mail className="w-5 h-5 mr-2 text-cyan-600" />
                    Email Support
                  </a>
                  <a 
                    href="tel:+18005551234" 
                    className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us
                  </a>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">VISIT OUR HELP CENTER</h4>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-cyan-600 font-medium hover:text-cyan-700 hover:underline"
                  >
                    Browse Help Center
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to get started with AquaSense AI?</h3>
            <p className="text-cyan-100 text-lg mb-8">
              Join the aquaculture revolution and take control of your water quality monitoring today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-cyan-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300">
                Contact Sales
              </button>
            </div>
            <p className="text-cyan-100 text-sm mt-4">
              Have questions? <a href="#" className="text-white font-medium hover:underline">Schedule a call</a> with our team.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
