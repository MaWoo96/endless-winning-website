'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] overflow-y-auto">
          {/* Overlay with fade animation */}
          <motion.div
            className="fixed inset-0 bg-navy-dark/80 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal Container - centered with padding */}
          <div className="min-h-full flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
            {/* Modal Card - 1137px width from Figma with slide-up and scale animation */}
            <motion.div
              className="relative w-full max-w-[1137px] bg-white rounded-[24px] shadow-[0px_4px_50px_0px_rgba(0,0,0,0.19)] my-4 sm:my-8"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {/* Close Button with hover animation */}
              <motion.button
                onClick={handleClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-navy-dark/10 hover:bg-navy-dark/20 transition-colors z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-5 h-5 text-navy-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <div className="flex flex-col lg:flex-row p-6 sm:p-8 md:p-10 lg:p-[67px_86px] gap-6 sm:gap-8 lg:gap-0">
                {/* Left Side - Founder Image with card - fade in from left */}
                <motion.div
                  className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[432px] h-[380px] sm:h-[450px] md:h-[520px] lg:h-[585px] shrink-0 lg:mr-20 mx-auto lg:mx-0"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
              <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                <Image
                  src="/About/IMG_3687.svg"
                  alt="Troy Bravenboer"
                  fill
                  className="object-cover object-center"
                />
                {/* Dark gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[228px] bg-gradient-to-t from-black to-transparent rounded-b-[24px]" />

                {/* Large "ENDLESS WINNING" text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div
                    className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-black leading-none text-white/10"
                    style={{
                      textShadow: '0 0 40px rgba(0,0,0,0.5)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    ENDLESS
                  </div>
                  <div
                    className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-black leading-none text-white/10"
                    style={{
                      textShadow: '0 0 40px rgba(0,0,0,0.5)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    WINNING
                  </div>
                </div>

                {/* Bottom text overlay */}
                <div className="absolute bottom-6 sm:bottom-10 md:bottom-14 lg:bottom-[103px] left-4 sm:left-5 md:left-6 lg:left-[27px] flex flex-col gap-1 sm:gap-1.5 lg:gap-2 z-10">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-black text-white leading-none tracking-wider">
                    FOUNDER
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-light text-white leading-none">
                    Troy Bravenboer
                  </h3>
                </div>
              </div>
                </motion.div>

                {/* Right Side - Content - fade in from right */}
                <motion.div
                  className="flex flex-col justify-center w-full lg:max-w-[457px]"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 mb-2 sm:mb-3 self-start">
                    <div className="w-5 h-5 rounded-full bg-navy-dark flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm sm:text-base text-navy-dark">
                      <span className="font-light">About</span> <span className="font-medium">Us</span>
                    </span>
                  </div>

                  {/* Heading with gradient - teal to dark blue */}
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold leading-tight mb-3 sm:mb-4"
                    style={{
                      background: 'linear-gradient(90deg, #2f4f6a 0%, #8ab2b2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    About Endless Winning
                  </h2>

                  {/* Description - exact Figma text */}
                  <div className="flex flex-col gap-4 sm:gap-5 mb-6 sm:mb-7 md:mb-8">
                    <p className="text-sm sm:text-base text-[#1e1a2a] leading-relaxed">
                      Endless Winning exists to bridge the gap between where organizations are and where they&apos;re called to be. With expertise in AI innovation, sales systems, and process automation, the team helps leaders work smarter, scale faster, and achieve lasting impact.
                    </p>
                    <p className="text-sm sm:text-base text-[#1e1a2a] leading-relaxed">
                      From businesses to ministries, Endless Winning has guided transformations that turn challenges into opportunities and ideas into measurable results - building momentum that never stops.
                    </p>
                  </div>

                  {/* Learn More Button - dark blue gradient with hover animation */}
                  <motion.button
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2f4f6a] to-[#1e1a2a] text-white px-8 py-4 md:px-10 md:py-5 rounded-xl font-bold text-sm md:text-base self-start w-full sm:w-auto min-h-[44px]"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Learn More</span>
                    <motion.svg
                      className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      whileHover={{ x: 3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
