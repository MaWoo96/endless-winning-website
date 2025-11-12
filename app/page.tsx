'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';

// Lazy load below-the-fold components for better performance
const ServicesShowcase = dynamic(() => import('@/components/ServicesShowcase'));
const TestimonialsCarousel = dynamic(() => import('@/components/TestimonialsCarousel'));
const WorkingWithUs = dynamic(() => import('@/components/WorkingWithUs'));
const AscendProcess = dynamic(() => import('@/components/AscendProcess'));
const WhoWeHelp = dynamic(() => import('@/components/WhoWeHelp'));
const TeamShowcase = dynamic(() => import('@/components/TeamShowcase'));
const BookDiscoveryCall = dynamic(() => import('@/components/BookDiscoveryCall'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const Footer = dynamic(() => import('@/components/Footer'));
const AboutModal = dynamic(() => import('@/components/AboutModal'));
const ExitIntentPopup = dynamic(() => import('@/components/ExitIntentPopup'));

export default function Home() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen">
        <Header onAboutClick={() => setIsAboutModalOpen(true)} />
        <Hero />
        <AnimatedSection>
          <ServicesShowcase />
        </AnimatedSection>
        <AnimatedSection>
          <TestimonialsCarousel />
        </AnimatedSection>
        <AnimatedSection>
          <WorkingWithUs />
        </AnimatedSection>
        <AnimatedSection>
          <AscendProcess />
        </AnimatedSection>
        <AnimatedSection>
          <WhoWeHelp />
        </AnimatedSection>
        <AnimatedSection>
          <TeamShowcase />
        </AnimatedSection>
        <AnimatedSection>
          <BookDiscoveryCall />
        </AnimatedSection>
        <AnimatedSection>
          <FAQ />
        </AnimatedSection>
        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </main>
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
      <ExitIntentPopup />
    </>
  );
}
