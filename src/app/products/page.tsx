'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  Filter, 
  Layers, 
  ArrowRight, 
  SlidersHorizontal, 
  Maximize2, 
  CheckCircle2, 
  Sparkles,
  Info
} from 'lucide-react';
import { PRODUCTS_DATA, ProductItem } from '@/data/siteData';
import ProductDetailModal from '@/components/ProductDetailModal';
import QuoteModal from '@/components/QuoteModal';
import TiltCard from '@/components/TiltCard';

const CATEGORIES = [
  'All',
  'FRP',
  'SMC',
  'BMC',
  'Fiberglass',
  'Composite Moulded',
  'Custom'
] as const;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>(undefined);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.applications.some((app) =>
          app.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenQuote = (productName?: string) => {
    setQuoteProduct(productName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="relative bg-[#080f24] text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              Comprehensive Engineered Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Composite Product Catalog
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our line of precision compression moulded SMC, BMC, FRP, and custom fiberglass components designed for rigorous industrial, electrical, and transport applications.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 hidden sm:inline flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                Category:
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
                  {cat === 'All' ? 'All Products' : `${cat}`}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products or applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 sm:py-16 grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Summary */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs text-slate-500">
              Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> composite product families
              {selectedCategory !== 'All' && <span> in <strong className="text-orange-600">{selectedCategory}</strong></span>}
            </p>
            <Link
              href="/contact"
              className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1"
            >
              Need a Custom Formulation? Request RFQ <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <Info className="w-8 h-8 text-slate-400 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">No matching products found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                No products match your search query &ldquo;{searchQuery}&rdquo;. Try clearing filters or search terms.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-xs font-semibold rounded-lg"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <TiltCard key={product.id} className="h-full">
                  <div
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-2xl hover:border-slate-300 transition-all duration-300 group h-full"
                  >
                    {/* Image Container */}
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

                      {/* Applications List */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                          Typical Applications:
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

                      {/* Quick Specs Highlight */}
                      <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px]">
                        <div className="bg-slate-50 p-2 rounded border border-slate-100">
                          <span className="text-slate-400 block">Matrix</span>
                          <span className="font-semibold text-slate-800 truncate block">Thermoset Resin</span>
                        </div>
                        <div className="bg-slate-50 p-2 rounded border border-slate-100">
                          <span className="text-slate-400 block">Tooling</span>
                          <span className="font-semibold text-slate-800 truncate block">Matched Steel Dies</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-4 flex items-center justify-between border-t border-slate-100 gap-2">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-slate-600" />
                          <span>View Details</span>
                        </button>
                        <button
                          onClick={() => handleOpenQuote(product.name)}
                          className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
                        >
                          Request RFQ
                        </button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Engineering Consultation Callout */}
      <section className="bg-white py-14 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
            Custom Product Development
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Need a Custom Mould or Proprietary Compound Formulation?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We collaborate with OEM product engineering teams from 3D CAD design review, compression flow simulation, prototype mould fabrication, to continuous volume compression production.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#0f1d40] hover:bg-[#1b2a4e] text-white text-xs sm:text-sm font-semibold rounded-lg shadow transition-colors inline-flex items-center gap-2"
            >
              <span>Consult With Our Bhosari Engineering Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(productName) => handleOpenQuote(productName)}
      />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedProduct={quoteProduct}
      />
    </div>
  );
}

