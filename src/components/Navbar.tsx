'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield, ChevronRight, PhoneCall, Phone, Mail } from 'lucide-react';
import QuoteModal from './QuoteModal';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Industries', href: '/industries' },
  { name: 'Manufacturing', href: '/manufacturing' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a1128]/95 backdrop-blur-md shadow-xl border-b border-slate-800'
            : 'bg-[#080f24] border-b border-slate-800/80'
        }`}
      >
        {/* Top utility sub-bar */}
        <div className="hidden lg:block bg-[#050916] text-slate-300 border-b border-slate-800/60 py-1.5 px-6 text-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Manufacturing Facility: <strong className="text-slate-200">Bhosari MIDC, Pune, Maharashtra</strong>
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">
                Composite Technologies: <span className="text-orange-400 font-medium">FRP • SMC • BMC • Matched Die Moulding</span>
              </span>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="tel:+919822018456"
                className="hover:text-orange-400 transition-colors flex items-center gap-1 text-slate-200 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>+91 98220 18456</span>
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="mailto:polychemicalfrp@gmail.com"
                className="hover:text-orange-400 transition-colors flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span>polychemicalfrp@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3 focus:outline-none">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white shadow-md shadow-orange-950/40 group-hover:scale-105 transition-transform duration-200">
                <Shield className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-white leading-tight uppercase group-hover:text-orange-400 transition-colors">
                  Polychemical Fibroplast
                </span>
                <span className="text-[11px] text-slate-400 font-medium tracking-wide flex items-center gap-1">
                  Private Limited <span className="text-orange-500 font-semibold">• Pune</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-white bg-white/10 font-semibold shadow-inner'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 rounded-full animate-fadeIn" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-orange-900/30 transition-all hover:shadow-orange-600/30 hover:scale-[1.02] active:scale-95"
              >
                <span>Request a Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="sm:hidden px-3 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-semibold"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d1b3e] border-b border-slate-700/80 px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-fadeIn">
            <div className="pb-3 mb-2 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
              <span>Bhosari MIDC, Pune</span>
              <a href="tel:+919822018456" className="text-orange-400 font-semibold flex items-center gap-1">
                <Phone className="w-3 h-3" />
                +91 98220 18456
              </a>
            </div>

            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-orange-600 text-white font-semibold'
                      : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-700/60 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuoteModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold rounded-lg shadow-md transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Request Technical Quote</span>
              </button>
              <p className="text-[11px] text-center text-slate-400 pt-1">
                Direct Email: polychemicalfrp@gmail.com
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
}
