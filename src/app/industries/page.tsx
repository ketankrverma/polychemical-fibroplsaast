'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Car, 
  Zap, 
  Plane, 
  Cog, 
  Train, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { INDUSTRIES_DATA, IndustryItem } from '@/data/siteData';
import QuoteModal from '@/components/QuoteModal';
import TiltCard from '@/components/TiltCard';

export default function IndustriesPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState<string>('automotive');

  const selectedIndustry = INDUSTRIES_DATA.find((i) => i.id === activeIndustry) || INDUSTRIES_DATA[0];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="relative bg-[#080f24] text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              Strategic Sector Expertise
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Industries Served
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Discover how Polychemical Fibroplast engineers tailored composite components that solve extreme structural, dielectric, thermal, and corrosive challenges across critical sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Industry Tab Navigation */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Industry Selection Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {INDUSTRIES_DATA.map((ind) => {
            const isActive = ind.id === activeIndustry;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#0f1d40] text-white shadow-lg border border-orange-500/40 ring-2 ring-orange-500/20'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {ind.id === 'automotive' && <Car className="w-4 h-4 text-orange-500" />}
                {ind.id === 'electrical' && <Zap className="w-4 h-4 text-orange-500" />}
                {ind.id === 'construction' && <Building2 className="w-4 h-4 text-orange-500" />}
                {ind.id === 'aerospace' && <Plane className="w-4 h-4 text-orange-500" />}
                {ind.id === 'industrial-equipment' && <Cog className="w-4 h-4 text-orange-500" />}
                {ind.id === 'infrastructure' && <Train className="w-4 h-4 text-orange-500" />}
                <span>{ind.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry In-Depth Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Col */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[480px] bg-slate-900">
              <Image
                src={selectedIndustry.imageUrl}
                alt={selectedIndustry.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">
                  Target Application Focus
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  {selectedIndustry.title}
                </h3>
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
                  <span>Polychemical Fibroplast Engineering</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {selectedIndustry.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {selectedIndustry.fullDesc}
                </p>
              </div>

              {/* Key Components */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-orange-600" />
                  Key Components Manufactured
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {selectedIndustry.keyComponents.map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <ChevronRight className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                      <span className="font-medium">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Composite Advantages */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Composite Advantages Over Traditional Materials
                </h4>
                <div className="space-y-2 text-xs text-slate-700">
                  {selectedIndustry.compositeAdvantages.map((adv, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <Link
                  href={`/contact?subject=${encodeURIComponent(selectedIndustry.title + ' Enquiries')}`}
                  className="px-6 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs sm:text-sm rounded-lg shadow transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Request Quote for {selectedIndustry.title.split('&')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products"
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <span>View Applicable Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* All 6 Industries Overview Cards */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">
              Overview of All Industry Domains
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Click any industry card below to explore full technical capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((ind) => (
              <TiltCard key={ind.id} className="h-full">
                <div
                  onClick={() => {
                    setActiveIndustry(ind.id);
                    window.scrollTo({ top: 320, behavior: 'smooth' });
                  }}
                  className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between h-full ${
                    activeIndustry === ind.id
                      ? 'bg-[#0f1d40] text-white border-orange-500/50 shadow-2xl'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:shadow-xl'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold uppercase tracking-wider ${
                        activeIndustry === ind.id ? 'text-orange-400' : 'text-orange-600'
                      }`}>
                        Sector Profile
                      </span>
                      {activeIndustry === ind.id && (
                        <span className="text-[10px] bg-orange-500 text-white font-bold px-2 py-0.5 rounded-full">
                          Viewing Active
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold">
                      {ind.title}
                    </h4>
                    <p className={`text-xs leading-relaxed ${
                      activeIndustry === ind.id ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {ind.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100/20 flex items-center justify-between text-xs font-semibold">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}

