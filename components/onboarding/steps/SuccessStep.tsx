'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

interface SuccessStepProps {
  firstName: string;
}

// Simple confetti particle component
function ConfettiParticle({ delay, x, color, xOffset }: { delay: number; x: number; color: string; xOffset: number }) {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{ backgroundColor: color, left: `${x}%` }}
      initial={{ y: -20, opacity: 1, scale: 0 }}
      animate={{
        y: [0, -100, 400],
        opacity: [1, 1, 0],
        scale: [0, 1, 0.5],
        rotate: [0, 180, 360],
        x: [0, xOffset],
      }}
      transition={{
        duration: 2,
        delay,
        ease: 'easeOut',
      }}
    />
  );
}

export default function SuccessStep({ firstName }: SuccessStepProps) {
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after animation completes
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleGoToDashboard = () => {
    router.push('/dashboard');
  };

  // Generate confetti particles with memoized random values
  const confettiParticles = useMemo(() => {
    const colors = ['#7C3AED', '#EC4899', '#EF4444', '#8AB2B5', '#2F4F6A'];
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      delay: (i * 0.5) / 30, // Deterministic delay based on index
      x: (i * 100) / 30 + ((i * 7) % 10), // Deterministic spread
      color: colors[i % colors.length],
      xOffset: ((i % 2 === 0 ? 1 : -1) * (i * 3)) % 50, // Deterministic x offset
    }));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col items-center text-center px-4 overflow-hidden"
    >
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {confettiParticles.map((particle) => (
            <ConfettiParticle
              key={particle.id}
              delay={particle.delay}
              x={particle.x}
              color={particle.color}
              xOffset={particle.xOffset}
            />
          ))}
        </div>
      )}

      {/* Success Checkmark */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 15,
          delay: 0.1,
        }}
        className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg"
      >
        <motion.svg
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-12 h-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
      </motion.div>

      {/* Success Text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-3xl sm:text-4xl font-bold text-navy-dark mb-4"
      >
        You&apos;re All Set{firstName ? `, ${firstName}` : ''}!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-gray-600 mb-8 max-w-md"
      >
        Your transactions are syncing now. We&apos;ll have your books ready within{' '}
        <span className="font-semibold text-navy-dark">24 hours</span>.
      </motion.p>

      {/* What happens next */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-sm mb-8"
      >
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          What happens next
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 text-left">
            <div className="w-6 h-6 bg-teal/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                className="w-3.5 h-3.5 text-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-600">
              We&apos;ll import your transactions from the past 90 days
            </p>
          </div>
          <div className="flex items-start gap-3 text-left">
            <div className="w-6 h-6 bg-teal/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                className="w-3.5 h-3.5 text-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-600">
              Our AI will categorize and organize everything
            </p>
          </div>
          <div className="flex items-start gap-3 text-left">
            <div className="w-6 h-6 bg-teal/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                className="w-3.5 h-3.5 text-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-600">
              You&apos;ll get a notification when your dashboard is ready
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        onClick={handleGoToDashboard}
        className="btn-primary"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        Go to Dashboard
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
