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

            {/* Phone Mockup */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] mx-auto mb-6 sm:mb-8" style={{ aspectRatio: '448/575' }}>
              <Image
                src="/Who we help/7e0e14cfdc897a0675496bb6d08d9d3a08094d6e.png"
                alt="Phone Mockup"
                fill
                className="object-contain"
              />
            </div>

            {/* Features Grid */}
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

          {/* Desktop Layout (absolute positioning) - hidden on mobile */}
          <div className="hidden lg:block relative h-[900px]">
            {/* Icon - positioned at top:60px from Figma */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[60px] z-10">
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

            {/* Title and Description - positioned at top:137px from Figma */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="absolute left-1/2 -translate-x-1/2 top-[137px] w-[806px] text-center z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-[36px] font-semibold text-navy-dark leading-[28px] mb-4">
                  {title}
                </h3>
                <p className="text-lg leading-[28px] text-navy-dark whitespace-pre-line">
                  {description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Left Features - adjusted positioning for larger phone */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${activeTab}`}
                className="absolute left-[80px] top-[340px] flex flex-col gap-[150px] z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                <div className="flex flex-col items-center gap-2 w-[205px]">
                  <Image
                    src="/Who we help/checkmark-square-02.svg"
                    alt=""
                    width={35}
                    height={35}
                  />
                  <p className="text-xl font-medium text-navy-dark text-center leading-6 whitespace-pre-line">
                    {features[0].text}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 w-[205px]">
                  <Image
                    src="/Who we help/checkmark-square-02.svg"
                    alt=""
                    width={35}
                    height={35}
                  />
                  <p className="text-xl font-medium text-navy-dark text-center leading-6 whitespace-pre-line">
                    {features[2].text}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Center Phone Mockup - scaled up dramatically to match reference */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[20px] w-[1200px] h-[1540px] shrink-0 z-10" style={{ aspectRatio: '448/575' }}>
              <Image
                src="/Who we help/7e0e14cfdc897a0675496bb6d08d9d3a08094d6e.png"
                alt="Phone Mockup"
                fill
                className="object-contain"
              />
            </div>

            {/* Right Features - adjusted positioning for larger phone */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`right-${activeTab}`}
                className="absolute left-[1080px] top-[340px] flex flex-col gap-[150px] z-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                <div className="flex flex-col items-center gap-2 w-[205px]">
                  <Image
                    src="/Who we help/checkmark-square-02.svg"
                    alt=""
                    width={35}
                    height={35}
                  />
                  <p className="text-xl font-medium text-navy-dark text-center leading-6 whitespace-pre-line">
                    {features[1].text}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 w-[205px]">
                  <Image
                    src="/Who we help/checkmark-square-02.svg"
                    alt=""
                    width={35}
                    height={35}
                  />
                  <p className="text-xl font-medium text-navy-dark text-center leading-6 whitespace-pre-line">
                    {features[3].text}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
