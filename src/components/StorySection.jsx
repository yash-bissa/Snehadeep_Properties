import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { siteConfig } from '../config/siteConfig';
import { Link } from 'react-router-dom';

// Story section changes only its content/images depending on whether it is Home or About.
export default function StorySection({ about = false }) {
  return (
    <section className="page-shell py-10 sm:py-14 lg:py-16">
      <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1fr_0.82fr] lg:gap-8">
        <div className="relative px-2 sm:px-6 lg:px-8">
          <SectionLabel>OUR STORY</SectionLabel>
          <h2 className="display-heading mt-4 text-4xl sm:text-5xl">Rooted<br />in Nagpur</h2>
          <div className="mt-6 h-px w-11 bg-[#173326]" />
          <p className="mt-6 max-w-sm text-base leading-7 text-[#34423a]">Connecting people with nature through the right pieces of land.</p>
          <Link
            to="/we-offer"
            className="mt-7 inline-flex items-center gap-4 border-b border-[#173326] pb-1 text-sm font-medium"
          >
            Learn More <ArrowRight size={17} />
          </Link>
        </div>

        <div className="overflow-hidden rounded-[24px] bg-white shadow-soft">
          <img src={about ? siteConfig.images.aboutStory : siteConfig.images.homeStory} alt="Scenic riverside land near Nagpur" className="h-[330px] w-full object-cover sm:h-[390px] lg:h-[430px]" />
          <div className="bg-[#173326] px-5 py-3 text-sm text-white">Wellness & Hospitality Visionaries</div>
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[22px]">
            <img src={about ? siteConfig.images.aboutDevelopment : siteConfig.images.homeStoryGate} alt="Land prepared for development" className="h-[190px] w-full object-cover sm:h-[220px] lg:h-[200px]" />
            <div className="-mt-12 relative mx-4 mb-3 w-fit rounded-full bg-[#173326]/90 px-4 py-2 text-xs text-white">{about ? 'Ready for Development' : 'Prime Location'}</div>
          </div>
          <div className="overflow-hidden rounded-[22px]">
            <img src={about ? siteConfig.images.aboutGarden : siteConfig.images.homeStoryGarden} alt="Green landscaped surroundings" className="h-[190px] w-full object-cover sm:h-[220px] lg:h-[200px]" />
            <div className="-mt-12 relative mx-4 mb-3 w-fit rounded-full bg-[#173326]/90 px-4 py-2 text-xs text-white">Beautiful Surroundings</div>
          </div>
        </div>
      </div>
    </section>
  );
}
