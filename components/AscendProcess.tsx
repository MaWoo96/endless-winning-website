'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';

export default function AscendProcess() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "400px" });
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile and client side
  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 768);
  }, []);

  const steps = [
    {
      letter: "A",
      title: "Assess",
      italicPart: "Get clarity.",
      regularPart: " Discover where you are and what's holding "
    },
    {
      letter: "S",
      title: "Simplify",
      italicPart: "Cut the noise.",
      regularPart: " Identify AI opportunities and eliminate"
    },
    {
      letter: "C",
      title: "Centralize",
      italicPart: "Bring alignment.",
      regularPart: " Unify tools, processes, and communication."
    },
    {
      letter: "E",
      title: "Elevate",
      italicPart: "Deploy AI.",
      regularPart: " Amplify what works and remove what doesn't."
    },
    {
      letter: "N",
      title: "Navigate",
      italicPart: "Lead the growth. Equip your team with confidence and accountability.",
      regularPart: ""
    },
    {
      letter: "D",
      title: "Dial-In",
      italicPart: "Lock it in.",
      regularPart: " Track, refine, and scale what moves the needle."
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-br from-[#6a94a8] via-[#536f84] to-[#7a8594]">
      {/* Decorative blur ellipses - optimized for mobile */}
      {isInView && isClient && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`absolute rounded-full bg-purple-500/30 ${
              isMobile
                ? 'top-[91px] left-[172px] w-[164px] h-[152px] blur-[60px]'
                : 'top-[182px] left-[345px] w-[329px] h-[304px] blur-[120px]'
            }`}
            style={{ willChange: 'opacity', transform: 'translate3d(0,0,0)' }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`absolute rounded-full bg-blue-500/30 ${
              isMobile
                ? 'top-[139px] -left-[98px] w-[229px] h-[211px] blur-[60px]'
                : 'top-[278px] -left-[197px] w-[458px] h-[423px] blur-[120px]'
            }`}
            style={{ willChange: 'opacity', transform: 'translate3d(0,0,0)' }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`absolute rounded-full bg-teal-400/30 ${
              isMobile
                ? 'top-[287px] right-[50px] w-[246px] h-[210px] blur-[60px]'
                : 'top-[574px] right-[100px] w-[493px] h-[420px] blur-[120px]'
            }`}
            style={{ willChange: 'opacity', transform: 'translate3d(0,0,0)' }}
          />
          {!isMobile && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute -top-[115px] -left-[183px] w-[366px] h-[423px] rounded-full bg-purple-400/30 blur-[120px]"
                style={{ willChange: 'opacity', transform: 'translate3d(0,0,0)' }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute -top-[145px] right-[50px] w-[458px] h-[423px] rounded-full bg-blue-400/30 blur-[120px]"
                style={{ willChange: 'opacity', transform: 'translate3d(0,0,0)' }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute bottom-[100px] -left-[120px] w-[317px] h-[478px] rounded-full bg-pink-500/30 blur-[120px]"
                style={{ willChange: 'opacity', transform: 'translate3d(0,0,0)' }}
              />
            </>
          )}
        </>
      )}

      {/* Gradient mesh overlay - only on desktop */}
      {isInView && isClient && !isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0"
          style={{ willChange: 'opacity' }}
        >
          <Image
            src="/Ascend/Gradient.svg"
            alt=""
            fill
            className="object-cover"
            loading="lazy"
          />
        </motion.div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-[22px] h-[22px] rounded-full bg-navy-dark flex items-center justify-center">
              <span className="text-white text-xs">→</span>
            </div>
            <span className="text-base font-light text-black">
              The <span className="font-normal">Proccess</span>
            </span>
          </div>

          {/* ASCEND Title with gradient text matching Figma */}
          <h2
            className="text-[64px] font-black tracking-[0.2em] text-center mb-8 leading-none"
            style={{
              background: 'linear-gradient(90deg, #BDEBEB 0%, #2F4F6A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ASCEND
          </h2>
        </div>

        {/* Steps - max-w-[732px] to match Figma exactly */}
        <div className="max-w-[732px] mx-auto flex flex-col gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: isMobile ? 0 : index * 0.08, ease: "easeOut" }}
              className={`bg-white/20 rounded-[24px] px-10 py-4 overflow-hidden ${
                isMobile ? '' : 'backdrop-blur-sm'
              }`}
              style={isMobile ? { willChange: 'opacity, transform' } : {}}
            >
              <div className="flex items-center gap-6">
                {/* Letter with gradient */}
                <div
                  className="text-[56px] font-black leading-[60px] w-11 shrink-0"
                  style={{
                    background: 'linear-gradient(to right, #ffffff 15.625%, #2f4f6a 200%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {step.letter}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[#BDEBEB] text-2xl font-bold leading-[40px] mb-0">
                    {step.title}
                  </h3>
                  <p className="text-white text-[18px] leading-[24px] font-semibold">
                    <span className="italic font-semibold">{step.italicPart}</span>
                    {step.regularPart && <span>{step.regularPart}</span>}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button with exact Figma styling */}
        <div className="flex justify-center mt-12">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5856d6] to-[#ec4899] text-white px-6 py-2 rounded-full font-semibold text-xs shadow-[0px_0px_42px_0px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity"
            style={{ textShadow: '0px 0px 4px rgba(0,0,0,0.25)' }}
          >
            <span>Book a Discovery Call</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
