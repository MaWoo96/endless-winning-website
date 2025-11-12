'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ExitIntentPopupProps {
  onClose?: () => void;
}

export default function ExitIntentPopup({ onClose }: ExitIntentPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Don't show if already shown in this session
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger on desktop when cursor leaves from top
      if (e.clientY <= 0 && !hasShown && window.innerWidth >= 768) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Add a small delay before activating to avoid triggering on page load
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  // Mobile: Show after 45 seconds if not shown yet
  useEffect(() => {
    if (hasShown || window.innerWidth >= 768) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasShown(true);
    }, 45000); // 45 seconds

    return () => clearTimeout(timer);
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!email || !email.trim()) {
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSuccess(true);
      setEmail('');

      // Auto-close after 3 seconds on success
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] overflow-y-auto">
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-navy-dark/80 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal Container */}
          <div className="min-h-full flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
            {/* Modal Card */}
            <motion.div
              className="relative w-full max-w-[600px] bg-white rounded-[24px] shadow-[0px_4px_50px_0px_rgba(0,0,0,0.19)] my-4 sm:my-8 overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
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

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10">
                {!isSuccess ? (
                  <>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-5 h-5 rounded-full bg-navy-dark flex items-center justify-center">
                        <span className="text-white text-xs">🎁</span>
                      </div>
                      <span className="text-sm font-light text-navy-dark">
                        Before You Go - <span className="font-medium">Get This Free</span>
                      </span>
                    </div>

                    {/* Heading */}
                    <h2
                      className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-4"
                      style={{
                        background: 'linear-gradient(90deg, #2f4f6a 0%, #8ab2b2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Get Your Free AI Readiness Assessment
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#1e1a2a] leading-relaxed mb-6">
                      Discover where your business stands with AI and get a personalized roadmap to close the gap. This 3-minute assessment reveals:
                    </p>

                    {/* Benefits List */}
                    <ul className="space-y-3 mb-8">
                      {[
                        'Your current AI readiness score',
                        'Top opportunities for AI integration',
                        'Custom recommendations for your industry',
                        'Action steps to implement this week'
                      ].map((benefit, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <svg className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm sm:text-base text-navy-dark">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Email Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          required
                          className="w-full px-4 py-3 sm:py-4 rounded-xl border-2 border-navy-dark/20 focus:border-navy-dark focus:outline-none transition-colors text-sm sm:text-base"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting || !email.trim()}
                        className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white rounded-xl shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #EF4444 100%)',
                          textShadow: '0px 0px 4px rgba(0,0,0,0.25)'
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>{isSubmitting ? 'Sending...' : 'Get My Free Assessment'}</span>
                        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M9 5l7 7-7 7"></path>
                        </svg>
                      </motion.button>
                    </form>

                    {/* Privacy Note */}
                    <p className="text-xs text-navy-dark/60 text-center mt-4">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </>
                ) : (
                  /* Success State */
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-navy-dark mb-2">
                      Check Your Email! 📧
                    </h3>
                    <p className="text-base text-navy-dark/80">
                      Your AI Readiness Assessment is on its way.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
