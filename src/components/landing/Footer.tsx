'use client'
import React from "react";
import { Waves, Twitter, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Integrations", href: "#" },
      { name: "Updates", href: "#" },
      { name: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Guides", href: "#" },
      { name: "API Status", href: "#" },
      { name: "Webinars", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    name: "Twitter",
    icon: <Twitter className="w-5 h-5" />,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    href: "#",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    href: "#",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    href: "#",
  },
  {
    name: "YouTube",
    icon: <Youtube className="w-5 h-5" />,
    href: "#",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">AquaSense AI</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Empowering aquaculture with AI-driven water quality monitoring and predictive analytics for sustainable fish farming.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 mt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AquaSense AI. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 flex items-center"
            >
              Back to top
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
            
            <div className="h-5 w-px bg-gray-800"></div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">English</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center">
            AquaSense AI is not responsible for any direct, indirect, incidental, or consequential damages that may result from the use of our services. 
            Always verify water quality parameters with appropriate testing equipment.
          </p>
        </div>
      </div>
    </footer>
  );
}
