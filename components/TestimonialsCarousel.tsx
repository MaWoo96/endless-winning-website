'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      company: "River Church",
      logo: "/Testimonial Images/River_Logo.png",
      stars: 5,
      quote: "Troy helped us implement a task management software that has literally saved us months of time and brought a new level of organization to our ministry. He established a consistent cadence with our team that kept us unified, focused, and productive. His creativity, intelligence, and deep knowledge were evident, but what stood out most was his heart. Troy genuinely loves God and is passionate about seeing others succeed.",
      author: "River Church West Palm Beach",
      role: "Ministry Staff",
      avatar: "/Testimonial Images/River_Logo.png",
      isLogo: true
    },
    {
      company: "MillionAire Heating, Air and Plumbing",
      stars: 5,
      quote: "Troy helped us start an outbound sales team that helped us close over $50,000 of estimates in the first 60 days and automate our lead follow up system.",
      author: "Brandon Cronkhite",
      role: "Owner, MillionAire Heating, Air and Plumbing",
      avatar: "/Testimonial Images/Brandon.jpg",
      isLogo: false
    },
    {
      company: "Official MX Detail",
      stars: 5,
      quote: "Troy automated our outbound text message campaign and the results were incredible—over $10,000 in new business in just one week. His expertise transformed how we reach customers and grow our mobile detailing business.",
      author: "Alex",
      role: "Owner, Official MX Detail",
      avatar: "/Testimonial Images/Alex.jpg",
      isLogo: false
    }
  ];

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false); // Pause autoplay when user manually navigates
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false); // Pause autoplay when user manually navigates
  };

  return (
    <section id="results" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-5 h-5 rounded-full bg-navy-dark flex items-center justify-center">
              <span className="text-white text-xs">→</span>
            </div>
            <span className="text-sm sm:text-base font-light">Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mb-3 sm:mb-4 px-4 leading-tight">
            Real Transformations. Proven Results.
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-light text-neutral-950 max-w-3xl mx-auto px-4 leading-relaxed">
            Hear from the leaders and organizations who've experienced lasting impact through Endless Winning's strategies and solutions.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-navy-medium/10 hover:bg-navy-medium/20 rounded-full p-2 sm:p-3 transition-colors items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-navy-medium" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          {/* Cards Container - Single Card Display */}
          <div className="relative w-full max-w-[800px] mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {(() => {
                  const testimonial = testimonials[currentSlide];
                  return (
                    <motion.div
                      className="testimonial-card w-full"
                      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                    >
                  <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-sm hover:shadow-xl transition-shadow duration-300 h-full">
                    {/* Gradient bottom border */}
                    <div className="absolute bottom-0 left-0 right-0 h-[4px] sm:h-[6px] bg-gradient-to-r from-[#5856D6] via-[#AF52DE] via-[#FF2D92] via-[#FF9500] via-[#40CBF0] to-[#007AFF]"></div>

                    <div className="p-6 sm:p-8 flex flex-col items-center">
                      {/* LinkedIn Company Badge */}
                      <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight">
                          {testimonial.company}
                        </span>
                      </div>

                      {/* Star Rating */}
                      <div className="flex gap-1 mb-6 sm:mb-9">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-base sm:text-lg text-navy-dark text-center leading-relaxed mb-6 sm:mb-9">
                        "{testimonial.quote}"
                      </p>

                      {/* Author */}
                      <div className="flex flex-col items-center">
                        <div className="relative mb-3 sm:mb-4">
                          <div className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 blur-sm"></div>
                          <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden ${testimonial.isLogo ? 'bg-white p-2' : 'bg-gray-200'}`}>
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              fill
                              className={testimonial.isLogo ? 'object-contain' : 'object-cover'}
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-semibold text-navy-dark mb-1">
                            {testimonial.author}
                          </div>
                          <div className="text-xs sm:text-sm font-medium text-navy-medium">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow - Hidden on mobile */}
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-navy-medium/10 hover:bg-navy-medium/20 rounded-full p-2 sm:p-3 transition-colors items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-navy-medium" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-6 sm:w-8 bg-navy-dark'
                    : 'bg-navy-dark/30 hover:bg-navy-dark/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button - Enhanced */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="#booking-form"
            className="bg-gradient-to-r from-[#5856d6] to-[#ec4899] hover:opacity-90 text-white px-10 py-4 sm:px-12 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-lg inline-flex items-center gap-3 transition-opacity"
            style={{ textShadow: '0px 0px 4px rgba(0,0,0,0.25)' }}
          >
            <span>Book a Discovery Call</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
