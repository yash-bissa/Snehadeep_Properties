import React from 'react';
import { ArrowRight } from 'lucide-react';

// Small reusable circular arrow used across cards and section controls.
export default function ArrowButton({ className = '' }) {
  return (
    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/50 bg-white/90 text-[#173326] ${className}`}>
      <ArrowRight size={17} strokeWidth={1.8} />
    </span>
  );
}
