import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, ShieldCheck, Globe, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';

function CounterItem({ end, suffix, label, description }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(end % 1 !== 0 ? 1 : 0)));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="soar-card p-6 text-left group">
      <div className="flex items-baseline gap-1">
        <span className="text-4xl sm:text-5xl font-extrabold text-[#080a3c] font-sans">
          {count}
        </span>
        <span className="text-2xl sm:text-3xl font-bold text-[#ff612f]">
          {suffix}
        </span>
      </div>
      <h4 className="mt-3 text-base font-bold text-[#080a3c]">{label}</h4>
      <p className="mt-1 text-xs sm:text-sm text-[#4a6f8a]">{description}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Telemetry Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {companyData.stats.map((stat, idx) => (
              <CounterItem
                key={idx}
                end={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </motion.div>

          {/* Right Column: Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f6fc] border border-[#edf2f9] text-[#ff612f] text-xs font-semibold uppercase tracking-wider">
              <span>About Macro Soar</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080a3c] leading-tight">
              We Help Modern Businesses Scale Through Intelligent Technology.
            </h2>

            <p className="text-[#4a6f8a] text-base leading-relaxed">
              At <strong className="text-[#080a3c]">Macro Soar Technologies</strong> (<a href="https://macrosoar.com" className="text-[#ff612f] font-semibold hover:underline">macrosoar.com</a>), we engineer bespoke software solutions, cyber-resilient web ecosystems, and autonomous AI systems that transform enterprise efficiency.
            </p>

            <p className="text-[#4a6f8a] text-sm sm:text-base leading-relaxed">
              Our multidisciplinary engineers work side-by-side with your leadership to turn complex operational friction into streamlined, revenue-generating software systems.
            </p>

            {/* Core Values */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#13c4a1] shrink-0" />
                <span className="text-[#080a3c] font-medium text-sm sm:text-base">Customized Architecture Tailored to Your Precise Domain</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#13c4a1] shrink-0" />
                <span className="text-[#080a3c] font-medium text-sm sm:text-base">Continuous Security Hardening & Zero-Trust Verification</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#13c4a1] shrink-0" />
                <span className="text-[#080a3c] font-medium text-sm sm:text-base">Agile Development Sprints with Fast Production Deployments</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 btn-primary-gradient px-7 py-3 rounded-md font-semibold text-sm cursor-pointer"
              >
                <span>Read More About Our Process</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
