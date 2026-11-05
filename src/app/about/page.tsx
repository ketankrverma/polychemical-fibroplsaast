'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  Factory, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Sparkles,
  Cpu
} from 'lucide-react';
import { COMPANY_INFO, CAPABILITIES_DATA } from '@/data/siteData';
import QuoteModal from '@/components/QuoteModal';
import TiltCard from '@/components/TiltCard';

export default function AboutPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="relative bg-[#080f24] text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              Corporate Profile & Engineering Heritage
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              About Polychemical Fibroplast
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Specialized composite materials manufacturer based in Bhosari MIDC, Pune, engineering advanced FRP, SMC, BMC, and custom compression moulded solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 1. COMPANY INTRODUCTION & OVERVIEW */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase flex items-center gap-1.5">
                <Factory className="w-4 h-4" />
                Company Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Pioneering Precision Composite Solutions from Pune&apos;s Premier Industrial Corridor
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>Polychemical Fibroplast Private Limited</strong> operates out of the Bhosari MIDC industrial belt in Pune, Maharashtra. We have positioned ourselves at the intersection of polymer chemical engineering and matched-die compression manufacturing to deliver high-reliability structural components.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our core competencies center around Sheet Moulding Compound (SMC), Bulk Moulding Compound (BMC), and Fiber Reinforced Polymer (FRP) technologies. We partner with Tier-1 automotive manufacturers, electrical transmission equipment providers, and municipal infrastructure developers to transform heavy, rust-vulnerable metal assemblies into lightweight, non-conductive, and chemically impervious composite parts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Industrial Presence</h4>
                  <p className="text-xs text-slate-600">Bhosari MIDC, Pune, Maharashtra — centrally located in Western India&apos;s automotive and manufacturing cluster.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Manufacturing Focus</h4>
                  <p className="text-xs text-slate-600">Hydraulic compression moulding, matched steel die tooling, custom compound formulation, and metrology testing.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3 bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
                  alt="Polychemical Fibroplast Manufacturing Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>

              {/* Verified Location Box */}
              <div className="p-4 rounded-xl bg-[#0f1d40] text-white border border-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Strategic Location</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Bhosari MIDC, Pune, Maharashtra 411026, India. Direct logistics access to Mumbai-Pune Expressway and Western freight corridors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="py-16 sm:py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <TiltCard className="h-full">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 shadow-sm">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {COMPANY_INFO.mission}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-orange-600 uppercase tracking-wider">
                  Reliability • Precision • Integrity
                </div>
              </div>
            </TiltCard>

            {/* Vision Card */}
            <TiltCard className="h-full">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0f1d40] flex items-center justify-center mb-6 shadow-sm">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {COMPANY_INFO.vision}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-blue-900 uppercase tracking-wider">
                  Excellence • Innovation • Partnership
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 3. MANUFACTURING CAPABILITIES OVERVIEW */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
              Production Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Integrated Composite Engineering Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Our shop floor incorporates tooling maintenance, compound storage, automated hydraulic compression presses, and final finishing cells.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-orange-600 text-white flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Material Formulation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expertise in customized resin blends, filler loading, and fiber architectures (chopped glass, continuous strand roving, and multi-axial fabrics) tailored for specific thermal, chemical, and electrical profiles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0f1d40] text-white flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Hot Compression Presses</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hydraulic presses configured for SMC and BMC compression moulding, with regulated platen temperatures and controlled cycle times that guarantee void-free cure and dimensional repeatability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Mould & Tooling Engineering</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Collaboration on part 3D CAD models, compression flow simulation, core/cavity tool design, and in-house maintenance of precision matched steel dies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUALITY COMMITMENT */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-orange-400 tracking-wider uppercase flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Uncompromising Quality
              </span>
              <h2 className="text-3xl font-extrabold text-white leading-tight">
                Our Quality Commitment & Verification Standards
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {COMPANY_INFO.qualityCommitment}
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Incoming resin viscosity, gel-time, and fiber moisture verification</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Continuous press platen thermal monitoring and tonnage calibration</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Barcol hardness testing to verify full polymerization cure</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dielectric withstand & insulation resistance verification for electrical parts</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dimensional inspection against client engineering 2D/3D drawings</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 space-y-6">
                <h4 className="text-base font-bold text-white border-b border-slate-700 pb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-400" />
                  Standard Operating Quality Protocols
                </h4>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80">
                    <span className="font-bold text-white block mb-0.5">1. Pre-Production Validation</span>
                    Tool trial samples, shrinkage verification, and first-piece inspection approval before full batch release.
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80">
                    <span className="font-bold text-white block mb-0.5">2. In-Process Press Monitoring</span>
                    Controlled cycle times, uniform compression pressure, and automated ejection to prevent part warpage.
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80">
                    <span className="font-bold text-white block mb-0.5">3. Final Component Metrology</span>
                    Critical dimension verification, deflashing audit, insert torque check, and protective packaging.
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-[11px] text-slate-400 italic">
                    * Specific QA procedures, quality manuals, and customer-specific inspection plans (CSIP) can be aligned to match OEM requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-14 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Learn More About Our Products and Capabilities
          </h3>
          <p className="text-sm text-slate-600">
            View our comprehensive catalog of FRP, SMC, BMC, and custom compression moulded parts engineered in Bhosari MIDC, Pune.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm rounded-lg shadow transition-colors inline-flex items-center gap-2"
            >
              <span>Browse Product Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#0f1d40] hover:bg-[#1b2a4e] text-white font-semibold text-sm rounded-lg shadow transition-colors inline-flex items-center gap-2"
            >
              <span>Contact Engineering Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
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

