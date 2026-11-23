import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle2, Award, Clock } from 'lucide-react';
import { companyData } from '../data/companyData';

const iconMap = {
  Zap,
  CheckCircle2,
  Award,
  Clock,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f6fc] border border-[#edf2f9] text-[#ff612f] text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Why Choose Us</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#080a3c] tracking-tight leading-tight">
              The Macro Soar Competitive Advantage.
            </h2>

            <p className="mt-4 text-base text-[#4a6f8a] leading-relaxed">
              We eliminate technical bottlenecks with battle-tested architectures, guaranteed delivery schedules, and proactive engineering support.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-[#f4f6fc] border border-slate-100 text-left">
              <div className="text-3xl font-extrabold text-[#080a3c]">100%</div>
              <p className="text-sm font-medium text-[#4a6f8a] mt-1">Complete Intellectual Property & Code Ownership</p>
              <div className="w-full bg-slate-200 h-2 rounded-full mt-4 overflow-hidden">
                <div className="bg-[#ff612f] h-full w-full rounded-full" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {companyData.whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon] || Zap;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="soar-card p-6 bg-white border border-slate-100 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ffd7cb] text-[#ff612f] flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#080a3c] group-hover:text-[#ff612f] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#4a6f8a] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
