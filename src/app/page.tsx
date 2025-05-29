import React from 'react';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Differentials from '@/components/sections/Differentials';
import HowItWorks from '@/components/sections/HowItWorks';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Home() {
  return (
    <>
      <Header />

      <div className="min-h-screen">
        <Hero />
        <HowItWorks />
        <Features />
        <Differentials />
        <Pricing />
        <FAQ />
        <Footer />

        <ScrollToTop />
      </div>
    </>
    
  );
}
