
'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, AlertCircle, Zap, BarChart2, Smartphone, Server, Clock } from "lucide-react";

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("monitoring");

  const features = [
    {
      id: "monitoring",
      icon: <Activity className="w-6 h-6 text-cyan-600" />,
      title: "Real-time Monitoring",
      description: "Continuously track water quality parameters with our advanced sensor network.",
      image: "/monitoring-illustration.svg",
      highlights: [
        "24/7 parameter tracking",
        "Multi-point monitoring",
        "Instant alerts",
        "Custom thresholds"
      ]
    },
    {
      id: "alerts",
      icon: <AlertCircle className="w-6 h-6 text-blue-600" />,
      title: "Smart Alerts",
      description: "Get notified immediately when parameters go out of range.",
      image: "/alerts-illustration.svg",
      highlights: [
        "Custom alert thresholds",
        "Multi-channel notifications",
        "Escalation rules",
        "Alert history"
      ]
    },
    {
      id: "analytics",
      icon: <BarChart2 className="w-6 h-6 text-indigo-600" />,
      title: "Advanced Analytics",
      description: "Gain insights from historical data and trends.",
      image: "/analytics-illustration.svg",
      highlights: [
        "Custom reports",
        "Trend analysis",
        "Exportable data",
        "Performance metrics"
      ]
    },
    {
      id: "mobile",
      icon: <Smartphone className="w-6 h-6 text-emerald-600" />,
      title: "Mobile Access",
      description: "Monitor your farm from anywhere with our mobile app.",
      image: "/mobile-illustration.svg",
      highlights: [
        "iOS & Android",
        "Real-time updates",
        "Push notifications",
        "Remote control"
      ]
    },
    {
      id: "api",
      icon: <Server className="w-6 h-6 text-amber-600" />,
      title: "API Access",
      description: "Integrate with your existing systems and workflows.",
      image: "/api-illustration.svg",
      highlights: [
        "RESTful API",
        "Webhooks",
        "Documentation",
        "Developer support"
      ]
    },
    {
      id: "history",
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Historical Data",
      description: "Access and analyze historical water quality data.",
      image: "/history-illustration.svg",
      highlights: [
        "Unlimited storage",
        "Custom date ranges",
        "Data export",
        "Compliance reports"
      ]
    }
  ];

  const activeFeature = features.find(feature => feature.id === activeTab) || features[0];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Everything You Need for <span className="text-cyan-600">Optimal Water Quality</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AquaSense AI provides a comprehensive suite of tools to monitor, analyze, and optimize your aquaculture environment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature Tabs */}
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`text-left px-6 py-4 rounded-xl transition-all duration-200 ${
                    activeTab === feature.id
                      ? 'bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 shadow-sm'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg mr-4 ${
                      activeTab === feature.id ? 'bg-white shadow-sm' : 'bg-gray-50'
                    }`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 h-full border border-gray-100 shadow-sm"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeFeature.title}</h3>
                    <p className="text-gray-600">{activeFeature.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {activeFeature.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-cyan-500 mr-3">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                      <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            {activeFeature.icon}
                          </div>
                          <p className="text-sm text-gray-500">Interactive {activeFeature.title.toLowerCase()} dashboard preview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
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
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Limited Time Offer
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to experience the future of aquaculture monitoring?</h3>
            <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
              Join our early adopters and get 3 months free when you sign up for an annual plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-cyan-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
