'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function BookDiscoveryCall() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    phone: '',
    date: '',
    timezone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden">
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
              Share a few details about you and your organization. In this session, we'll uncover growth opportunities, identify roadblocks, and design a clear plan powered by AI, systems, and automation to accelerate your results.
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
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-navy-dark">Tampa, Florida</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 shrink-0">
                  <Image
                    src="/Unlock your next level/Group 2085663707.svg"
                    alt="Phone"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-navy-dark">+(123)-456-789</p>
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
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-navy-dark">endlesswinning@email.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-[24px] shadow-[0px_2px_52px_0px_rgba(0,0,0,0.08)] p-5 sm:p-7 md:p-9 lg:p-11 max-w-[502px] lg:ml-auto w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              {/* Form Header */}
              <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-semibold text-navy-dark text-center">
                Book a Discovery Call
              </h3>

              {/* Form Fields */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {/* First Name & Last Name */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="flex-1 h-12 sm:h-14 px-4 border border-[#dddddd] rounded-xl text-sm sm:text-base placeholder:text-[rgba(26,7,16,0.65)] focus:outline-none focus:border-navy-dark"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="flex-1 h-12 sm:h-14 px-4 border border-[#dddddd] rounded-xl text-sm sm:text-base placeholder:text-[rgba(26,7,16,0.65)] focus:outline-none focus:border-navy-dark"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 sm:h-14 px-4 border border-[#dddddd] rounded-xl text-sm sm:text-base placeholder:text-[rgba(26,7,16,0.65)] focus:outline-none focus:border-navy-dark"
                />

                {/* Organization */}
                <input
                  type="text"
                  placeholder="Organization Name"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full h-12 sm:h-14 px-4 border border-[#dddddd] rounded-xl text-sm sm:text-base placeholder:text-[rgba(26,7,16,0.65)] focus:outline-none focus:border-navy-dark"
                />

                {/* Phone Number with Country Code */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="w-full sm:w-[93px] h-12 sm:h-14 px-4 border border-[#dddddd] rounded-xl flex items-center gap-2 text-sm sm:text-base text-[rgba(26,7,16,0.65)]">
                    <span>+ 813</span>
                    <Image
                      src="/Unlock your next level/arrow-down-01.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 h-12 sm:h-14 px-4 border border-[#dddddd] rounded-xl text-sm sm:text-base placeholder:text-[rgba(26,7,16,0.65)] focus:outline-none focus:border-navy-dark"
                  />
                </div>

                {/* Date & Timezone */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-1 h-12 sm:h-14 px-4 border border-[#dddddd] rounded-xl flex items-center justify-between text-sm sm:text-base text-[rgba(26,7,16,0.65)]">
                    <span>08/20/2025</span>
                    <Image
                      src="/Unlock your next level/arrow-down-01.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                  <div className="flex-1 h-12 sm:h-14 px-4 border border-[#dddddd] rounded-xl flex items-center justify-between text-sm sm:text-base text-[rgba(26,7,16,0.65)]">
                    <span>UTC - 04:00</span>
                    <Image
                      src="/Unlock your next level/arrow-down-01.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full min-h-[48px] sm:min-h-[52px] md:min-h-[56px] bg-gradient-to-r from-[#5856d6] to-[#ec4899] text-white text-sm sm:text-base md:text-lg font-bold rounded-full"
                style={{ textShadow: '0px 0px 4px rgba(0,0,0,0.25)' }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Book Now
              </motion.button>

              {/* Terms */}
              <p className="text-[11px] sm:text-xs text-center text-[rgba(26,7,16,0.65)] leading-4 px-2">
                By continuing I agree with the{' '}
                <a href="#" className="text-navy-dark font-medium underline">
                  Terms & Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-navy-dark font-medium underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
