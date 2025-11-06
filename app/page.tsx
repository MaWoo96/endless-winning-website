'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import WorkingWithUs from '@/components/WorkingWithUs';
import AscendProcess from '@/components/AscendProcess';
import WhoWeHelp from '@/components/WhoWeHelp';
import BookDiscoveryCall from '@/components/BookDiscoveryCall';
import Footer from '@/components/Footer';
import AboutModal from '@/components/AboutModal';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen">
        <Header onAboutClick={() => setIsAboutModalOpen(true)} />
        <Hero />
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
          <BookDiscoveryCall />
        </AnimatedSection>
        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </main>
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </>
  );
}
