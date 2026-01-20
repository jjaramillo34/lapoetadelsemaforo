'use client';

import { useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrafficLight from './components/TrafficLight';
import BiographySection from './components/BiographySection';
import FeatureCards from './components/FeatureCards';
import Gallery from './components/Gallery';
import BookSection from './components/BookSection';
import PrologueSection from './components/PrologueSection';
import BookReviewSection from './components/BookReviewSection';
import TypewriterQuote from './components/TypewriterQuote';
import PoemsPreview from './components/PoemsPreview';
import MainTextSection from './components/MainTextSection';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  useEffect(() => {
    const initFloatingIcons = async () => {
      const { animate } = await import('animejs');
      
      // Floating animation for icons
      const icons = document.querySelectorAll('.floating-icon');
      icons.forEach((icon, index) => {
        animate(icon, {
          translateY: [0, -20],
          duration: 2000 + index * 100,
          delay: index * 200,
          direction: 'alternate',
          loop: true,
          easing: 'easeInOutSine',
        });
      });
    };

    initFloatingIcons();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white w-full flex flex-col relative">
      <AnimatedBackground />
      <Header />
      <main className="flex-1 w-full relative z-10">
        <HeroSection />
        <TrafficLight />
        <BiographySection />
        <FeatureCards />
        <Gallery />
        <BookSection />
        <PrologueSection />
        <BookReviewSection />
        <TypewriterQuote />
        <PoemsPreview />
        <MainTextSection />
        <QuoteSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
