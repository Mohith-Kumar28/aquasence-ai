'use client'
import React from "react";
import { motion } from "motion/react";
import { Fish, Droplets, Factory, Leaf, Zap, ChevronRight } from "lucide-react";

export default function UseCasesSection() {
  const useCases = [
    {
      icon: <Fish className="w-6 h-6 text-cyan-600" />,
      title: "Fish Farms",
      description: "Monitor water quality parameters to optimize fish health and growth rates while reducing mortality.",
      benefits: [
        "Reduce feed waste",
        "Prevent disease outbreaks",
        "Improve growth rates",
        "Enhance oxygen management"
      ]
    },
    {
      icon: <Droplets className="w-6 h-6 text-blue-600" />,
      title: "Shrimp Farming",
      description: "Maintain optimal salinity and temperature levels for shrimp health and maximum productivity.",
      benefits: [
        "Monitor water quality",
        "Prevent disease",
        "Optimize feeding",
        "Increase survival rates"
      ]
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      title: "Aquaponics",
      description: "Balance the needs of both plants and fish in your aquaponic system with precise monitoring.",
      benefits: [
        "Optimize nutrient levels",
        "Balance pH",
        "Monitor dissolved oxygen",
        "Track water temperature"
      ]
    },
    {
      icon: <Factory className="w-6 h-6 text-amber-600" />,
      title: "Hatcheries",
      description: "Ensure ideal conditions for larvae and juvenile fish with continuous water quality monitoring.",
      benefits: [
        "Monitor water parameters",
        "Prevent stress",
        "Optimize growth",
        "Reduce mortality"
      ]
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
            Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Designed for <span className="text-cyan-600">Various Aquaculture Applications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AquaSense AI adapts to different aquaculture environments, providing tailored solutions for your specific needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden relative"
            >
              <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 -mr-12 -mt-12 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors duration-300">
                  {useCase.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="inline-flex items-center text-cyan-600 font-medium hover:text-cyan-700 group-hover:translate-x-1 transition-transform duration-300">
                  Learn more about {useCase.title.toLowerCase()}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
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
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Special Offer
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Don&apos;t see your specific use case?</h3>
              <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
                Our team can customize AquaSense AI to fit your unique aquaculture needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-2">Schedule a Call</h4>
                <p className="text-cyan-100 text-sm">Speak with our aquaculture experts to discuss your specific requirements.</p>
                <button className="mt-4 text-sm font-medium text-white hover:underline flex items-center">
                  Book a call <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-2">Live Demo</h4>
                <p className="text-cyan-100 text-sm">See AquaSense AI in action with a personalized demo of our platform.</p>
                <button className="mt-4 text-sm font-medium text-white hover:underline flex items-center">
                  Watch demo <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-2">Free Trial</h4>
                <p className="text-cyan-100 text-sm">Try AquaSense AI risk-free with our 14-day trial. No credit card required.</p>
                <button className="mt-4 text-sm font-medium text-white hover:underline flex items-center">
                  Start free trial <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </svg>
  );
}
