'use client'
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Waves } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Technology", id: "technology" },
    { label: "Features", id: "features" },
    { label: "Use Cases", id: "use-cases" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
              <Waves className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">AquaSense AI</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-cyan-600 font-medium transition-colors duration-200 px-4 py-2 rounded-lg"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-lg text-gray-700 hover:text-cyan-600 hover:bg-gray-50 font-medium py-3 px-3 rounded-md transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold mt-4 text-lg"
              >
                Request Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
