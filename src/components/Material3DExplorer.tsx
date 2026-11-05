'use client';

import React, { useState } from 'react';
import { Layers, ShieldCheck, Zap, Flame, Gauge, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface MaterialSpec {
  id: 'smc' | 'bmc' | 'frp';
  title: string;
  fullName: string;
  subtitle: string;
  tensileStrength: number; // 0-100 scale for visual gauge
  tensileValue: string;
  dielectricStrength: number;
  dielectricValue: string;
  thermalCeiling: number;
  thermalValue: string;
  corrosionImmunity: number;
  corrosionValue: string;
  layers: { name: string; role: string; color: string; depth: string }[];
  keyAdvantage: string;
}

const MATERIALS: MaterialSpec[] = [
  {
    id: 'smc',
    title: 'SMC Technology',
    fullName: 'Sheet Moulding Compound',
    subtitle: 'High-Tonnage Compression Moulded Thermoset',
    tensileStrength: 85,
    tensileValue: '180 – 220 MPa',
    dielectricStrength: 92,
    dielectricValue: '14 – 18 kV/mm',
    thermalCeiling: 88,
    thermalValue: '160°C Continuous',
    corrosionImmunity: 95,
    corrosionValue: 'pH 2 to 12 Immune',
    keyAdvantage: 'Replaces automotive steel panels with 35% weight reduction and zero rust.',
    layers: [
      { name: 'Class-A Surface Finish', role: 'Automotive paint-ready smooth cosmetic resin finish', color: 'from-orange-500 to-amber-500', depth: '0.2 mm' },
      { name: 'Dispersed E-Glass Roving (25-30%)', role: 'Continuous tensile stress absorption and multidirectional stiffness', color: 'from-sky-500 to-blue-600', depth: '2.5 mm' },
      { name: 'Thermoset Polyester Matrix', role: 'Flame-retardant cross-linked polymer core with alumina trihydrate', color: 'from-indigo-600 to-slate-800', depth: '3.0 mm' },
    ],
  },
  {
    id: 'bmc',
    title: 'BMC Technology',
    fullName: 'Bulk Moulding Compound',
    subtitle: 'Close-Tolerance Thick/Thin Wall Formulations',
    tensileStrength: 78,
    tensileValue: '120 – 160 MPa',
    dielectricStrength: 98,
    dielectricValue: '>18 kV/mm (CTI 600V)',
    thermalCeiling: 94,
    thermalValue: '180°C – 200°C',
    corrosionImmunity: 90,
    corrosionValue: 'Arc & Chemical Resistant',
    keyAdvantage: 'Highest electrical arc resistance and zero dimensional shrinkage for precision switchgear.',
    layers: [
      { name: 'Arc-Quenching Outer Barrier', role: 'Prevents flashover and carbon tracking under high voltage', color: 'from-amber-500 to-yellow-600', depth: '0.5 mm' },
      { name: 'Short Chopped Fiber Roving', role: 'Isotropic structural stability without fiber orientation bias', color: 'from-emerald-500 to-teal-700', depth: '4.0 mm' },
      { name: 'In-Mould Threaded Metal Inserts', role: 'Integral brass and stainless steel mounting bushings', color: 'from-slate-400 to-zinc-600', depth: 'Variable' },
    ],
  },
  {
    id: 'frp',
    title: 'FRP Composite',
    fullName: 'Fiberglass Reinforced Polymer',
    subtitle: 'Continuous Filament & Multi-Axial Lamination',
    tensileStrength: 95,
    tensileValue: '220 – 280 MPa',
    dielectricStrength: 85,
    dielectricValue: '12 – 15 kV/mm',
    thermalCeiling: 80,
    thermalValue: '120°C Continuous',
    corrosionImmunity: 99,
    corrosionValue: '100% Acid & Salt Immune',
    keyAdvantage: 'Superior specific tensile strength outperforming structural steel pound-for-pound.',
    layers: [
      { name: 'ISO-NPG Chemical Gelcoat', role: 'UV-stabilized anti-osmosis protective shield', color: 'from-cyan-400 to-blue-500', depth: '0.4 mm' },
      { name: 'Woven Roving 600 GSM', role: 'High directional load paths for maximum bending rigidity', color: 'from-orange-500 to-red-600', depth: '2.0 mm' },
      { name: 'Vinyl Ester Resin Infusion', role: 'Zero-void dense bonding matrix for extreme chemical tanks', color: 'from-violet-600 to-slate-900', depth: '5.0 mm' },
    ],
  },
];

export default function Material3DExplorer() {
  const [selectedMat, setSelectedMat] = useState<'smc' | 'bmc' | 'frp'>('smc');
  const [exploded, setExploded] = useState(false);

  const current = MATERIALS.find((m) => m.id === selectedMat) || MATERIALS[0];

  return (
    <div className="bg-gradient-to-br from-[#0c1633] via-[#080f24] to-[#040814] rounded-3xl border border-orange-500/30 p-6 sm:p-10 shadow-2xl text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <span className="text-xs font-mono font-bold text-orange-400 tracking-wider uppercase flex items-center gap-1.5">
            <Layers className="w-4 h-4" />
            3D Composite Layer & Physics Inspector
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Microscopic Material Architecture
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Engineered in Bhosari MIDC, Pune to replace corrosive metals with high-end composite endurance.
          </p>
        </div>

        {/* Material Switcher Tabs */}
        <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-700/80">
          {MATERIALS.map((mat) => (
            <button
              key={mat.id}
              onClick={() => setSelectedMat(mat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedMat === mat.id
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-950/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {mat.id.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: 3D Isometric Layer Visualization */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-200">
              Interactive Cross-Section Architecture
            </h4>
            <button
              onClick={() => setExploded(!exploded)}
              className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-orange-400 border border-slate-700 transition-colors"
            >
              {exploded ? 'Collapse Matrix' : 'Explode 3D Layers'}
            </button>
          </div>

          {/* 3D Layer Stack in Perspective */}
          <div className="relative py-8 px-6 bg-slate-950/60 rounded-2xl border border-slate-800/80 flex flex-col items-center justify-center min-h-[300px]">
            <div
              className={`w-full max-w-md transition-all duration-500 ${
                exploded ? 'space-y-6' : 'space-y-1.5'
              }`}
              style={{
                perspective: '1000px',
                transform: 'rotateX(22deg) rotateZ(-6deg)',
              }}
            >
              {current.layers.map((layer, idx) => (
                <div
                  key={idx}
                  className={`relative p-4 rounded-xl bg-gradient-to-r ${layer.color} shadow-2xl border border-white/20 text-white transform-gpu transition-all duration-300 hover:scale-105 cursor-pointer`}
                  style={{
                    transform: exploded ? `translateZ(${idx * 30}px)` : 'none',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider opacity-80 block">
                        Layer 0{idx + 1} • {layer.depth}
                      </span>
                      <strong className="text-sm font-bold block">{layer.name}</strong>
                    </div>
                    <span className="text-xs bg-black/40 px-2 py-0.5 rounded-full font-mono">
                      #{idx + 1}
                    </span>
                  </div>
                  {exploded && (
                    <p className="text-[11px] text-white/90 mt-2 border-t border-white/20 pt-1.5">
                      {layer.role}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 text-center text-xs text-slate-400 font-mono">
              Thermoset Molded Cross-Section Matrix • Bhosari Precision Tooling
            </div>
          </div>
        </div>

        {/* Right: Technical Physics Specs & Metrics */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs text-orange-400 font-mono font-bold uppercase tracking-wider">
              {current.fullName}
            </span>
            <h4 className="text-2xl font-black text-white mt-0.5">
              {current.title}
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {current.keyAdvantage}
            </p>
          </div>

          {/* Metric Performance Gauges */}
          <div className="space-y-3.5 bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
            {/* Tensile */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-orange-400" />
                  Specific Tensile Strength
                </span>
                <span className="font-bold text-white font-mono">{current.tensileValue}</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-700"
                  style={{ width: `${current.tensileStrength}%` }}
                />
              </div>
            </div>

            {/* Dielectric */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-sky-400" />
                  Dielectric Breakdown Barrier
                </span>
                <span className="font-bold text-white font-mono">{current.dielectricValue}</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-500 to-blue-400 rounded-full transition-all duration-700"
                  style={{ width: `${current.dielectricStrength}%` }}
                />
              </div>
            </div>

            {/* Thermal */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  Thermal Deflection Ceiling
                </span>
                <span className="font-bold text-white font-mono">{current.thermalValue}</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-700"
                  style={{ width: `${current.thermalCeiling}%` }}
                />
              </div>
            </div>

            {/* Corrosion */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Corrosion & Acid Immunity
                </span>
                <span className="font-bold text-white font-mono">{current.corrosionValue}</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700"
                  style={{ width: `${current.corrosionImmunity}%` }}
                />
              </div>
            </div>
          </div>

          {/* Action Link */}
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href={`/contact?subject=${encodeURIComponent(current.fullName + ' Component Formulation')}`}
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-orange-950/40 transition-all inline-flex items-center gap-2"
            >
              <span>Request Custom Compound Formulation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm rounded-xl border border-slate-700 transition-colors inline-flex items-center gap-2"
            >
              <span>Explore All {current.id.toUpperCase()} Products</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

