'use client'
import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Since installing AquaSense AI we've cut mortality by 30% and caught a harmful algae bloom days before it hit.",
      author: "John Smith",
      role: "Owner, Coastal Shellfish Co.",
      rating: 5,
      image: "/testimonial-1.jpg"
    },
    {
      quote: "AquaSense AI has transformed how we monitor our fish farms. The real-time alerts have saved us thousands in potential losses. The system paid for itself in the first month.",
      author: "Maria Garcia",
      role: "Farm Manager, Blue Horizon Shrimp",
      rating: 5,
      image: "/testimonial-2.jpg"
    },
    {
      quote: "As a small operation, I was skeptical about the cost, but the ROI has been incredible. My fish are healthier and growing faster.",
      author: "David Kim",
      role: "Owner, Mountain Trout Farm",
      rating: 5,
      image: "/testimonial-3.jpg"
    },
    {
      quote: "The customer support team is exceptional. They helped us customize the system for our unique setup.",
      author: "Sarah Johnson",
      role: "Operations Director, AquaGreen Farms",
      rating: 5,
      image: "/testimonial-4.jpg"
    },
    {
      quote: "We've reduced our water exchange by 40% thanks to the precise monitoring and control.",
      author: "Robert Chen",
      role: "Technical Director, Urban Aquaponics",
      rating: 5,
      image: "/testimonial-5.jpg"
    }
  ];

  // Function to render star rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-cyan-600">Aquaculture Professionals</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our customers have to say about AquaSense AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              <div className="mb-6">
                <Quote className="w-8 h-8 text-cyan-100" />
              </div>
              
              <p className="text-gray-700 mb-6 flex-grow">&quot;{testimonial.quote}&quot;</p>
              
              <div className="mt-auto">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center text-cyan-600 font-bold text-lg mr-4">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    {/* <p className="text-sm text-gray-500">{testimonial.role}</p> */}
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-sm text-gray-500">
                    {testimonial.rating}.0 rating
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-100"
        >
          <p className="text-center text-gray-500 mb-8">Trusted by leading aquaculture operations worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold">
                  Logo {i}
                </div>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* CTA */}
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
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to join our satisfied customers?</h3>
            <p className="text-cyan-100 text-lg mb-8">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-cyan-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Get Started Free
              </button>
              <button className="px-8 py-3 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300">
                Schedule a Demo
              </button>
            </div>
            <p className="text-cyan-100 text-sm mt-4">
              Have questions? <a href="#" className="text-white font-medium hover:underline">Contact our sales team</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
