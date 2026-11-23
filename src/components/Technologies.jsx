import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Code2, 
  Layers, 
  Brain, 
  Server, 
  Terminal, 
  Cpu, 
  Palette, 
  Database, 
  Cloud, 
  Share2, 
  Box 
} from 'lucide-react';
import { companyData } from '../data/companyData';

const iconMap = {
  Atom,
  Code2,
  Layers,
  Brain,
  Server,
  Terminal,
  Cpu,
  Palette,
  Database,
  Cloud,
  Share2,
  Box,
};

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fbfa] relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#edf2f9] text-[#ff612f] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
          <span>Our Tech Radar</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#080a3c] tracking-tight">
          Modern Frameworks & Technologies
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#4a6f8a] max-w-2xl mx-auto">
          We leverage the industry's most robust and performant software frameworks to build secure, fault-tolerant digital applications.
        </p>

        {/* Tech Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {companyData.technologies.map((tech, index) => {
            const Icon = iconMap[tech.icon] || Code2;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="soar-card p-5 bg-white flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f4f6fc] text-[#ff612f] group-hover:bg-[#ff612f] group-hover:text-white transition-all duration-300 flex items-center justify-center mb-3 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h4 className="font-bold text-sm sm:text-base text-[#080a3c] group-hover:text-[#ff612f] transition-colors">
                  {tech.name}
                </h4>
                
                <div className="flex items-center justify-between w-full mt-2 pt-2 border-t border-slate-100 text-xs text-[#4a6f8a]">
                  <span>{tech.category}</span>
                  <span className="text-[#13c4a1] font-bold">{tech.level}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-[#080a3c] text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-xl">
          <div>
            <h5 className="font-bold text-xl">Need a Customized Technology Stack?</h5>
            <p className="text-sm text-slate-300 mt-1">Our system architects will design a bespoke infrastructure plan for your specific requirements.</p>
          </div>
          <a
            href="#contact"
            className="btn-primary-gradient px-6 py-3 rounded-md text-sm font-semibold shrink-0"
          >
            Request Technical Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
