'use client';

import React from 'react';
import Image from 'next/image';
import { X, CheckCircle2, ArrowRight, Layers, ShieldCheck, Factory } from 'lucide-react';
import { ProductItem } from '@/data/siteData';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export default function ProductDetailModal({ product, onClose, onRequestQuote }: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f1d40] text-white px-6 py-4 flex items-center justify-between border-b border-orange-500/30">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-orange-500/20 text-orange-400 font-semibold text-xs border border-orange-500/30 uppercase tracking-wider">
              {product.category} Series
            </span>
            <span className="text-slate-400 text-xs hidden sm:inline">• Matched Die & Precision Moulding</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Image col */}
            <div className="md:col-span-5 relative rounded-xl overflow-hidden border border-slate-200 shadow-md aspect-4/3 md:aspect-square bg-slate-100">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {product.badge && (
                <div className="absolute top-3 left-3 bg-orange-600 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-md tracking-wider uppercase">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Title & description */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  {product.name}
                </h3>
                <p className="text-sm text-orange-600 font-medium mt-1">
                  Polychemical Fibroplast Private Limited • Bhosari MIDC, Pune
                </p>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {product.fullDesc}
              </p>

              {/* Action bar */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onRequestQuote(product.name);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-lg shadow transition-all hover:shadow-orange-500/20 active:scale-95 cursor-pointer"
                >
                  <span>Request Quick RFQ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-lg transition-colors cursor-pointer"
                >
                  <span>Go to Contact Page</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-orange-600" />
              Technical & Material Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col justify-between">
                  <span className="text-slate-500 font-medium">{spec.label}</span>
                  <span className="text-slate-900 font-semibold mt-1 text-sm">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features & Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Key Engineering Advantages
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {product.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
                <Factory className="w-4 h-4 text-blue-600" />
                Industry Applications
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1.5"></span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500">
          <span>* Specifications can be tailored to meet client drawing tolerances and application environments.</span>
          <button
            onClick={onClose}
            className="text-slate-700 hover:text-slate-900 font-medium px-3 py-1.5 rounded hover:bg-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

