'use client'
import React from "react";
import { motion } from "motion/react";
import { Camera, Wifi, Smartphone, BarChart3, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Camera className="w-6 h-6 text-cyan-600" />,
      title: "1. Deploy Sensors",
      description: "Install our waterproof sensors in your aquaculture environment to start collecting water quality data.",
      color: "from-cyan-50 to-cyan-100"
    },
    {
      icon: <Wifi className="w-6 h-6 text-blue-600" />,
      title: "2. Connect & Sync",
      description: "Sensors automatically connect to our secure cloud platform via cellular or Wi-Fi.",
      color: "from-blue-50 to-blue-100"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
      title: "3. Monitor in Real-time",
      description: "Access your farm's data through our web dashboard or mobile app from anywhere.",
      color: "from-indigo-50 to-indigo-100"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
      title: "4. Get AI Insights",
      description: "Our AI analyzes patterns and provides actionable recommendations.",
      color: "from-purple-50 to-purple-100"
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      title: "5. Take Action",
      description: "Receive alerts and optimize your operations based on data-driven insights.",
      color: "from-amber-50 to-amber-100"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get Started in <span className="text-cyan-600">5 Simple Steps</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AquaSense AI makes it easy to monitor and optimize your aquaculture operations with minimal setup.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-100 via-blue-100 to-amber-100 -ml-0.5"></div>
          
          {/* Steps */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 0 ? 'lg:w-1/2 lg:pr-16 lg:mr-auto' : 'lg:w-1/2 lg:pl-16 lg:ml-auto'}`}
              >
                {/* Step dot */}
                <div className={`hidden lg:flex absolute top-0 ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 items-center justify-center text-white z-10 shadow-lg`}>
                  <CheckCircle className="w-5 h-5" />
                </div>
                
                {/* Step card */}
                <div className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${step.color} -mr-16 -mt-16 opacity-50`}></div>
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    
                    {/* Mobile step indicator */}
                    <div className="lg:hidden flex items-center mt-4 text-sm text-gray-500">
                      <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mr-2">
                        {index + 1}
                      </div>
                      Step {index + 1} of {steps.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 -left-20 w-40 h-40 bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-48 h-48 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full -ml-48 -mb-48"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ready to transform your aquaculture operations?</h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of aquaculture professionals who trust AquaSense AI for their water quality monitoring needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:arturas@aquasense.ai">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                Contact Sales
              </button></Link>
           
            </div>
            
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>No credit card required</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-200"></div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>14-day free trial</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-200"></div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
