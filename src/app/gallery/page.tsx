'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  Camera, 
  Filter, 
  Maximize2, 
  Tag, 
  Info,
  Sparkles,
  Layers
} from 'lucide-react';
import { GALLERY_DATA, GalleryItem } from '@/data/siteData';
import LightboxModal from '@/components/LightboxModal';
import TiltCard from '@/components/TiltCard';

const CATEGORIES = [
  'All',
  'Compression Moulding',
  'Tooling & Moulds',
  'Composite Components',
  'Quality & Testing',
  'Facility & Machinery'
] as const;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return GALLERY_DATA;
    return GALLERY_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="relative bg-[#080f24] text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              Industrial Visual Showcase
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Industrial Photo Gallery
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Visual insights into compression moulding machinery, matched steel dies, composite reinforcements, metrology inspection, and facility operations.
            </p>
          </div>
        </div>
      </section>

      {/* Subtitle bar */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 px-4 text-xs text-slate-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>
              High-precision hydraulic presses, matched steel tooling, metrology inspection, and composite components at Bhosari MIDC plant.
            </span>
          </div>
          <span className="hidden sm:inline text-slate-500 font-mono">Bhosari Industrial Area, Pune</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-slate-200 py-4 shadow-sm sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 hidden sm:inline flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Filter By:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs text-slate-500">
              Showing <span className="font-bold text-slate-900">{filteredItems.length}</span> gallery images
              {selectedCategory !== 'All' && <span> in <strong className="text-orange-600">{selectedCategory}</strong></span>}
            </p>
            <span className="text-xs text-slate-500">Click any image to open full interactive lightbox</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <TiltCard key={item.id} className="h-full">
                <div
                  onClick={() => setActiveLightboxIndex(index)}
                  className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="relative aspect-4/3 bg-slate-900 overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 bg-[#0a1128]/90 backdrop-blur-sm text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border border-slate-700/60">
                      {item.category}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <div className="text-center text-white space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center mx-auto shadow-lg">
                          <Maximize2 className="w-5 h-5" />
                        </div>
                        <p className="text-xs font-bold">Open Full Preview</p>
                      </div>
                    </div>
                  </div>

                  {/* Caption Bar */}
                  <div className="p-4 bg-white flex flex-col justify-between grow space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
      />
    </div>
  );
}

