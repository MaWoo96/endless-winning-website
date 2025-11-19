'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function BookDiscoveryCall() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/tj44IWhArqvCPegBTnGT/webhook-trigger/19c873c3-ca4d-4986-9593-25ad14380f6b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          organization: formData.organization,
          phone: formData.phone,
        }),
      });

      if (response.ok) {
        setShowSuccessModal(true);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          organization: '',
          phone: '',
        });
      } else {
        setSubmitError('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-[450px] w-[566px] h-[308px] opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 blur-[100px]"></div>
      </div>
      <div className="absolute right-0 top-[450px] w-[725px] h-[394px] opacity-30 rotate-180">
        <div className="w-full h-full bg-gradient-to-br from-teal-200 via-blue-200 to-purple-200 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-8">
            {/* Header */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <div className="w-5 h-5 sm:w-[22px] sm:h-[22px] rounded-full bg-navy-dark flex items-center justify-center relative">
                  <Image
                    src="/Unlock your next level/arrow-right-02.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="w-3 h-3 sm:w-[14px] sm:h-[14px]"
                  />
                </div>
                <span className="text-sm sm:text-base font-light text-navy-dark">
                  Level Up <span className="font-medium">Today</span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-navy-dark leading-tight px-2 sm:px-0">
                Unlock Your Next Level: Schedule a Strategy Session
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#1e1a2a] leading-relaxed px-2 sm:px-0">
              Share a few details about you and your organization. In this session, we&apos;ll uncover growth opportunities, identify roadblocks, and design a clear plan powered by AI, systems, and automation to accelerate your results.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 sm:gap-4 px-2 sm:px-0">
              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 shrink-0">
                  <Image
                    src="/Unlock your next level/Group 2085663706.svg"
                    alt="Location"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-navy-dark font-medium">Tampa, Florida</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 shrink-0">
                  <Image
                    src="/Unlock your next level/Group 2085663708.svg"
                    alt="Email"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-navy-dark font-medium">contactus@endlesswinning.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div id="booking-form" className="bg-white rounded-[24px] shadow-[0px_2px_52px_0px_rgba(0,0,0,0.08)] p-6 sm:p-7 md:p-9 lg:p-11 max-w-[502px] lg:ml-auto w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-5 md:gap-6">
              {/* Form Header */}
              <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-semibold text-navy-dark text-center mb-2">
                Book a Discovery Call
              </h3>

              {/* Form Fields */}
              <div className="flex flex-col gap-4 sm:gap-4 isolate">
                {/* First Name & Last Name */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="w-full sm:flex-1 h-14 px-4 border border-[#dddddd] rounded-xl text-base placeholder:text-[rgba(26,7,16,0.65)] focus:outline-none focus:border-navy-dark"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="w-full sm:flex-1 h-14 px-4 border border-[#dddddd] rounded-xl text-base placeholder:text-[rgba(26,7,16,0.65)] focus:outline-none focus:border-navy-dark"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full h-14 px-4 border border-[#dddddd] rounded-xl text-base placeholder:text-[rgba(26,7,16,0.65)] focus:outline-none focus:border-navy-dark"
                />

                {/* Organization */}
                <input
                  type="text"
                  placeholder="Organization Name"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  required
                  className="w-full h-14 px-4 border border-[#dddddd] rounded-xl text-base placeholder:text-[rgba(26,7,16,0.65)] focus:outline-none focus:border-navy-dark"
                />

                {/* Phone Number */}
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full h-14 px-4 border border-[#dddddd] rounded-xl text-base placeholder:text-[rgba(26,7,16,0.65)] text-navy-dark focus:outline-none focus:border-navy-dark"
                />
              </div>

              {/* Error Message */}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
                >
                  {submitError}
                </motion.div>
              )}

              {/* Submit Button - Enhanced */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full min-h-[64px] bg-gradient-to-r from-[#5856d6] to-[#ec4899] text-white text-lg md:text-xl font-bold rounded-full shadow-lg mt-3 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{ textShadow: '0px 0px 4px rgba(0,0,0,0.25)' }}
                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? 'Submitting...' : 'Book Discovery Call'}
              </motion.button>

              {/* Terms */}
              <p className="text-xs sm:text-sm text-center text-[rgba(26,7,16,0.65)] leading-relaxed px-2">
                By continuing I agree with the{' '}
                <a href="https://endlesswinning.notion.site/Terms-Conditions-Terms-of-Use-2a450f64638780d3a76df1aed6854f3a" target="_blank" rel="noopener noreferrer" className="text-navy-dark font-medium underline">
                  Terms & Conditions
                </a>{' '}
                and{' '}
                <a href="https://endlesswinning.notion.site/Privacy-Policy-2a450f64638780d794a8f3c910e2ef88" target="_blank" rel="noopener noreferrer" className="text-navy-dark font-medium underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[24px] p-8 sm:p-10 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#5856d6] to-[#ec4899] flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>

              {/* Success Message */}
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-dark text-center mb-4">
                Thank You!
              </h3>
              <p className="text-base sm:text-lg text-center text-navy-dark mb-8 leading-relaxed">
                Your discovery call request has been submitted successfully. We&apos;ll be in touch with you shortly to schedule your session.
              </p>

              {/* Close Button */}
              <motion.button
                onClick={() => setShowSuccessModal(false)}
                className="w-full h-14 bg-gradient-to-r from-[#5856d6] to-[#ec4899] text-white text-lg font-bold rounded-full shadow-lg"
                style={{ textShadow: '0px 0px 4px rgba(0,0,0,0.25)' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
