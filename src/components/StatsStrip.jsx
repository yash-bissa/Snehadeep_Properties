import React from 'react';
import { Handshake, Leaf, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

// Reusable credibility strip matching the green statistics band in the reference.
export default function StatsStrip() {
  return (
    <section className="page-shell py-8 sm:py-10">
      <div className="relative overflow-hidden rounded-[26px] bg-[#173326] px-5 py-8 text-white sm:px-8 lg:px-12">
        <div className="absolute inset-y-0 right-0 w-2/5 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${siteConfig.images.ctaBackground})` }} />
        <div className="relative grid gap-7 sm:grid-cols-3">
          <div className="flex items-center gap-4 border-white/20 sm:border-r sm:pr-7">
            <Leaf size={32} strokeWidth={1.3} />
            <div><div className="font-display text-3xl">10000+</div><div className="text-xs text-white/75">Happy Clients</div></div>
          </div>
          <div className="flex items-center gap-4 border-white/20 sm:border-r sm:pr-7">
            <MapPin size={32} strokeWidth={1.3} />
            <div><div className="font-display text-3xl">700+</div><div className="text-xs text-white/75">Acres Sold</div></div>
          </div>
          <div className="flex items-center gap-4">
            <Handshake size={32} strokeWidth={1.3} />
            <div><div className="font-display text-3xl">Trusted</div><div className="text-xs text-white/75">Local Partner</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
