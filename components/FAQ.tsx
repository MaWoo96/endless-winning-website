'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Endless Winning different from other consulting firms?",
      answer: "We don't just advise—we implement. Our ASCEND methodology combines AI integration, systems automation, and proven business strategies to deliver measurable results. We work alongside you as partners, not just consultants, ensuring every solution is tailored to your unique goals and positioned for the AI-driven future."
    },
    {
      question: "How quickly can I expect to see results?",
      answer: "Most clients see initial improvements within the first 30-60 days. Our clients have reported closing over $50,000 in new business within 60 days, generating $10,000+ in a single week through automation, and saving months of time through streamlined systems. Results vary based on your starting point and implementation pace, but our focus is always on delivering quick wins while building sustainable long-term growth."
    },
    {
      question: "Do you work with both businesses and ministries?",
      answer: "Absolutely. We serve businesses across industries—from HVAC and mobile detailing to real estate and professional services—as well as churches and nonprofit organizations. Our strategies adapt to your mission, whether you're focused on profit, impact, or both. We understand the unique challenges each sector faces and tailor our approach accordingly."
    },
    {
      question: "What is AI integration and why does my organization need it?",
      answer: "AI integration means strategically implementing artificial intelligence tools and automation into your daily operations to increase efficiency, reduce costs, and scale faster. Organizations that embrace AI now will have a competitive advantage, while those that wait risk being left behind. We help you identify the right AI opportunities, implement them correctly, and train your team to use them effectively—positioning you to thrive before disruption hits."
    },
    {
      question: "What does the ASCEND process involve?",
      answer: "ASCEND is our proven 6-step methodology: Assess (understand your current state), Simplify (cut noise and identify AI opportunities), Centralize (unify tools and processes), Elevate (deploy AI and amplify what works), Navigate (lead growth with confidence), and Dial-In (track, refine, and scale). This systematic approach ensures we address root issues, not just symptoms, and deliver lasting transformation."
    },
    {
      question: "How much does it cost to work with Endless Winning?",
      answer: "Investment varies based on your needs, scope, and goals. During your discovery call, we'll assess your situation and provide a custom proposal. We focus on ROI—many clients see returns that far exceed their investment within the first few months. Our goal is to create partnerships where the value we deliver significantly outweighs the cost."
    },
    {
      question: "Do I need to have technical expertise to work with you?",
      answer: "Not at all. We handle the technical implementation and training. Our role is to simplify technology and make it work for you, not complicate your life. Whether you're tech-savvy or not, we'll guide you through every step, ensuring you and your team feel confident using the new systems and tools."
    },
    {
      question: "What if I'm not sure AI or automation is right for my business?",
      answer: "That's exactly why we start with a discovery call. We'll assess your current operations, identify specific opportunities, and show you how AI and automation can solve your unique challenges. There's no obligation—just honest insight into what's possible. Many clients initially weren't sure either, but after seeing the potential impact, they became enthusiastic advocates."
    },
    {
      question: "Can you help with marketing and sales automation?",
      answer: "Yes. We specialize in building automated systems for lead generation, follow-up sequences, outbound campaigns, and customer relationship management. Our clients have automated text message campaigns generating $10,000+ in a week, built outbound sales teams closing $50,000+ in estimates, and streamlined entire marketing funnels for hands-free growth."
    },
    {
      question: "What happens after the initial implementation?",
      answer: "We don't disappear after launch. The Dial-In phase of our ASCEND process focuses on tracking performance, refining systems, and scaling what works. We offer ongoing support options to ensure your systems continue delivering results and evolve with your growing needs. Our goal is long-term partnership and sustainable success."
    },
    {
      question: "How do I get started?",
      answer: "Simple—book a discovery call using the form above. In this free, no-pressure session, we'll discuss your current challenges, explore growth opportunities, and map out a clear plan for your next level. Whether you're ready to move forward immediately or just exploring options, this conversation will provide valuable insights into your path forward."
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#F5F5F7] to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 blur-[100px]"></div>
      </div>
      <div className="absolute right-0 bottom-1/4 w-[500px] h-[500px] opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-teal-200 via-blue-200 to-purple-200 blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-5 h-5 sm:w-[22px] sm:h-[22px] rounded-full bg-navy-dark flex items-center justify-center">
              <span className="text-white text-xs">?</span>
            </div>
            <span className="text-sm sm:text-base font-light text-navy-dark">
              Got <span className="font-medium">Questions?</span>
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1e1a2a] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about working with Endless Winning and how we help you close the gap.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 sm:px-6 md:px-8 py-5 sm:py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-50/50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="text-base sm:text-lg md:text-xl font-semibold text-navy-dark leading-relaxed pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 mt-1"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-navy-dark"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6">
                      <p className="text-sm sm:text-base md:text-lg text-[#1e1a2a] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-lg text-navy-dark mb-4 sm:mb-6">
            Still have questions? Let's talk.
          </p>
          <a
            href="#booking-form"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#5856d6] to-[#ec4899] text-white px-10 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-lg hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all"
            style={{ textShadow: '0px 0px 4px rgba(0,0,0,0.25)' }}
          >
            <span>Book Your Discovery Call</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
