import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Cloud, 
  Globe, 
  ShieldCheck, 
  Boxes, 
  Sparkles, 
  ArrowRight, 
  Check 
} from 'lucide-react';
import { companyData } from '../data/companyData';

const iconMap = {
  Cpu,
  Cloud,
  Globe,
  ShieldCheck,
  Boxes,
  Sparkles,
};

const serviceAccentColors = [
  { iconBg: 'bg-[#ffd7cb]', iconColor: 'text-[#ff612f]', borderHover: 'hover:border-[#ff612f]' },
  { iconBg: 'bg-[#bce9e5]', iconColor: 'text-[#13c4a1]', borderHover: 'hover:border-[#13c4a1]' },
  { iconBg: 'bg-[#f4f5fe]', iconColor: 'text-[#286efa]', borderHover: 'hover:border-[#286efa]' },
  { iconBg: 'bg-[#fed2e1]', iconColor: 'text-[#fc4c86]', borderHover: 'hover:border-[#fc4c86]' },
  { iconBg: 'bg-[#ffecbf]', iconColor: 'text-[#ffb300]', borderHover: 'hover:border-[#ffb300]' },
  { iconBg: 'bg-[#d6f0ff]', iconColor: 'text-[#6ec1e4]', borderHover: 'hover:border-[#6ec1e4]' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f4f6fc] relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#edf2f9] text-[#ff612f] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
          <span>What We Provide</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#080a3c] tracking-tight">
          Comprehensive Software Services
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#4a6f8a] max-w-2xl mx-auto">
          Delivering specialized end-to-end engineering, cloud resilience, and intelligent automation built to solve real-world industry challenges.
        </p>

        {/* Services Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {companyData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Cpu;
            const style = serviceAccentColors[index % serviceAccentColors.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`soar-card p-8 bg-white flex flex-col justify-between group ${style.borderHover}`}
              >
                <div>
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl ${style.iconBg} ${style.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-sm font-bold text-slate-300 group-hover:text-[#ff612f] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#080a3c] group-hover:text-[#ff612f] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#4a6f8a] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-6 space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-[#4a6f8a]">
                        <Check className="w-4 h-4 text-[#13c4a1] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer link */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#080a3c] group-hover:text-[#ff612f]">
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
