'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ChatDemo } from '@/components/demos/ChatDemo';
import { CFOChatDemo } from '@/components/demos/CFOChatDemo';

export default function AIDemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-8 sm:mb-12"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#5856d6] bg-[#5856d6]/10 rounded-full"
          >
            AI-Powered Solutions
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1A2A] mb-4">
            See AI in Action
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how we use AI as your strategic partner—transforming complex challenges
            into clear, actionable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Transaction Lookup Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-center text-sm font-medium text-gray-500 mb-2">Instant Transaction Insights</p>
            <ChatDemo />
          </motion.div>

          {/* Financial Summary Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-center text-sm font-medium text-gray-500 mb-2">Real-Time Financial Summary</p>
            <CFOChatDemo />
          </motion.div>
        </div>

        {/* Optional CTA below demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500">
            Ready to transform your operations?{' '}
            <a
              href="#book-discovery-call"
              className="text-[#5856d6] hover:text-[#ec4899] font-medium transition-colors"
            >
              Book a discovery call →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
