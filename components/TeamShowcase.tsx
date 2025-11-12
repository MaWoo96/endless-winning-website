'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

export default function TeamShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Pastor Alex Burgos",
      image: "/Winning Team/Alex Burgos.jpeg",
      tags: ["Senior Pastor", "Business Mentorship", "Kingdom Business", "Leadership Development", "Wealth Building"],
      bio: "Pastor Alex Burgos serves as senior pastor alongside his wife Lauren at the River Orlando Church in Sorrento, Florida. Pastor Alex has an intense commitment to raising up godly businessmen who maximize their impact both in their team cultures and financially. He has raised up many multi-millionaires who faithfully serve their family and the kingdom of God through business.",
      linkedin: ""
    },
    {
      name: "Tim Jooste",
      image: "/Winning Team/Timothy Jooste.jpg",
      tags: ["CEO & Founder", "Sales Leadership", "Team Scaling", "Blockchain Gaming", "Tech Industry"],
      bio: "Tim Jooste is the founder and CEO of Koin Games, a blockchain gaming studio in the video game industry. He has a proven track record of scaling sales teams that helped Vivint reach nearly 700 employees and $300m in revenue. Tim combines his experience in tech and sales with his passion for leadership to maximize impact.",
      linkedin: ""
    },
    {
      name: "Tony Utegaard",
      image: "/Winning Team/Tony Uteegard.jpeg",
      tags: ["Visionary Entrepreneur", "Real Estate Developer", "Investor", "Kingdom Business", "Luxury Design"],
      bio: "Tony Utegaard is a visionary entrepreneur, investor, and developer based in Bel Air Bluffs, Florida, leading multi-million-dollar ventures in real estate, construction, and luxury design while teaching business and financial principles through Kingdom Business Fellowship.",
      linkedin: ""
    },
    {
      name: "Matthew Wood",
      image: "/Winning Team/Matthew-Wood-Optimized.jpeg",
      tags: ["Owner - Wood Tax Advisory", "CFO Services", "Financial Strategy", "AI-Powered Accounting", "Business Analytics"],
      bio: "Matthew Wood is the owner of Wood Tax Advisory, providing expert CFO services and bookkeeping solutions that leverage AI technology to deliver clear, actionable financial insights. He helps businesses make data-driven decisions through comprehensive weekly, monthly, quarterly, and annual financial reporting that empowers scaling organizations.",
      linkedin: ""
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 30; // Reduced threshold for faster response
    const velocity = info.velocity.x;

    // Use velocity for more responsive swipes
    if (Math.abs(velocity) > 500) {
      if (velocity > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    } else if (info.offset.x < -swipeThreshold) {
      nextSlide();
    }
  };

  const currentMember = teamMembers[currentSlide];

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 bg-[#F5F5F7] relative overflow-hidden">
      {/* Background decorative gradient - very subtle like Figma */}
      <div className="absolute left-[-298px] top-[-314px] w-[1864px] h-[1179px] opacity-[0.3] pointer-events-none">
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex-none rotate-[193.067deg] scale-y-[-100%]">
            <div className="bg-[#F5F5F7] h-[1178.906px] w-[1864.029px] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-pink-100/30 to-blue-100/30 blur-[120px]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Mobile First */}
        <div className="text-center lg:text-left mb-6 lg:hidden">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-5 h-5 rounded-full bg-navy-dark flex items-center justify-center">
              <span className="text-white text-xs">→</span>
            </div>
            <span className="text-sm font-light text-navy-dark">
              A Winning <span className="font-medium">Team</span>
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-navy-dark mb-3">
            Our Professional Network
          </h2>
          <p className="text-sm sm:text-base text-[#1e1a2a] leading-relaxed px-4">
            When you work with Endless Winning - you work with a network of the best of the best.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Side - Image Card with Swipe Support */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="relative mx-auto lg:mx-0 w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[520px]"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              onDragEnd={handleDragEnd}
            >
              <div className="relative w-full h-[440px] sm:h-[500px] lg:h-[585px] rounded-[20px] sm:rounded-[24px] border-[6px] sm:border-[8px] border-white overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing">
                {/* Member Image */}
                <div className="absolute inset-0">
                  <Image
                    src={currentMember.image}
                    alt={currentMember.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay on bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Tags - Bottom - Responsive with max 3 visible on mobile */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {currentMember.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white/20 backdrop-blur-md text-white text-[11px] sm:text-[13px] lg:text-[14px] px-2.5 py-1.5 sm:px-3 sm:py-2 lg:px-4 rounded-full font-medium shadow-sm"
                      style={{ backdropFilter: 'blur(12px)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation Controls - Between Photo and Name */}
          <div className="lg:hidden flex items-center justify-center gap-4 sm:gap-6 mt-2 mb-2">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              disabled={teamMembers.length <= 1}
              className="w-10 h-10 sm:w-[44px] sm:h-[44px] flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
              aria-label="Previous team member"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 sm:h-[10px] rounded-full transition-all duration-300 touch-manipulation ${
                    index === currentSlide
                      ? 'w-8 sm:w-[32px] bg-navy-dark'
                      : 'w-2 sm:w-[10px] bg-navy-dark/30 hover:bg-navy-dark/50'
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={teamMembers.length <= 1}
              className="w-10 h-10 sm:w-[44px] sm:h-[44px] flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
              aria-label="Next team member"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Right Side - Content - Mobile Optimized */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 w-full">
            {/* Badge and Header - Desktop Only */}
            <div className="hidden lg:block">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-[22px] h-[22px] rounded-full bg-navy-dark flex items-center justify-center">
                  <span className="text-white text-xs">→</span>
                </div>
                <span className="text-[16px] font-light text-navy-dark">
                  A Winning <span className="font-medium">Team</span>
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-navy-dark mb-3">
                Our Professional Network
              </h2>
              <p className="text-base lg:text-lg text-[#1e1a2a] leading-relaxed mb-6">
                When you work with Endless Winning - you work with a network of the best of the best.
              </p>
            </div>

            {/* Name Title with Gradient - Mobile Centered */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold bg-gradient-to-r from-navy-dark to-[#1e1a2a] bg-clip-text text-transparent text-center lg:text-left"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                {currentMember.name}
              </motion.h2>
            </AnimatePresence>

            {/* Bio - Mobile Optimized */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <p className="text-sm sm:text-base lg:text-[16px] leading-relaxed text-[#1e1a2a] text-center lg:text-left">
                  {currentMember.bio}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls - Desktop Only */}
            <div className="hidden lg:flex items-center justify-center gap-4 sm:gap-6">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                disabled={teamMembers.length <= 1}
                className="w-10 h-10 sm:w-[44px] sm:h-[44px] rounded-full bg-navy-dark/10 hover:bg-navy-dark/20 active:bg-navy-dark/30 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                aria-label="Previous team member"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-navy-dark" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              {/* Dot Indicators - Larger on Mobile */}
              <div className="flex gap-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 sm:h-[10px] rounded-full transition-all duration-300 touch-manipulation ${
                      index === currentSlide
                        ? 'w-8 sm:w-[32px] bg-navy-dark'
                        : 'w-2 sm:w-[10px] bg-navy-dark/30 hover:bg-navy-dark/50'
                    }`}
                    aria-label={`Go to team member ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                disabled={teamMembers.length <= 1}
                className="w-10 h-10 sm:w-[44px] sm:h-[44px] rounded-full bg-navy-dark/10 hover:bg-navy-dark/20 active:bg-navy-dark/30 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                aria-label="Next team member"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-navy-dark" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>

            {/* CTA Button - Full Width on Mobile, Centered on Desktop */}
            <div className="flex justify-center">
              <a
                href="#booking-form"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#5856d6] to-[#ec4899] text-white px-10 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-lg hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto max-w-[320px] sm:max-w-none touch-manipulation"
                style={{ textShadow: '0px 0px 4px rgba(0,0,0,0.25)' }}
              >
                <span>Book a Discovery Call</span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
