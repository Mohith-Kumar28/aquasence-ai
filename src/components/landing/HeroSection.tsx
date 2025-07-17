'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { Play, Waves, Activity, BarChart3 } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const StatPill = ({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: string, color: string }) => (
    <motion.div 
      className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-500">{label}</div>
        <div className="text-sm font-bold text-gray-800">{value}</div>
      </div>
    </motion.div>
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Aquaculture</span> Monitoring
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We&apos;re on a mission to revolutionize aquaculture with AI-powered water quality monitoring. and predictive analytics to optimize your aquaculture operations and maximize yield.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started - It&apos;s Free
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-6 text-lg font-medium rounded-xl border-2 border-gray-300 hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" fill="currentColor" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <StatPill 
                icon={<Activity className="w-4 h-4 text-white" />} 
                label="Real-time" 
                value="24/7 Monitoring" 
                color="bg-cyan-500" 
              />
              <StatPill 
                icon={<BarChart3 className="w-4 h-4 text-white" />} 
                label="Accuracy" 
                value="99.9%" 
                color="bg-blue-500" 
              />
              <div className="hidden md:block">
                <StatPill 
                  icon={<Waves className="w-4 h-4 text-white" />} 
                  label="Parameters" 
                  value="10+" 
                  color="bg-indigo-500" 
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Illustration */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 bg-white/30 backdrop-blur-md rounded-2xl p-1 shadow-2xl border border-white/20">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6">
                <div className="aspect-w-16 aspect-h-9 w-full bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <Waves className="w-32 h-32 text-cyan-400 opacity-30" />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {['Temperature', 'pH', 'Oxygen', 'Salinity'].map((param) => (
                    <div key={param} className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                      <div className="text-xs text-gray-500 font-medium">{param}</div>
                      <div className="text-lg font-bold text-gray-800">
                        {param === 'Temperature' ? '28.5°C' : 
                         param === 'pH' ? '7.8' : 
                         param === 'Oxygen' ? '6.2 mg/L' : '32 PSU'}
                      </div>
                      <div className={`text-xs mt-1 ${['Temperature', 'pH'].includes(param) ? 'text-green-500' : 'text-amber-500'}`}>
                        {['Temperature', 'pH'].includes(param) ? '✓ Optimal' : 'Needs attention'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div 
              className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-200/30 rounded-full blur-xl z-0"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-200/30 rounded-full blur-xl z-0"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-cyan-600 hover:text-cyan-700 transition-colors duration-300 group"
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-8 h-12 rounded-full border-2 border-cyan-600 flex items-start justify-center p-1"
          >
            <motion.span 
              className="w-1 h-3 bg-cyan-600 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
