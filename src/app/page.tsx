'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Wrench, 
  Cpu, 
  CheckCircle2, 
  Factory, 
  MapPin, 
  ChevronRight, 
  TrendingUp, 
  Sparkles,
  SlidersHorizontal,
  Flame,
  Award,
  Maximize2,
  Box
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  PRODUCTS_DATA, 
  INDUSTRIES_DATA, 
  CAPABILITIES_DATA, 
  WHY_CHOOSE_US,
  ProductItem 
} from '@/data/siteData';
import ProductDetailModal from '@/components/ProductDetailModal';
import QuoteModal from '@/components/QuoteModal';
import ThreeCompositeViewer from '@/components/ThreeCompositeViewer';
import TiltCard from '@/components/TiltCard';
import Material3DExplorer from '@/components/Material3DExplorer';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>(undefined);

  const handleOpenQuote = (productName?: string) => {
    setQuoteProduct(productName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION WITH 3D CAD ENGINE */}
      <section className="relative bg-[#060b1c] text-white overflow-hidden">
        {/* Background Industrial Image with subtle dark gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=80"
            alt="Advanced Composite Manufacturing Facility"
            fill
            priority
            className="object-cover object-center opacity-20 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060b1c] via-[#080f24]/95 to-[#060b1c]/80" />
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading, intro, metrics & buttons */}
            <div className="lg:col-span-7 space-y-6">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span>Bhosari MIDC, Pune • Composite Engineering Hub</span>
              </div>

              {/* Main Hero Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Advanced Composite <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-orange-500">
                  Manufacturing Solutions
                </span>
              </h1>

              {/* Subheading / Introduction */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Polychemical Fibroplast Private Limited manufactures high-precision <strong>FRP, SMC, BMC</strong>, and custom compression moulded components for critical automotive, electrical, infrastructure, and heavy engineering sectors.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base rounded-xl shadow-xl shadow-orange-950/50 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold text-sm sm:text-base rounded-xl border border-slate-700 shadow-lg transition-all hover:border-slate-500 hover:scale-105 active:scale-95"
                >
                  <span>Get In Touch</span>
                </Link>
              </div>

              {/* Highlights Bar */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
                <Link href="/products" className="hover:opacity-80 transition-opacity">
                  <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider">Moulding Tech</p>
                  <p className="text-sm sm:text-base font-bold text-white mt-0.5 flex items-center gap-1">
                    SMC & BMC Compression <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </p>
                </Link>
                <Link href="/contact" className="hover:opacity-80 transition-opacity">
                  <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider">Plant Hub</p>
                  <p className="text-sm sm:text-base font-bold text-white mt-0.5 flex items-center gap-1">
                    Bhosari MIDC, Pune <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </p>
                </Link>
                <Link href="/industries" className="col-span-2 sm:col-span-1 hover:opacity-80 transition-opacity">
                  <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider">Core Sectors</p>
                  <p className="text-sm sm:text-base font-bold text-white mt-0.5 flex items-center gap-1">
                    Auto • Electrical • Infra <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </p>
                </Link>
              </div>
            </div>

            {/* Right Column: 3D CAD Component Viewer */}
            <div className="lg:col-span-5">
              <ThreeCompositeViewer />
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION STRIP */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase flex items-center gap-1.5">
                <Factory className="w-4 h-4" />
                Precision Composite Fabrication
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Engineered Composites Crafted for Extreme Industrial Demands
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Operating out of <strong>Bhosari MIDC, Pune</strong>, Polychemical Fibroplast Private Limited specializes in high-integrity composite manufacturing. We combine thermoset material science with high-tonnage hydraulic compression moulding to engineer products that replace metal with zero corrosion, higher dielectric safety, and reduced weight.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Custom resin formulation & fiber wet-out</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Matched steel die compression moulding</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>High tracking resistance for electrical safety</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Class-A surface finishes for automotive use</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 group"
                >
                  <span>Learn more about our company profile</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <TiltCard className="rounded-2xl">
                <Link href="/manufacturing" className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-4/5 group cursor-pointer block">
                  <Image
                    src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=700&q=80"
                    alt="Matched Die Moulding"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 50vw, 350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <p className="text-white text-xs font-semibold flex items-center justify-between w-full">
                      <span>Matched Steel Tooling</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </Link>
              </TiltCard>

              <TiltCard className="rounded-2xl mt-6">
                <Link href="/gallery" className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-4/5 group cursor-pointer block">
                  <Image
                    src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=700&q=80"
                    alt="Composite Inspection"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 50vw, 350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <p className="text-white text-xs font-semibold flex items-center justify-between w-full">
                      <span>Precision Metrology</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </Link>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3D MATERIAL LAYER EXPLORER */}
      <section className="py-16 sm:py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Material3DExplorer />
        </div>
      </section>

      {/* 4. MANUFACTURING CAPABILITIES WITH 3D TILT CARDS */}
      <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
              Engineering Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              End-to-End Composite Manufacturing
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              From compound batching to high-tonnage hydraulic compression and final CMM verification, we execute full-lifecycle production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES_DATA.map((cap, idx) => (
              <TiltCard key={idx} className="h-full">
                <Link
                  href="/manufacturing"
                  className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 group flex flex-col justify-between h-full cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors duration-200 shadow-sm">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-500 group-hover:text-orange-600">
                    <span>Explore Technical Process</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/manufacturing"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0f1d40] hover:bg-[#1b2a4e] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore Full Manufacturing Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS WITH 3D DEPTH */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-2">
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
                Core Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Featured Composite Products
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                Engineered with high mechanical strength, dielectric endurance, and corrosion immunity.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 self-start md:self-end"
            >
              <span>View All 6 Product Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS_DATA.slice(0, 3).map((product) => (
              <TiltCard key={product.id} className="h-full">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-2xl hover:border-slate-300 transition-all duration-300 group h-full">
                  {/* Product Image */}
                  <div 
                    onClick={() => setSelectedProduct(product)}
                    className="relative aspect-16/10 bg-slate-100 overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#0a1128]/90 backdrop-blur-sm text-orange-400 text-[11px] font-bold px-2.5 py-1 rounded shadow-md border border-slate-700/60 uppercase tracking-wider">
                      {product.category}
                    </div>
                    {product.badge && (
                      <div className="absolute top-3 right-3 bg-orange-600 text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 
                        onClick={() => setSelectedProduct(product)}
                        className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {product.shortDesc}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2 border-t border-slate-100">
                      <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        Target Applications:
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1.5">
                        {product.applications.slice(0, 3).map((app, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1.5"></span>
                            <span className="line-clamp-1">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-slate-100 gap-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-slate-600" />
                        <span>View Details</span>
                      </button>
                      <Link
                        href={`/contact?product=${encodeURIComponent(product.name)}`}
                        className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
                      >
                        Request RFQ
                      </Link>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES SERVED */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-orange-400 tracking-wider uppercase">
              Cross-Industry Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Industries Powered by Our Composites
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Our lightweight, anti-corrosive, and high-strength composite components serve Tier-1 clients across key economic sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((ind) => (
              <TiltCard key={ind.id} className="h-full">
                <Link
                  href="/industries"
                  className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full"
                >
                  <div className="relative aspect-16/9 bg-slate-950 overflow-hidden">
                    <Image
                      src={ind.imageUrl}
                      alt={ind.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <h3 className="text-base font-bold text-white drop-shadow">
                        {ind.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {ind.shortDesc}
                    </p>

                    <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold text-orange-400 group-hover:text-orange-300">
                      <span>Explore Industry Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INFRASTRUCTURE & PLANT ECOSYSTEM */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Strategic Industrial Presence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Modern Manufacturing Infrastructure in Bhosari MIDC
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Located in the heart of Maharashtra&apos;s primary automotive and precision engineering corridor in <strong>Bhosari MIDC, Pune</strong>, our manufacturing facility is equipped to handle high-tonnage compression moulding, compound staging, secondary CNC machining, and comprehensive metrology testing.
              </p>

              <div className="space-y-3">
                <Link href="/manufacturing" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-start gap-3 transition-colors block">
                  <Factory className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center justify-between">
                      <span>Hydraulic Compression Press Line</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">Heavy-duty presses with precision platen parallelism and multi-zone thermal controllers for consistent curing of SMC/BMC.</p>
                  </div>
                </Link>

                <Link href="/manufacturing" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-start gap-3 transition-colors block">
                  <Wrench className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center justify-between">
                      <span>Dedicated Toolroom & Die Maintenance</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">In-house tooling maintenance ensuring prolonged die longevity, minimal parting flash, and fast changeover.</p>
                  </div>
                </Link>

                <Link href="/manufacturing" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-start gap-3 transition-colors block">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center justify-between">
                      <span>Quality Inspection & Material Validation</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">Equipped with Barcol hardness testing, dimensional check fixtures, and dielectric testing gear for zero-defect deliveries.</p>
                  </div>
                </Link>
              </div>

              <div className="pt-2">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f1d40] hover:bg-[#1b2a4e] text-white text-xs sm:text-sm font-semibold rounded-lg shadow transition-colors"
                >
                  <span>View Industrial Photo Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <TiltCard>
                <Link href="/gallery" className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-4/3 bg-slate-900 block group">
                  <Image
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80"
                    alt="Industrial Plant Infrastructure"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">Industrial Excellence</span>
                    <h3 className="text-xl font-bold text-white mt-1 flex items-center justify-between">
                      <span>Shop Floor Operations & Material Staging</span>
                      <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">Bhosari MIDC Industrial Hub, Pune Corridor • Click to view full gallery</p>
                  </div>
                </Link>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US WITH 3D TILT */}
      <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
              The Polychemical Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why Tier-1 Partners Trust Our Engineering
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We engineer dependable composite parts designed for demanding mechanical, electrical, and environmental stresses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <TiltCard key={idx} className="h-full">
                <Link
                  href="/about"
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group cursor-pointer h-full"
                >
                  <div className="space-y-3">
                    <div className="text-2xl font-black text-orange-600 tracking-tight font-mono">
                      {item.stat}
                    </div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {item.subtext}
                    </p>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-500 group-hover:text-orange-600">
                    <span>Learn more</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT CTA STRIP */}
      <section className="bg-gradient-to-r from-[#080f24] via-[#0f1d40] to-[#080f24] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>
        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold tracking-wide border border-orange-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Quotation & Technical Review
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Partner With Polychemical Fibroplast
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discuss your upcoming composite component program, request material formulation consultation, or submit 2D/3D part drawings for feasibility evaluation.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base rounded-xl shadow-xl shadow-orange-950/50 transition-all hover:scale-105 active:scale-95"
            >
              Request an RFQ Quote
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base rounded-xl border border-white/20 transition-all hover:scale-105 active:scale-95"
            >
              Contact Bhosari Office
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(productName) => handleOpenQuote(productName)}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedProduct={quoteProduct}
      />
    </div>
  );
}
