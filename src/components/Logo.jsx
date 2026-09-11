import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export default function Logo({ footer = false }) {
  return (
    <Link
      to="/"
      aria-label="Snehadeep Properties Home"
      className="flex items-center shrink-0"
    >
      <img
        src={footer ? siteConfig.images.logoFooter : siteConfig.images.logo}
        alt="Snehadeep Properties"
        className={
          footer
            ? `
              block
              h-auto
              object-contain
              w-[180px]
              sm:w-[220px]
              lg:w-[280px]
            `
            : `
              block
              h-auto
              object-contain
              w-[145px]
              sm:w-[160px]
              lg:w-[175px]
            `
        }
      />
    </Link>
  );
}