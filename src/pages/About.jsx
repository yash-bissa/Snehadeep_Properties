import React from 'react';
import Hero from '../components/Hero';
import AboutStorySection from '../components/AboutStorySection';
import AboutLandSection from '../components/AboutLandSection';
import StatsStrip from '../components/StatsStrip';
import ContactBanner from '../components/ContactBanner';

export default function About() {
  return (
    <>
      {/* About Hero */}
      <Hero about />

      {/* About Story - About page only */}
      <AboutStorySection />

      {/* Stats */}
      <StatsStrip />

      {/* About Land Gallery - About page only */}
      <AboutLandSection />

      {/* Contact CTA */}
      <ContactBanner />
    </>
  );
}