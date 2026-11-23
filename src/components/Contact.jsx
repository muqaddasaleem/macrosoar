import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Custom Software Development',
    budget: '$10k - $25k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f6fc] border border-[#edf2f9] text-[#ff612f] text-xs font-semibold uppercase tracking-wider">
              <span>Contact Us</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#080a3c] tracking-tight leading-tight">
              Ready to Discuss Your Next Project?
            </h2>

            <p className="text-[#4a6f8a] text-base leading-relaxed">
              Connect with our technology consulting team to evaluate your architecture, discuss delivery timelines, or schedule an initial roadmap session.
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f4f6fc] border border-slate-100">
                <div className="w-12 h-12 rounded-lg bg-white text-[#ff612f] flex items-center justify-center shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#4a6f8a] font-medium">Email Inquiry</span>
                  <p className="text-[#080a3c] font-bold text-sm">contact@macrosoar.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f4f6fc] border border-slate-100">
                <div className="w-12 h-12 rounded-lg bg-white text-[#13c4a1] flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#4a6f8a] font-medium">Direct Telephone</span>
                  <p className="text-[#080a3c] font-bold text-sm">+1 (800) 555-SOAR</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f4f6fc] border border-slate-100">
                <div className="w-12 h-12 rounded-lg bg-white text-[#6ec1e4] flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#4a6f8a] font-medium">Global Locations</span>
                  <p className="text-[#080a3c] font-bold text-sm">San Francisco &bull; London &bull; Remote</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="soar-card p-8 sm:p-10 bg-white border border-slate-100 shadow-[0_15px_40px_rgba(8,10,60,0.08)] text-left">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#bce9e5] text-[#13c4a1] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#080a3c]">Inquiry Submitted</h3>
                  <p className="text-[#4a6f8a] text-sm max-w-md mx-auto">
                    Thank you for reaching out to Macro Soar Technologies. A principal software architect will review your message and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', service: 'Custom Software Development', budget: '$10k - $25k', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-md bg-[#080a3c] text-white text-xs font-semibold uppercase hover:bg-[#ff612f] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#080a3c] uppercase mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-lg bg-[#f4f6fc] border border-slate-200 text-[#080a3c] placeholder-[#8097b1] text-sm focus:outline-none focus:border-[#ff612f] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#080a3c] uppercase mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#f4f6fc] border border-slate-200 text-[#080a3c] placeholder-[#8097b1] text-sm focus:outline-none focus:border-[#ff612f] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#080a3c] uppercase mb-2">
                        Select Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#f4f6fc] border border-slate-200 text-[#080a3c] text-sm focus:outline-none focus:border-[#ff612f] transition-colors"
                      >
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                        <option value="Cloud Infrastructure">Cloud & Microservices</option>
                        <option value="Cyber Security">Cyber Security & Audit</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#080a3c] uppercase mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#f4f6fc] border border-slate-200 text-[#080a3c] text-sm focus:outline-none focus:border-[#ff612f] transition-colors"
                      >
                        <option value="<$10k">&lt; $10k (MVP Sprint)</option>
                        <option value="$10k - $25k">$10k - $25k (Production Feature)</option>
                        <option value="$25k - $100k">$25k - $100k (Enterprise Scale)</option>
                        <option value="$100k+">$100k+ (Full Scale Platform)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#080a3c] uppercase mb-2">
                      Project Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your requirements, timeline, and goals..."
                      className="w-full px-4 py-3 rounded-lg bg-[#f4f6fc] border border-slate-200 text-[#080a3c] placeholder-[#8097b1] text-sm focus:outline-none focus:border-[#ff612f] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-md btn-primary-gradient font-bold text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{loading ? 'Submitting Inquiry...' : 'Submit Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#4a6f8a] pt-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#13c4a1]" />
                    <span>Your privacy is safeguarded &bull; Strict Non-Disclosure (NDA)</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
