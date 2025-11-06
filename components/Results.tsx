'use client';

import Link from 'next/link';

export default function Results() {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: 'Get Unshakeable Clarity',
      description: 'A dream without a plan is just a delusion. Know what to do—and what to do now—with bold, purpose-driven direction.',
      size: 'large', // Takes up more space in bento grid
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: 'Accelerated Results',
      description: 'Unstoppable growth powered by streamlined, data-backed systems—built for AI, automation, and scale. Designed for your future.',
      size: 'medium',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: 'Real-World Impact',
      description: 'From boardrooms to sanctuaries, our work drives real transformation - meaningful ROI, deeper engagement, and lasting growth.',
      size: 'medium',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      ),
      title: 'Future Proof Your Organization',
      description: 'AI is reshaping entire industries. The organizations that don\'t position themselves will be left behind. The best time to future-proof was yesterday. The next best time is now.',
      size: 'xlarge',
    },
  ];

  return (
    <section id="results" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-dark/10 px-4 py-2 rounded-full mb-4">
            <span className="w-8 h-8 flex items-center justify-center bg-navy-medium text-white rounded-full text-sm">
              →
            </span>
            <span className="text-sm font-semibold text-navy-dark">Results to Expect</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            What Working with Us Looks Like
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray max-w-3xl mx-auto">
            We don&apos;t just build systems — we build momentum. Here&apos;s what our clients experience after partnering with Endless Winning.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`
                card p-6 sm:p-8 group cursor-pointer
                ${benefit.size === 'xlarge' ? 'lg:col-span-2 bg-navy-dark text-white' : ''}
                ${benefit.size === 'large' ? 'md:col-span-2 lg:col-span-1 border-2 border-teal' : ''}
                ${benefit.size === 'medium' ? 'bg-white' : ''}
              `}
            >
              {/* Icon */}
              <div className={`
                inline-flex p-3 rounded-xl mb-4
                ${benefit.size === 'xlarge' ? 'bg-white/10 text-white' : 'bg-navy-dark/10 text-navy-medium'}
              `}>
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className={`
                text-xl sm:text-2xl md:text-3xl font-bold mb-3
                ${benefit.size === 'xlarge' ? 'text-white' : 'text-navy-dark'}
              `}>
                {benefit.title}
              </h3>
              <p className={`
                text-sm sm:text-base leading-relaxed
                ${benefit.size === 'xlarge' ? 'text-white/80' : 'text-gray'}
              `}>
                {benefit.description}
              </p>

              {/* Optional CTA for large card */}
              {benefit.size === 'xlarge' && (
                <Link href="#contact" className="inline-flex items-center gap-2 mt-6 text-white hover:text-teal transition-colors">
                  <span className="font-semibold">Get Started</span>
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
