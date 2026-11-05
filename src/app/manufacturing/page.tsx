'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Factory, 
  Wrench, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  Flame,
  Gauge,
  Sliders,
  Sparkles
} from 'lucide-react';
import { MANUFACTURING_PROCESSES } from '@/data/siteData';
import QuoteModal from '@/components/QuoteModal';
import TiltCard from '@/components/TiltCard';

export default function ManufacturingPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="relative bg-[#080f24] text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5" />
              Facility Operations & Workflow
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Manufacturing & Technology
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our precision composite manufacturing infrastructure in Bhosari MIDC, Pune — integrating compound formulation, matched-die compression presses, and multi-point metrology.
            </p>
          </div>
        </div>
      </section>

      {/* 1. CORE MANUFACTURING PILLARS */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
              Core Technical Competencies
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Advanced Composite Processing
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Engineered with modern hydraulic compression machinery and precision steel dies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <TiltCard className="h-full">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4 hover:shadow-xl transition-all h-full">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Flame className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Compression Moulding
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-pressure hydraulic hot presses with precision multi-zone electric heating platens (140°C–160°C) for homogeneous polymerization and void-free curing of SMC and BMC parts.
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-slate-500 pt-3 border-t border-slate-200">
                  Hydraulic Parallelism & Cycle Timers
                </div>
              </div>
            </TiltCard>

            {/* Pillar 2 */}
            <TiltCard className="h-full">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4 hover:shadow-xl transition-all h-full">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0f1d40] flex items-center justify-center">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Product Development
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    DFM (Design for Manufacturing) review of customer 3D models, draft analysis, compression wall thickness optimization, and rapid prototype sample molding.
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-slate-500 pt-3 border-t border-slate-200">
                  CAD Feasibility & Material Selection
                </div>
              </div>
            </TiltCard>

            {/* Pillar 3 */}
            <TiltCard className="h-full">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4 hover:shadow-xl transition-all h-full">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Mould Manufacturing
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hardened steel matched dies (P20 / H13) designed for tight parting lines, minimal trimming flash, rapid ejection, and long-run tooling endurance.
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-slate-500 pt-3 border-t border-slate-200">
                  Hardened Steel Tooling & Inserts
                </div>
              </div>
            </TiltCard>

            {/* Pillar 4 */}
            <TiltCard className="h-full">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4 hover:shadow-xl transition-all h-full">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Quality Metrology
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Multi-point inspection utilizing Barcol hardness gauges, dielectric breakdown testers, checking fixtures, and mechanical drop-impact sample validation.
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-slate-500 pt-3 border-t border-slate-200">
                  Full Cure & Dimensional Assurance
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 2. STEP-BY-STEP PRODUCTION WORKFLOW */}
      <section className="py-16 sm:py-24 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
              Step-by-Step Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              The 5-Stage Production Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Every component follows a validated manufacturing sequence to guarantee structural integrity and surface repeatability.
            </p>
          </div>

          {/* Interactive Steps Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
            {MANUFACTURING_PROCESSES.map((proc, index) => (
              <button
                key={proc.step}
                onClick={() => setActiveStep(index)}
                className={`p-3.5 rounded-xl text-left border transition-all ${
                  activeStep === index
                    ? 'bg-[#0f1d40] text-white border-orange-500/50 shadow-lg'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                }`}
              >
                <span className={`text-xs font-mono font-bold block ${activeStep === index ? 'text-orange-400' : 'text-orange-600'}`}>
                  STAGE {proc.step}
                </span>
                <span className="text-xs font-bold line-clamp-1 mt-0.5">
                  {proc.title}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Stage Detail Display */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] bg-slate-900">
                <Image
                  src={MANUFACTURING_PROCESSES[activeStep].imageUrl}
                  alt={MANUFACTURING_PROCESSES[activeStep].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                    Stage {MANUFACTURING_PROCESSES[activeStep].step} Processing
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Phase {MANUFACTURING_PROCESSES[activeStep].step} of 05
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {MANUFACTURING_PROCESSES[activeStep].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {MANUFACTURING_PROCESSES[activeStep].description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Key Highlights & Controls:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {MANUFACTURING_PROCESSES[activeStep].keyHighlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Plant Location: Bhosari MIDC, Pune</span>
                  <Link
                    href="/contact?subject=Production%20Feasibility%20Enquiry"
                    className="text-orange-600 font-bold hover:text-orange-700 flex items-center gap-1"
                  >
                    <span>Request Production Feasibility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUALITY INSPECTION PARAMETERS */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Metrology & Verification
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Rigorous Quality Inspection at Every Critical Stage
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To guarantee zero-defect dispatches to our OEM partners, each production batch undergoes multi-parameter mechanical, electrical, and dimensional validation.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Barcol Hardness Testing:</strong>
                    Verifies complete cross-linking and resin cure across both thick and thin section geometries.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Dielectric & Comparative Tracking (CTI):</strong>
                    Insures electrical housings resist flashovers and withstand high voltage surges safely.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Dimensional Checking Fixtures:</strong>
                    Dedicated fixtures confirm hole centerlines, boss positions, and outer contours against 2D/3D models.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0f1d40] text-white p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-orange-400" />
                  <h3 className="text-lg font-bold text-white">Quality Assurance Deliverables</h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Every dispatched batch can be accompanied by comprehensive Quality Inspection Reports (QIR) customized to client specifications:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                    <span className="font-semibold text-orange-400 block mb-0.5">Dimensional Reports</span>
                    Critical dimension verification using verniers, height gauges, and pin gauges.
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                    <span className="font-semibold text-orange-400 block mb-0.5">Raw Material COA</span>
                    Certificate of Analysis tracking resin, glass roving, and filler batch lot numbers.
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                    <span className="font-semibold text-orange-400 block mb-0.5">Torque Pull-Out Test</span>
                    Mechanical verification of threaded brass and steel inserts for load retention.
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                    <span className="font-semibold text-orange-400 block mb-0.5">Flame-Retardancy</span>
                    Self-extinguishing sample burn rate verification for electrical grade compounds.
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact?subject=Quality%20Verification%20and%20Testing%20Standards"
                    className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs sm:text-sm rounded-xl shadow transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <span>Discuss Quality Requirements for Your Component</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
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

