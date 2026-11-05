'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedProduct }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    materialType: preselectedProduct || 'SMC (Sheet Moulding Compound)',
    estimatedVolume: 'Pilot / Prototype (1-100 pcs)',
    applicationDesc: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid phone contact';
    }
    if (!formData.applicationDesc.trim()) {
      newErrors.applicationDesc = 'Please describe your component requirements or specifications';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      materialType: 'SMC (Sheet Moulding Compound)',
      estimatedVolume: 'Pilot / Prototype (1-100 pcs)',
      applicationDesc: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f1d40] text-white px-6 py-5 flex items-center justify-between border-b border-orange-500/30">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-semibold text-orange-400 tracking-wider uppercase">Direct Engineering Enquiry</span>
            </div>
            <h3 className="text-xl font-bold mt-1 text-white">Request Technical Quote</h3>
            <p className="text-xs text-slate-300">Polychemical Fibroplast Private Limited • Bhosari MIDC, Pune</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Enquiry Received Successfully</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your requirement for <strong>{formData.materialType}</strong> has been transmitted to our estimating and technical desk at Bhosari MIDC, Pune.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-lg mx-auto text-left text-xs space-y-2 text-slate-700">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Enquiry Reference:</span>
                  <span className="font-mono font-semibold text-slate-900">PFPL-RFQ-{Math.floor(10000 + Math.random() * 90000)}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Direct Office:</span>
                  <span className="font-medium text-slate-900">Bhosari MIDC, Pune (polychemicalfrp@gmail.com)</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Product / Technology:</span>
                  <span className="font-medium text-slate-900">{formData.materialType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Registered Email:</span>
                  <span className="font-medium text-slate-900">{formData.email}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#0f1d40] hover:bg-[#1b2a4e] text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
                >
                  Close Receipt
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 text-slate-700 p-3 rounded-lg text-xs flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Our technical estimating desk in Bhosari MIDC evaluates 3D CAD models, part drawings, and composite compound specifications with rapid turnaround.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Patil"
                    className={`w-full text-sm px-3.5 py-2.5 rounded-lg border ${
                      errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-[#0f1d40] focus:ring-slate-100'
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.name && <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Industrial Systems"
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0f1d40] focus:ring-2 focus:ring-slate-100 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. contact@company.com"
                    className={`w-full text-sm px-3.5 py-2.5 rounded-lg border ${
                      errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-[#0f1d40] focus:ring-slate-100'
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Phone Number <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full text-sm px-3.5 py-2.5 rounded-lg border ${
                      errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-[#0f1d40] focus:ring-slate-100'
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Material / Technology
                  </label>
                  <select
                    value={formData.materialType}
                    onChange={(e) => setFormData({ ...formData, materialType: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0f1d40] focus:ring-2 focus:ring-slate-100 focus:outline-none bg-white"
                  >
                    <option value="SMC (Sheet Moulding Compound)">SMC (Sheet Moulding Compound)</option>
                    <option value="BMC (Bulk Moulding Compound)">BMC (Bulk Moulding Compound)</option>
                    <option value="FRP (Fiber Reinforced Polymer)">FRP (Fiber Reinforced Polymer)</option>
                    <option value="Fiberglass Industrial Components">Fiberglass Industrial Components</option>
                    <option value="Composite Matched Die Moulded">Composite Matched Die Moulded</option>
                    <option value="Custom Tooling & Moulding Design">Custom Tooling & Moulding Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Estimated Production Volume
                  </label>
                  <select
                    value={formData.estimatedVolume}
                    onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0f1d40] focus:ring-2 focus:ring-slate-100 focus:outline-none bg-white"
                  >
                    <option value="Pilot / Prototype (1-100 pcs)">Pilot / Prototype (1-100 pcs)</option>
                    <option value="Medium Volume (100 - 1,000 pcs/mo)">Medium Volume (100 - 1,000 pcs/mo)</option>
                    <option value="High Volume (1,000 - 10,000+ pcs/mo)">High Volume (1,000 - 10,000+ pcs/mo)</option>
                    <option value="Custom Tooling Development Only">Custom Tooling Development Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Component Specifications / Application Requirements <span className="text-orange-600">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.applicationDesc}
                  onChange={(e) => setFormData({ ...formData, applicationDesc: e.target.value })}
                  placeholder="Include approximate dimensions, critical operating conditions (temperature, chemical exposure, electrical voltage), or target application..."
                  className={`w-full text-sm px-3.5 py-2.5 rounded-lg border ${
                    errors.applicationDesc ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-[#0f1d40] focus:ring-slate-100'
                  } focus:outline-none focus:ring-2`}
                ></textarea>
                {errors.applicationDesc && <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.applicationDesc}</p>}
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-lg shadow transition-all hover:shadow-orange-500/25 active:scale-95 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
