'use client'
import React from "react";
import { motion } from "motion/react";
import { Cpu, Wifi, Cloud, Database, ShieldCheck, BarChart2 } from "lucide-react";
import Link from "next/link";

export default function TechnologySection() {
  const technologies = [
    {
      icon: <Cpu className="w-6 h-6 text-cyan-600" />,
      title: "Edge AI Processing",
      description: "On-device AI models process data in real-time, reducing latency and enabling offline functionality."
    },
    {
      icon: <Wifi className="w-6 h-6 text-blue-600" />,
      title: "IoT Connectivity",
      description: "Seamless integration with various IoT protocols for reliable data transmission from sensors to cloud."
    },
    {
      icon: <Cloud className="w-6 h-6 text-indigo-600" />,
      title: "Cloud Analytics",
      description: "Scalable cloud infrastructure for advanced data processing, storage, and long-term trend analysis."
    },
    {
      icon: <Database className="w-6 h-6 text-emerald-600" />,
      title: "Data Fusion",
      description: "Combines multiple data sources for comprehensive water quality assessment and prediction."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      title: "Cybersecurity",
      description: "End-to-end encryption and secure authentication to protect your farm's sensitive data."
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-purple-600" />,
      title: "Predictive Analytics",
      description: "Machine learning models predict potential issues before they impact your aquaculture operations."
    }
  ];

  return (
    <section id="technology" className="py-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
            Our Technology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Built with <span className="text-cyan-600">Cutting-Edge</span> Technology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AquaSense AI leverages the latest advancements in AI, IoT, and cloud computing to deliver unparalleled monitoring and analytics for your aquaculture operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-4">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.title}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your aquaculture operations?</h3>
            <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of aquaculture professionals who trust AquaSense AI for their water quality monitoring needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:arturas@aquasense.ai">
              <button className="px-8 py-3 bg-white text-cyan-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Contact Sales
              </button></Link>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
