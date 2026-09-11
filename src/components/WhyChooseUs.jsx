import React from 'react';
import { Leaf, MapPin, ShieldCheck, TrendingUp } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { siteConfig } from '../config/siteConfig';

// Dark image-backed benefits strip from the reference design.
export default function WhyChooseUs() {
  return (
    <section className="page-shell py-3 sm:py-5">
      <div className="relative overflow-hidden rounded-[26px] bg-cover bg-center px-7 py-9 text-white sm:px-10 lg:px-12" style={{ backgroundImage: `linear-gradient(90deg, rgba(8,29,18,.92), rgba(8,29,18,.72)), url(${siteConfig.images.whyBackground})` }}>
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
            <SectionLabel>WHY CHOOSE US</SectionLabel>
            <h2 className="display-heading mt-4 text-4xl sm:text-5xl">More Than Land,<br /><em className="text-[#b8c4a4]">A Trusted Partner.</em></h2>
          </div>
          <div className="flex items-center gap-4 border-white/20 lg:border-l lg:pl-7"><Leaf size={31} strokeWidth={1.2} /><span className="text-sm">Prime<br />Locations</span></div>
          <div className="flex items-center gap-4 border-white/20 lg:border-l lg:pl-7"><MapPin size={31} strokeWidth={1.2} /><span className="text-sm">River Side<br />lands</span></div>
          <div className="flex items-center gap-4 border-white/20 lg:border-l lg:pl-7"><ShieldCheck size={31} strokeWidth={1.2} /><span className="text-sm">Parcel  <br />land</span></div>
          <div className="flex items-center gap-4 border-white/20 lg:border-l lg:pl-7"><TrendingUp size={31} strokeWidth={1.2} /><span className="text-sm">Long Term<br />Growth</span></div>
        </div>
      </div>
    </section>
  );
}
