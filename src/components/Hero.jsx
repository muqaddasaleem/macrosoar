import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#f4f6fc] via-[#ffffff] to-[#ffffff]">
      {/* Subtle organic decorative background blobs from the reference theme */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#6ec1e4]/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#ff612f]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and CTA */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffd7cb]/60 border border-[#ff612f]/30 text-[#ff612f] text-xs sm:text-sm font-semibold tracking-wide"
            >
              <Sparkles className="w-4 h-4" />
              <span>We Are A Full-Service Technology Company</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#080a3c] leading-[1.15]"
            >
              Transforming Ideas Into <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff612f] to-[#fc4c86]">
                Powerful Digital Reality
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#4a6f8a] max-w-xl leading-relaxed"
            >
              Macro Soar Technologies provides cutting-edge software development, enterprise cloud architectures, AI systems, and cyber security solutions designed to propel your business forward.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#services"
                className="btn-primary-gradient px-8 py-3.5 rounded-md font-semibold text-center flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Discover Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="btn-navy-outline px-8 py-3 rounded-md font-semibold text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get In Touch</span>
              </a>
            </motion.div>

            {/* Key Assurance Badges */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-medium text-[#080a3c]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#13c4a1]" />
                <span>100% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff612f]" />
                <span>Top-Tier Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#6ec1e4]" />
                <span>24/7 Dedicated Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual from reference illustrations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Central Illustration Card */}
              <div className="soar-card p-6 sm:p-8 bg-white border border-[#edf2f9] relative z-10 text-left">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff612f]" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-[#13c4a1]" />
                  </div>
                  <span className="text-xs font-semibold text-[#13c4a1] bg-[#13c4a1]/10 px-2.5 py-1 rounded-full">
                    LIVE SYSTEM
                  </span>
                </div>

                <div className="py-6 space-y-4">
                  <div className="p-4 rounded-xl bg-[#f4f6fc] flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#ff612f] shadow-sm">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#080a3c] text-sm sm:text-base">Custom Software & AI</h4>
                      <p className="text-xs text-[#4a6f8a]">High-performance scalable applications</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f8fbfa] flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#13c4a1] shadow-sm">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#080a3c] text-sm sm:text-base">Cyber Defense & Cloud</h4>
                      <p className="text-xs text-[#4a6f8a]">Enterprise security & 99.8% uptime</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#4a6f8a]">
                  <span>macrosoar.com</span>
                  <span className="font-semibold text-[#ff612f]">Verified Engineering</span>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-full bg-[#ff612f]/10 text-[#ff612f] flex items-center justify-center font-bold text-lg">
                  ★
                </div>
                <div>
                  <div className="font-bold text-[#080a3c] text-sm">120+ Completed</div>
                  <div className="text-xs text-[#4a6f8a]">Global Deployments</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
