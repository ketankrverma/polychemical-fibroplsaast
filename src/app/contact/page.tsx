'use client';

import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Building2, 
  Clock, 
  ShieldCheck, 
  Compass, 
  ExternalLink,
  Info,
  CheckCircle2
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { COMPANY_INFO } from '@/data/siteData';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="relative bg-[#080f24] text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              Direct Communication Desk
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Contact & Plant Location
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Connect with our engineering and estimating team at Bhosari MIDC, Pune, for composite mould design, product quotes, or technical feasibility reviews.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Info + Interactive Form */}
      <section className="py-12 sm:py-20 grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Col: Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              {/* Company Details Card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Manufacturing Plant & Office
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    {COMPANY_INFO.name}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    FRP, SMC, BMC & Composite Products Manufacturing
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Registered Location:</strong>
                      <p className="text-slate-600 leading-relaxed mt-0.5">
                        Bhosari MIDC, Pune, Maharashtra 411026, India.
                      </p>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        Strategic Pune Industrial Corridor (Pimpri-Chinchwad zone)
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Official Business Email:</strong>
                      <a
                        href="mailto:polychemicalfrp@gmail.com"
                        className="text-orange-600 font-semibold hover:text-orange-700 hover:underline mt-0.5 block"
                      >
                        polychemicalfrp@gmail.com
                      </a>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        Direct technical drawing submissions & RFQ correspondence
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Telephone & Mobile Lines:</strong>
                      <div className="space-y-1 mt-0.5">
                        <a
                          href="tel:+919822018456"
                          className="text-orange-600 font-semibold hover:text-orange-700 hover:underline block text-sm"
                        >
                          +91 98220 18456
                        </a>
                        <span className="text-slate-600 text-xs block">
                          Plant Landline: +91 (020) 2712 4890
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        Direct line for RFQs, drawing evaluations, and procurement
                      </span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Plant Working Hours:</strong>
                      <p className="text-slate-600 mt-0.5">
                        Monday – Saturday: 9:00 AM – 6:30 PM IST
                      </p>
                      <span className="text-[11px] text-slate-500 block">
                        Sunday: Plant Maintenance
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bhosari MIDC Logistics Guide */}
              <div className="bg-[#0f1d40] text-white rounded-2xl p-6 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  Logistics & Connectivity
                </div>
                <h3 className="text-base font-bold text-white">
                  Why Bhosari MIDC Location Matters
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Bhosari MIDC is one of India&apos;s oldest and most prestigious engineering clusters, housing major automotive OEMs, Tier-1 ancillary manufacturers, and electrical machinery firms. This provides seamless supply chain linkage, specialized tooling support, and direct access to Mumbai ports via the expressway.
                </p>
                <div className="pt-2 text-xs text-slate-400 border-t border-slate-700/60 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Logistics-connected for pan-India dispatches</span>
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map / Directions Placeholder */}
      <section className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Industrial Cluster Route
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Visiting Our Plant in Bhosari MIDC
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                Located near the Pune-Nashik highway corridor in Bhosari MIDC. Plant visits and vendor audits can be scheduled in advance with our technical desk.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:polychemicalfrp@gmail.com?subject=Schedule%20Plant%20Visit%20-%20Polychemical%20Fibroplast"
                className="px-6 py-2.5 bg-[#0f1d40] hover:bg-[#1b2a4e] text-white text-xs sm:text-sm font-semibold rounded-lg shadow transition-colors whitespace-nowrap"
              >
                Schedule Plant Visit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

