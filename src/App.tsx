/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import TechGrid from './components/TechGrid';
import HorizontalGallery from './components/HorizontalGallery';
import Testimonials from './components/Testimonials';
import VideoSection from './components/VideoSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import DynamicBackground from './components/DynamicBackground';
import SectionReveal from './components/SectionReveal';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <SmoothScroll>
        <div className={`relative min-h-screen text-white selection:bg-brand selection:text-dark transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          {/* Global FX */}
          <DynamicBackground />
          <div className="noise-overlay" />
          <div className="grain" />
          <CustomCursor />
          
          {/* Navigation */}
          <Navbar />

          {/* Sections */}
          <main>
            <Hero />
            <div className="h-[20vh] bg-gradient-to-b from-dark to-black" />
            <ProductShowcase />
            
            <SectionReveal>
              <TechGrid />
            </SectionReveal>

            <HorizontalGallery />
            <VideoSection />
            
            <SectionReveal>
              <Testimonials />
            </SectionReveal>

            <CTA />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
