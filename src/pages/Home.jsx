import React from 'react';
import Hero from '../components/Hero';
import StorySection from '../components/StorySection';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';

// Home page is intentionally composed from small reusable sections.
export default function Home() {
  return (
    <>
      <Hero />
      <StorySection />
      <WhyChooseUs />
      <ProjectsSection />
      <ContactBanner />
    </>
  );
}
