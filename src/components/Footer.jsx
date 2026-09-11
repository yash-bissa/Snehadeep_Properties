import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { siteConfig } from '../config/siteConfig';

// Footer is shared by every page and keeps all business details in siteConfig.
export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="relative overflow-hidden bg-[#10271c] text-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${siteConfig.images.footerBackground})` }} />
      <div className="absolute inset-0 bg-[#07170f]/75" />

      <div className="page-shell relative py-12 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.1fr] lg:gap-10">
          <div>
  <Logo footer />

  <p className="mt-2 font-display text-3xl leading-none sm:text-4xl">
    Land Today.<br />
    <em className="text-[#b8c4a4]">A Greener Tomorrow.</em>
  </p>

  <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
    Premium parcel lands in Nagpur and nearby regions. Secure your future with
    nature, growth and trust.
  </p>
</div>

          <div>
            <h3 className="font-display text-2xl">Quick Links</h3>
            <div className="mt-6 flex flex-col gap-3 text-xl text-white/75">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/we-offer">We Offer</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          {/* <div>
            <h3 className="font-display text-2xl">Our Services</h3>
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/75">
              <span>Land Leasing</span>
              <span>Site Visits</span>
              <span>Legal Support</span>
              <span>Consultation</span>
            </div>
          </div> */}

          <div>
  <h3 className="font-display text-2xl">Contact Us</h3>

  <div className="mt-6 space-y-4 text-sm text-white/75">
    {siteConfig.phones.map((phone) => (
      <a
        key={phone}
        className="flex items-center gap-3"
        href={`tel:${phone.replace(/\s/g, '')}`}
      >
        <Phone size={18} /> {phone}
      </a>
    ))}

    <a
      className="flex items-center gap-3 break-all"
      href={`mailto:${siteConfig.email}`}
    >
      <Mail size={18} /> {siteConfig.email}
    </a>

    <span className="flex items-start gap-3">
      <MapPin size={18} className="mt-0.5 shrink-0" />
      {siteConfig.location}
    </span>
  </div>

  <div className="mt-6 flex gap-3">
    <a
      href={siteConfig.socialLinks.facebook}
      target="_blank"
      rel="noreferrer"
      aria-label="Facebook"
      className="grid h-10 w-10 place-items-center rounded-full border border-white/30"
    >
      <Facebook size={18} />
    </a>

    <a
      href={siteConfig.socialLinks.instagram}
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
      className="grid h-10 w-10 place-items-center rounded-full border border-white/30"
    >
      <Instagram size={18} />
    </a>
  </div>
</div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/20 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Snehadeep Properties. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {/* <span></span> privacy policy */}
            {/* <span></span> terms and conditions */}
            {/* <span></span> | */}
            <button onClick={scrollToTop} type="button" aria-label="Back to top" className="ml-2 grid h-11 w-11 place-items-center rounded-full border border-[#a8b796]/60 text-white"><ArrowUp size={18} /></button>
          </div>
        </div>
      </div>
    </footer>
  );
}
