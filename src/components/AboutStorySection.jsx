import React from 'react';
import SectionLabel from './SectionLabel';
import { siteConfig } from '../config/siteConfig';

export default function AboutStorySection() {
  return (
    <section className="page-shell py-14 sm:py-20 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

        {/* TEXT */}
        <div className="px-2 sm:px-6">
          <SectionLabel>OUR STORY</SectionLabel>

          <h2 className="display-heading mt-5 text-5xl sm:text-6xl">
            Land With
            <br />
            <em className="text-[#65775e]">Purpose</em>
          </h2>

          <div className="mt-7 h-px w-12 bg-[#173326]" />

          <p className="mt-7 max-w-md text-base leading-7 text-[#455349]">
            We believe the right piece of land can become the foundation
            for something meaningful — a peaceful home, a thriving
            community, or a future built around nature.
          </p>
        </div>

        {/* ONE LARGE IMAGE */}
        <div className="overflow-hidden rounded-[28px]">
          <img
            src={siteConfig.images.aboutStory}
            alt="Green riverside landscape near Nagpur"
            className="
              h-[360px]
              w-full
              object-cover
              sm:h-[460px]
              lg:h-[520px]
            "
          />
        </div>

      </div>
    </section>
  );
}