'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:h-[857px] flex items-center bg-off-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-medium/10 rounded-full blur-3xl"></div>

        {/* Mobile Background - Troy's faded image - full screen, positioned left */}
        <div className="lg:hidden absolute inset-0 opacity-[0.18] pointer-events-none">
          <Image
            src="/Speaking/9O8A5238-Enhanced-NR.jpeg"
            alt=""
            fill
            className="object-cover object-left"
            priority
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Welcome Badge */}
            <motion.div
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-navy-dark/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-navy-medium text-white rounded-full text-xs">
                →
              </span>
              <span className="text-xs sm:text-sm font-semibold text-navy-dark">Welcome! 👋</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-4 lg:px-0">
                <span className="gradient-text block mb-1 sm:mb-2">Close the Gap.</span>
                <span className="text-navy-dark block">Where you are → Where you&apos;re called to be.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-navy-dark/80 max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0 leading-relaxed">
                We help businesses and ministries position themselves to thrive in the age of AI – before disruption hits.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start px-4 lg:px-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }} className="w-full sm:w-auto">
                <Link
                  href="#results"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 text-base md:text-lg font-bold border-2 border-navy-medium rounded-xl gradient-text hover:bg-navy-medium/5 transition-all duration-300 shadow-md w-full sm:w-auto"
                >
                  <span>See Real Results</span>
                  <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }} className="w-full sm:w-auto">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 text-base md:text-lg font-bold bg-gradient-to-r from-[#5856d6] to-[#ec4899] text-white rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg w-full sm:w-auto"
                  style={{ textShadow: '0px 0px 4px rgba(0,0,0,0.25)' }}
                >
                  <span>Book a Discovery Call</span>
                  <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative w-full aspect-[3/4] max-w-sm xl:max-w-md ml-auto">
              {/* Blue blur effect for blending edges - outer */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] z-0">
                <div className="w-full h-full rounded-full bg-navy-medium/50 opacity-85 blur-[100px]"></div>
              </div>

              {/* Teal blur effect behind image - inner */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[255px] h-[255px] z-0">
                <div className="w-full h-full rounded-full bg-teal/50 blur-[50px]"></div>
              </div>

              {/* Troy's Image with circular mask/vignette effect */}
              <div className="relative w-full h-full z-10" style={{
                maskImage: 'radial-gradient(ellipse 80% 70% at 50% 35%, black 30%, rgba(0,0,0,0.8) 50%, transparent 85%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 35%, black 30%, rgba(0,0,0,0.8) 50%, transparent 85%)'
              }}>
                <Image
                  src="/Troy_Headshots/Troy-No-BG.png"
                  alt="Troy - Endless Winning"
                  fill
                  className="object-contain object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-navy-dark/70 uppercase tracking-wider">Scroll</span>
        <svg className="w-5 h-5 text-navy-medium" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
