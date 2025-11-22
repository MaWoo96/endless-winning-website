'use client';

import { motion } from 'motion/react';

interface WelcomeStepProps {
  firstName: string;
  onNext: () => void;
}

export default function WelcomeStep({ firstName, onNext }: WelcomeStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center text-center px-4"
    >
      {/* Welcome Icon */}
      <div className="w-20 h-20 bg-gradient-to-br from-navy-dark to-teal rounded-full flex items-center justify-center mb-6">
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      </div>

      {/* Welcome Text */}
      <h1 className="text-3xl sm:text-4xl font-bold text-navy-dark mb-4">
        Welcome to Endless Winning{firstName ? `, ${firstName}` : ''}!
      </h1>

      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Let&apos;s connect your bank accounts so we can start managing your books
        automatically. This takes about <span className="font-semibold text-navy-dark">2 minutes</span>.
      </p>

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Bank-level encryption
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          Read-only access
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Cancel anytime
        </div>
      </div>

      {/* CTA Button */}
      <motion.button
        onClick={onNext}
        className="btn-primary"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        Get Started
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}
