'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Mail, MapPin, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-[#050914] text-slate-300 border-t border-slate-800">
      {/* Top CTA Strip */}
      <div className="bg-gradient-to-r from-[#0d1b3e] via-[#152957] to-[#0d1b3e] border-b border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-orange-400 font-bold uppercase tracking-wider text-xs">
              Engineering Excellence in Bhosari MIDC, Pune
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Discuss Your Composite Component Requirements?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              From CAD tool design and compound formulation to high-tonnage compression moulding and finishing, we deliver reliable composite engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm rounded-lg shadow-lg shadow-orange-950/50 transition-all hover:scale-105 active:scale-95"
            >
              Get In Touch With Our Engineering Team
            </Link>
            <Link
              href="/products"
              className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-lg border border-white/20 transition-all"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Company Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Company Profile */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white shadow-md">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white leading-tight uppercase">
                  Polychemical Fibroplast
                </h4>
                <p className="text-xs text-orange-400 font-medium">Private Limited</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Specialized composite materials manufacturer located in the premier Bhosari MIDC industrial corridor, Pune. Delivering engineered FRP, SMC, BMC, and custom compression moulded solutions for automotive, electrical, and infrastructure sectors.
            </p>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  Bhosari MIDC, Pune, Maharashtra 411026, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="mailto:polychemicalfrp@gmail.com" className="hover:text-orange-400 transition-colors">
                  polychemicalfrp@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href="tel:+919822018456" className="hover:text-orange-400 transition-colors font-medium">
                    +91 98220 18456
                  </a>
                  <span className="text-[11px] text-slate-400 block">
                    Plant Office: +91 (020) 2712 4890
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-4">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors flex items-center justify-between">
                  <span>Home</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors flex items-center justify-between">
                  <span>About Us</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-orange-400 transition-colors flex items-center justify-between">
                  <span>Product Catalog</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-orange-400 transition-colors flex items-center justify-between">
                  <span>Industries Served</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-orange-400 transition-colors flex items-center justify-between">
                  <span>Manufacturing & Process</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-orange-400 transition-colors flex items-center justify-between">
                  <span>Photo Gallery</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors flex items-center justify-between">
                  <span>Contact & Location</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Product Solutions */}
          <div className="space-y-4">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Materials & Products
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/products" className="hover:text-orange-400 transition-colors block">
                  FRP Industrial Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-orange-400 transition-colors block">
                  SMC Compression Moulded Parts
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-orange-400 transition-colors block">
                  BMC Precision Components
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-orange-400 transition-colors block">
                  Fiberglass Reinforced Enclosures
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-orange-400 transition-colors block">
                  Matched Die Composite Parts
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-orange-400 transition-colors block">
                  Custom OEM Mould Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Manufacturing Focus */}
          <div className="space-y-4">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Engineering Focus
            </h5>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>Hydraulic Compression Moulding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>Thermoset SMC/BMC Formulations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>Matched Steel Tooling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>Multi-Point Metrology Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>Rapid Prototyping & Scale Up</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[11px] text-slate-300 bg-slate-900 border border-slate-700/80 px-2.5 py-1 rounded">
                Location: Bhosari MIDC, Pune
              </span>
            </div>
          </div>
        </div>

        {/* Corporate Commitment Box */}
        <div className="mt-12 p-5 rounded-2xl bg-[#080f24] border border-slate-800 text-xs text-slate-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="font-bold text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Engineering & Quality Assurance Commitment
            </p>
            <p className="leading-relaxed text-[11px] text-slate-400 max-w-3xl">
              Polychemical Fibroplast Private Limited is dedicated to zero-defect composite fabrication, precision matched-die compression moulding, and full compliance with OEM drawing standards across India.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold shadow transition-all"
          >
            Request Official Catalog & Quote
          </Link>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Polychemical Fibroplast Private Limited. All rights reserved.
          </p>
          <p className="flex items-center gap-3">
            <span>Bhosari MIDC, Pune, Maharashtra</span>
            <span>•</span>
            <span>Composite Engineering Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
