'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Phone, Building, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Valid email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Phone number must be at least 8 digits';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide your message or product enquiry details';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your enquiry';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Card Header */}
      <div className="bg-[#0f1d40] px-6 sm:px-8 py-6 text-white border-b border-orange-500/30">
        <span className="text-xs font-semibold text-orange-400 tracking-wider uppercase block mb-1">
          Direct Technical Communications
        </span>
        <h3 className="text-xl sm:text-2xl font-bold">
          Send Manufacturing & Composite Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Polychemical Fibroplast Private Limited • Bhosari MIDC, Pune
        </p>
      </div>

      <div className="p-6 sm:p-8">
        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                Enquiry Received
              </span>
              <h4 className="text-2xl font-extrabold text-slate-900">
                Thank You, {formData.name}!
              </h4>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Your enquiry has been successfully registered with Polychemical Fibroplast. Our technical engineering desk at Bhosari MIDC, Pune, will review your submission and contact you directly.
              </p>
            </div>

            {/* Receipt Details */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 max-w-lg mx-auto text-left text-xs space-y-2.5 text-slate-700">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Ticket Reference:</span>
                <span className="font-mono font-bold text-slate-900">PFPL-INQ-{Date.now().toString().slice(-6)}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Plant Location:</span>
                <span className="font-medium text-slate-900">Bhosari MIDC, Pune, Maharashtra</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Direct Email:</span>
                <span className="font-medium text-slate-900">polychemicalfrp@gmail.com</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Sender Details:</span>
                <span className="font-medium text-slate-900">{formData.name} ({formData.email} • {formData.phone})</span>
              </div>
              {formData.subject && (
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Enquiry Category:</span>
                  <span className="font-medium text-slate-900">{formData.subject}</span>
                </div>
              )}
              <div className="pt-1">
                <span className="text-slate-500 block mb-1">Message Recorded:</span>
                <p className="p-2.5 bg-white rounded border border-slate-200 text-slate-800 italic">
                  &ldquo;{formData.message}&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#0f1d40] hover:bg-[#1b2a4e] text-white font-semibold text-sm rounded-lg shadow transition-colors"
              >
                Submit Another Message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p>
                <strong>Prompt Technical Support:</strong> You can also email 2D/3D component drawings directly to <a href="mailto:polychemicalfrp@gmail.com" className="text-orange-600 font-semibold underline">polychemicalfrp@gmail.com</a> or reach our Bhosari facility at <strong>+91 88888 73236</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-orange-600">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anand Kulkarni"
                  className={`w-full text-sm px-3.5 py-2.5 rounded-lg border ${
                    errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-[#0f1d40] focus:ring-slate-100'
                  } focus:outline-none focus:ring-2`}
                />
                {errors.name && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address <span className="text-orange-600">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. anand@company.in"
                  className={`w-full text-sm px-3.5 py-2.5 rounded-lg border ${
                    errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-[#0f1d40] focus:ring-slate-100'
                  } focus:outline-none focus:ring-2`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number <span className="text-orange-600">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 98220 XXXXX"
                  className={`w-full text-sm px-3.5 py-2.5 rounded-lg border ${
                    errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-[#0f1d40] focus:ring-slate-100'
                  } focus:outline-none focus:ring-2`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Enquiry Category / Product Focus
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0f1d40] focus:ring-2 focus:ring-slate-100 focus:outline-none bg-white"
                >
                  <option value="">Select Category (Optional)</option>
                  <option value="SMC Moulded Components RFQ">SMC Moulded Components RFQ</option>
                  <option value="BMC Electrical Enclosures RFQ">BMC Electrical Enclosures RFQ</option>
                  <option value="FRP Industrial Components">FRP Industrial Components</option>
                  <option value="Automotive Composite Lightweighting">Automotive Composite Lightweighting</option>
                  <option value="Custom Tooling & Die Development">Custom Tooling & Die Development</option>
                  <option value="General Plant & Facility Enquiry">General Plant & Facility Enquiry</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Detailed Component Requirements <span className="text-orange-600">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please describe component dimensions, estimated monthly or annual volume, target material (FRP, SMC, BMC), and operating environment..."
                className={`w-full text-sm px-3.5 py-2.5 rounded-lg border ${
                  errors.message ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-[#0f1d40] focus:ring-slate-100'
                } focus:outline-none focus:ring-2`}
              ></textarea>
              {errors.message && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.message}
                </p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-orange-500/25 transition-all active:scale-95 disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Transmitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Manufacturing Enquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
