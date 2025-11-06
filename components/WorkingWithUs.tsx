'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function WorkingWithUs() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-5 h-5 rounded-full bg-navy-dark flex items-center justify-center">
              <span className="text-white text-xs">→</span>
            </div>
            <span className="text-sm sm:text-base font-light">Results to Expect</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mb-3 sm:mb-4 px-4 leading-tight">
            What Working with Us Looks Like
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-light text-neutral-950 max-w-3xl mx-auto px-4 leading-relaxed">
            We don't just build systems — we build momentum. Here's what our clients experience after partnering with Endless Winning.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* Card 1: Get Unshakeable Clarity */}
          <motion.div
            className="bg-[#F5F5F7] rounded-[20px] p-6 sm:p-8 lg:p-9 relative overflow-hidden min-h-[280px] sm:min-h-[320px] lg:min-h-[337px]"
            whileHover={{ scale: 1.01, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {/* Background decorative circles */}
            <div className="absolute -left-20 -top-40 w-64 h-64 rounded-full bg-gray-300/30 blur-3xl"></div>
            <div className="absolute right-[-100px] bottom-[-50px] w-64 h-64 rounded-full bg-gray-300/30 blur-3xl"></div>

            <div className="relative z-10 flex flex-col gap-8 sm:gap-12 lg:gap-[60px]">
              {/* Icon */}
              <div className="border border-navy-dark rounded-full p-3 sm:p-4 w-fit">
                <Image
                  src="/Working with us/route-02.svg"
                  alt=""
                  width={37}
                  height={37}
                  className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-semibold text-navy-dark leading-tight">
                  Get Unshakeable Clarity
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-navy-dark opacity-70 leading-relaxed">
                  A dream without a plan is just a delusion. Know what to do—and what to do now—with bold, purpose-driven direction.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Accelerated Results */}
          <motion.div
            className="bg-white rounded-[20px] p-6 sm:p-8 lg:p-9 relative overflow-hidden min-h-[280px] sm:min-h-[320px] lg:min-h-[337px] border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.01, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative z-10 flex flex-col gap-8 sm:gap-12 lg:gap-[60px]">
              {/* Icon and Get Started Link */}
              <div className="flex items-start justify-between">
                <div className="border border-navy-dark rounded-full p-3 sm:p-4">
                  <Image
                    src="/Working with us/sale-tag-02.svg"
                    alt=""
                    width={37}
                    height={37}
                    className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
                  />
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-navy-dark font-semibold text-xs sm:text-sm hover:gap-3 transition-all min-h-[44px]"
                >
                  <span>Get Started</span>
                  <Image
                    src="/Working with us/arrow-up-right-01.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </Link>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-semibold text-navy-dark leading-tight">
                  Accelerated Results
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-navy-dark opacity-70 leading-relaxed">
                  Unstoppable growth powered by streamlined, data-backed systems—built for AI, automation, and scale. <span className="font-semibold text-navy-dark opacity-100">Designed for your future.</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Real-World Impact */}
          <motion.div
            className="bg-white rounded-[20px] p-6 sm:p-8 lg:p-9 relative overflow-hidden min-h-[280px] sm:min-h-[320px] lg:min-h-[337px] border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.01, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative z-10 flex flex-col gap-8 sm:gap-12 lg:gap-[60px]">
              {/* Icon and Get Started Link */}
              <div className="flex items-start justify-between">
                <div className="border border-navy-dark rounded-full p-3 sm:p-4">
                  <Image
                    src="/Working with us/Vector.svg"
                    alt=""
                    width={33}
                    height={33}
                    className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
                  />
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-navy-dark font-semibold text-xs sm:text-sm hover:gap-3 transition-all min-h-[44px]"
                >
                  <span>Get Started</span>
                  <Image
                    src="/Working with us/arrow-up-right-01.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </Link>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-semibold text-navy-dark leading-tight">
                  Real-World Impact
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-navy-dark opacity-70 leading-relaxed">
                  From boardrooms to sanctuaries, our work drives real transformation - meaningful ROI, deeper engagement, and lasting growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Future Proof Your Organization */}
          <motion.div
            className="bg-navy-dark rounded-[20px] p-6 sm:p-8 lg:p-9 relative overflow-hidden min-h-[280px] sm:min-h-[320px] lg:min-h-[337px]"
            whileHover={{ scale: 1.01, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {/* Background decorative circles */}
            <div className="absolute -left-28 bottom-[-100px] w-64 h-64 rounded-full bg-navy-medium/20 blur-3xl"></div>
            <div className="absolute right-[-100px] -top-36 w-64 h-64 rounded-full bg-navy-medium/20 blur-3xl"></div>

            <div className="relative z-10 flex flex-col gap-8 sm:gap-12 lg:gap-[60px]">
              {/* Icon */}
              <div className="border border-white/20 rounded-full p-3 sm:p-4 w-fit shadow-[inset_-2px_-3px_8px_0px_rgba(255,255,255,0.2)]">
                <Image
                  src="/Working with us/trade-up.svg"
                  alt=""
                  width={37}
                  height={37}
                  className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-semibold text-white leading-tight">
                  Future Proof Your Organization
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white opacity-70 leading-relaxed">
                  AI is reshaping entire industries. The organizations that don't position themselves will be left behind. The best time to future-proof was yesterday. The next best time is now.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
