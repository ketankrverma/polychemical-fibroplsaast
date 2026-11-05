'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Maximize2, Tag } from 'lucide-react';
import { GalleryItem } from '@/data/siteData';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({ items, currentIndex, onClose, onNavigate }: LightboxModalProps) {
  const isOpen = currentIndex !== null;
  const currentItem = currentIndex !== null ? items[currentIndex] : null;

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight' && currentIndex !== null) {
      onNavigate((currentIndex + 1) % items.length);
    }
    if (e.key === 'ArrowLeft' && currentIndex !== null) {
      onNavigate((currentIndex - 1 + items.length) % items.length);
    }
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 p-2.5 rounded-full border border-slate-700 transition-colors"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex! - 1 + items.length) % items.length);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-slate-900/80 hover:bg-orange-600 p-3 rounded-full border border-slate-700 transition-all hover:scale-105 active:scale-95 shadow-lg"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex! + 1) % items.length);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-slate-900/80 hover:bg-orange-600 p-3 rounded-full border border-slate-700 transition-all hover:scale-105 active:scale-95 shadow-lg"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center Image Container */}
      <div 
        className="relative max-w-5xl w-full flex flex-col items-center max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
          <Image
            src={currentItem.imageUrl}
            alt={currentItem.title}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Caption & Metadata Footer */}
        <div className="w-full bg-slate-900 p-5 border-t border-slate-800 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 font-semibold text-xs border border-orange-500/30 uppercase tracking-wider">
                  {currentItem.category}
                </span>
                <span className="text-slate-500 text-xs font-mono">
                  {currentIndex! + 1} of {items.length}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{currentItem.title}</h3>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl">{currentItem.description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-center">
              {currentItem.tags.map((tag, idx) => (
                <span key={idx} className="inline-flex items-center gap-1 text-[11px] bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">
                  <Tag className="w-3 h-3 text-orange-400" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

