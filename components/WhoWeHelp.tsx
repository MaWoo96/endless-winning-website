'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhoWeHelp() {
  const [activeTab, setActiveTab] = useState<'business' | 'ministry'>('business');

  const businessFeatures = [
    { text: "AI-powered\nprocess mapping" },
    { text: "Optimized sales\n& ops workflows" },
    { text: "End-to-end\nsystem integration" },
    { text: "Data clarity &\ndecision intelligence" }
  ];

  const ministryFeatures = [
    { text: "Volunteer\nmanagement systems" },
    { text: "Engagement &\nfollow-up automation" },
    { text: "Unified communication\nplatforms" },
    { text: "Mission-aligned\ndata insights" }
  ];

  const features = activeTab === 'business' ? businessFeatures : ministryFeatures;
  const title = activeTab === 'business'
    ? 'Growth-Focused Organizations'
    : 'Mission-Driven Ministries';
  const description = activeTab === 'business'
    ? 'From scaling startups to mature enterprises, we enable sustainable growth\nthrough AI, automation, and strategic systems.'
    : 'From local churches to global ministries, we help you amplify impact\nthrough streamlined operations and intelligent engagement.';

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-5 h-5 sm:w-[22px] sm:h-[22px] rounded-full bg-navy-dark flex items-center justify-center">
              <span className="text-white text-xs">→</span>
            </div>
            <span className="text-sm sm:text-base font-light text-black">
              Partners We <span className="font-medium text-navy-dark">Serve</span>
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-dark mb-3 sm:mb-4 px-4 leading-tight">
            Who We Help
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-light text-neutral-950 mb-2 leading-relaxed px-4">
            We partner with both growth-focused companies and mission-driven organizations.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-normal text-neutral-950 leading-relaxed px-4">
            Use the toggle to see how we serve each uniquely.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <div className="relative w-[236px] h-[35px] bg-white border border-navy-dark/50 rounded-full">
            {/* Slider background with motion */}
            <motion.div
              className="absolute top-[2px] h-[31px] w-[116px] bg-gradient-to-r from-navy-dark to-[#8ab2b2] rounded-full"
              animate={{ left: activeTab === 'business' ? '2px' : '118px' }}
              transition={{ type: 'spring', stiffness: 350, damping: 35 }}
            />
            {/* Business button */}
            <button
              onClick={() => setActiveTab('business')}
              className={`absolute left-0 top-0 w-[118px] h-full flex items-center justify-center text-base font-normal transition-colors duration-300 ${
                activeTab === 'business' ? 'text-white' : 'text-navy-dark'
              }`}
            >
              Business
            </button>
            {/* Ministry button */}
            <button
              onClick={() => setActiveTab('ministry')}
              className={`absolute right-0 top-0 w-[118px] h-full flex items-center justify-center text-base font-normal transition-colors duration-300 ${
                activeTab === 'ministry' ? 'text-white' : 'text-navy-dark'
              }`}
            >
              Ministry
            </button>
          </div>
        </div>

        {/* Main Content Card - mobile-first responsive design */}
        <div className="max-w-[1260px] mx-auto bg-white border border-navy-dark/15 rounded-[24px] overflow-hidden relative">
          {/* Background gradient blur at bottom */}
          <div className="absolute bottom-[-150px] sm:bottom-[-250px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[499px] sm:h-[499px] opacity-20 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-t from-pink-300 via-purple-300 to-transparent blur-[80px] sm:blur-[120px]"></div>
          </div>

          {/* Mobile Layout (stacked vertically) */}
          <div className="lg:hidden flex flex-col py-6 sm:py-8 md:py-10 px-4">
            {/* Icon */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#8ab2b2] to-[#BDEBEB] flex items-center justify-center">
                <Image
                  src="/Who we help/analytics-up.svg"
                  alt=""
                  width={37}
                  height={37}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                />
              </div>
            </div>

            {/* Title and Description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="text-center mb-6 sm:mb-8 px-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-navy-dark leading-tight mb-3 sm:mb-4">
                  {title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-navy-dark max-w-md mx-auto">
                  {description.replace(/\n/g, ' ')}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Features Grid - Centered */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-${activeTab}`}
                className="grid grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 text-center p-2">
                    <Image
                      src="/Who we help/checkmark-square-02.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                    />
                    <p className="text-xs sm:text-sm md:text-base font-medium text-navy-dark leading-snug">
                      {feature.text.replace(/\n/g, ' ')}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Layout - Phone centered in circle with features */}
          <div className="hidden lg:block relative pt-12 pb-[400px]">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-[69px] h-[69px] rounded-full bg-gradient-to-br from-[#8ab2b2] to-[#BDEBEB] flex items-center justify-center">
                <Image
                  src="/Who we help/analytics-up.svg"
                  alt=""
                  width={37}
                  height={37}
                  className="w-9 h-9"
                />
              </div>
            </div>

            {/* Title and Description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="text-center mb-10 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-4xl font-semibold text-navy-dark mb-4">
                  {title}
                </h3>
                <p className="text-lg leading-relaxed text-navy-dark">
                  {description.replace(/\n/g, ' ')}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Features and Phone Layout - with absolute positioned phone */}
            <div className="relative max-w-6xl mx-auto">
              <div className="grid grid-cols-3 gap-8 relative">
                {/* Left Features */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`left-${activeTab}`}
                    className="flex flex-col gap-12 pt-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  >
                    <div className="flex flex-col items-center gap-3 text-center">
                      <Image
                        src="/Who we help/checkmark-square-02.svg"
                        alt=""
                        width={40}
                        height={40}
                      />
                      <p className="text-lg font-medium text-navy-dark leading-6">
                        {features[0].text.replace(/\n/g, ' ')}
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-3 text-center">
                      <Image
                        src="/Who we help/checkmark-square-02.svg"
                        alt=""
                        width={40}
                        height={40}
                      />
                      <p className="text-lg font-medium text-navy-dark leading-6">
                        {features[2].text.replace(/\n/g, ' ')}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Center Column - Empty for spacing */}
                <div></div>

                {/* Right Features */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`right-${activeTab}`}
                    className="flex flex-col gap-12 pt-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  >
                    <div className="flex flex-col items-center gap-3 text-center">
                      <Image
                        src="/Who we help/checkmark-square-02.svg"
                        alt=""
                        width={40}
                        height={40}
                      />
                      <p className="text-lg font-medium text-navy-dark leading-6">
                        {features[1].text.replace(/\n/g, ' ')}
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-3 text-center">
                      <Image
                        src="/Who we help/checkmark-square-02.svg"
                        alt=""
                        width={40}
                        height={40}
                      />
                      <p className="text-lg font-medium text-navy-dark leading-6">
                        {features[3].text.replace(/\n/g, ' ')}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Phone Mockup - Absolutely positioned to align with circle, large with bottom half hidden */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[140px] w-full max-w-[700px] z-20" style={{ aspectRatio: '448/575' }}>
                <Image
                  src="/Who we help/7e0e14cfdc897a0675496bb6d08d9d3a08094d6e.png"
                  alt="Phone Mockup"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
