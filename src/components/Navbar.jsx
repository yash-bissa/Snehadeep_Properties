import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Facebook, Instagram, Menu, X } from 'lucide-react';
import Logo from './Logo';
import {  siteConfig } from '../config/siteConfig';
import { useNavigate } from 'react-router-dom';

// Sticky responsive navbar. Desktop links appear at lg; phone/tablet use the hamburger drawer.
export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleContact() {
    closeMenu();
    openGoogleForm();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#10271c]/10 bg-[#f4f1e8]/95 backdrop-blur-md">
      <div className="page-shell flex h-[68px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-10 xl:flex" aria-label="Primary navigation">
          <NavLink
            to="/"
            className={({ isActive }) => `border-b pb-1 text-sm transition ${isActive ? 'border-[#173326] font-medium' : 'border-transparent hover:border-[#173326]'}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `border-b pb-1 text-sm transition ${isActive ? 'border-[#173326] font-medium' : 'border-transparent hover:border-[#173326]'}`}
          >
            About Us
          </NavLink>
          <NavLink
            to="/we-offer"
            className={({ isActive }) => `border-b pb-1 text-sm transition ${isActive ? 'border-[#173326] font-medium' : 'border-transparent hover:border-[#173326]'}`}
          >
            We Offer
          </NavLink>
        </nav>

        <button type="button" onClick={() => navigate('/contact')} className="solid-button hidden xl:inline-flex" aria-label="Open contact Google Form">
          Contact Us
          <span className="text-xl leading-none">→</span>
        </button>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[#173326]/20 xl:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#10271c]/10 bg-[#f4f1e8] px-5 pb-6 pt-5 xl:hidden">
          <div className="mx-auto flex max-w-[760px] flex-col gap-2">
            <Link onClick={closeMenu} to="/" className="rounded-2xl px-4 py-3 text-base hover:bg-white">Home</Link>
            <Link onClick={closeMenu} to="/about" className="rounded-2xl px-4 py-3 text-base hover:bg-white">About Us</Link>
            <button onClick={handleContact} type="button" className="rounded-2xl bg-[#173326] px-4 py-3 text-left text-base text-white">Contact Us →</button>
            <Link
              onClick={closeMenu}
              to="/we-offer"
              className="rounded-2xl px-4 py-3 text-base hover:bg-white"
            >
              We Offer
            </Link>

            <div className="mt-3 flex gap-3 border-t border-[#10271c]/10 pt-4">
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full border border-[#173326]/20">
                <Facebook size={19} />
              </a>
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-[#173326]/20">
                <Instagram size={19} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
