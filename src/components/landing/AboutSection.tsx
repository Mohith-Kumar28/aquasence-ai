'use client'
import React from "react";
import { motion } from "motion/react";
import { Waves, Brain, Shield } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
            About AquaSense AI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Revolutionizing Aquaculture with <span className="text-cyan-600">AI Technology</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AquaSense AI combines cutting-edge sensors with powerful machine learning to provide real-time insights into your water quality, helping you make data-driven decisions for healthier, more sustainable aquaculture.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-cyan-50 to-blue-50 p-8">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-100 rounded-full opacity-70 blur-xl"></div>
                    <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-100 rounded-full opacity-70 blur-xl"></div>
                    <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                      <div className="flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-2xl mb-6 mx-auto">
                        <Waves className="w-8 h-8 text-cyan-600" />
                      </div>
                      <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Smart Monitoring</h3>
                      <p className="text-gray-600 text-center">
                        Continuously track key water parameters with our advanced sensor network.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-cyan-100 rounded-full opacity-30 blur-2xl z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-cyan-100 text-cyan-600 mr-4">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Insights</h3>
                <p className="text-gray-600">
                  Our advanced machine learning algorithms analyze water quality data to predict potential issues before they impact your stock.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600 mr-4">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Early Warning System</h3>
                <p className="text-gray-600">
                  Receive instant alerts when water parameters fall outside optimal ranges, allowing for quick intervention.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-100 text-indigo-600 mr-4">
                <Waves className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Analytics</h3>
                <p className="text-gray-600">
                  Access detailed reports and trends to optimize feeding schedules, aeration, and overall farm management.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button className="inline-flex items-center text-cyan-600 font-medium hover:text-cyan-700 transition-colors duration-300">
                Learn more about our technology
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
