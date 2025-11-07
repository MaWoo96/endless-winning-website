'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

export default function ServicesShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      title: 'SEO & Paid Ads',
      description: 'We\'ve deployed over $500k in paid ads and generated over $30m in revenue for our companies and clients.',
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      ),
      features: [
        'Strategic campaign planning',
        'Multi-channel ad management',
        'SEO optimization & analytics',
        'ROI-focused execution',
      ],
    },
    {
      title: 'CFO & Book Keeping',
      description: 'By leveraging expertise with AI we quickly create clear weekly, monthly, quarterly, and annual financial reports that allow you to make data driven decisions.',
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      features: [
        'AI-powered financial reporting',
        'Strategic CFO guidance',
        'Real-time bookkeeping',
        'Data-driven insights',
      ],
    },
    {
      title: 'Website Design',
      description: 'You be the best and we make sure you look the part. Create something beautiful without the hassle of overseas creators.',
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      features: [
        'Custom, brand-aligned designs',
        'Mobile-first development',
        'Fast, optimized performance',
        'US-based team support',
      ],
    },
    {
      title: 'Sales Process Development',
      description: 'We help you evaluate your sales process, add automation, and maximize each opportunity.',
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      ),
      features: [
        'Process evaluation & optimization',
        'Sales automation integration',
        'Pipeline management setup',
        'Conversion rate improvement',
      ],
    },
    {
      title: 'Project & Task Management',
      description: 'We help you create processes that establish clarity in oversight for your organization & employees.',
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
        </svg>
      ),
      features: [
        'Custom workflow design',
        'Team collaboration tools',
        'Progress tracking systems',
        'Accountability frameworks',
      ],
    },
  ];

  // Duplicate for infinite scroll
  const duplicatedServices = [...services, ...services, ...services];

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let isActive = true;

    const scroll = () => {
      if (!isActive) return;

      if (!isPaused && container) {
        container.scrollLeft += 1;

        const maxScroll = container.scrollWidth / 3;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft -= maxScroll;
        }
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      isActive = false;
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 blur-[100px]"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-teal-200 via-blue-200 to-purple-200 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-5 h-5 sm:w-[22px] sm:h-[22px] rounded-full bg-navy-dark flex items-center justify-center">
              <span className="text-white text-xs">→</span>
            </div>
            <span className="text-sm sm:text-base font-light text-navy-dark">
              Our <span className="font-medium">Services</span>
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mb-3 sm:mb-4">
            What We Do Best
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1e1a2a] leading-relaxed max-w-3xl mx-auto">
            Five core services designed to accelerate your growth through AI, automation, and proven systems.
          </p>
        </div>

        {/* Auto-scrolling carousel */}
        <div className="mb-6">
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
            style={{ scrollBehavior: 'auto' }}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => {
              setTimeout(() => setIsPaused(false), 1000);
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex gap-4 md:gap-6 min-w-max">
              {duplicatedServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="w-[280px] md:w-[340px] group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-5 md:p-7 hover:border-[#5856d6] hover:shadow-xl transition-all duration-300 flex-shrink-0"
                  whileHover={{ y: -4 }}
                >
                  <div className="p-3 bg-gradient-to-br from-[#5856d6] to-[#ec4899] rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-base md:text-xl font-bold text-navy-dark mb-2 md:mb-3 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[#1e1a2a] mb-4 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#5856d6] to-[#ec4899] mt-1.5 flex-shrink-0"></div>
                        <span className="text-[#1e1a2a] text-xs md:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs md:text-sm text-gray-500">Touch or hover to pause • Auto-scrolling</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="#booking-form"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#5856d6] to-[#ec4899] text-white px-10 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-lg hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all"
            style={{ textShadow: '0px 0px 4px rgba(0,0,0,0.25)' }}
          >
            <span>Book a Discovery Call</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Custom scrollbar hide */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
