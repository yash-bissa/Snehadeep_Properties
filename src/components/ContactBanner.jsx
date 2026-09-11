import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { siteConfig } from '../config/siteConfig';
import { useNavigate } from 'react-router-dom';

// Bottom CTA encourages users to start a conversation and opens the Google Form.
export default function ContactBanner() {
  const navigate = useNavigate();
  return (
    <section id="contact" className="page-shell pb-8 sm:pb-12">
      <div className="relative overflow-hidden rounded-[26px] bg-[#173326]">
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${siteConfig.images.ctaBackground})` }} />
        <div className="absolute inset-0 bg-[#0b2418]/55" />
        <div className="relative grid items-center gap-7 px-7 py-9 text-white sm:px-10 lg:grid-cols-[1.1fr_1fr] lg:px-14 lg:py-12">
          <div>
            <SectionLabel>LET'S CONNECT</SectionLabel>
            <h2 className="display-heading mt-4 max-w-lg text-4xl sm:text-5xl">Premium Lake View land,<br />& water frontage land.</h2> 
            {/* premium  Lake View land, hill side  & water frontage land */}
          </div>
          <div className="rounded-[22px] bg-[#f4f1e8] p-5 text-[#173326] sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <button type="button" onClick={() => navigate('/contact')} className="solid-button w-fit"><PhoneCall size={18} /> Contact Us <ArrowRight size={18} /></button>
              <p className="max-w-xs text-sm leading-6 text-[#536554]">Get in touch for site visits, prices and more details.</p>
            </div>
            <p className="mt-4 text-xs text-[#536554]">{siteConfig.phone} · {siteConfig.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
