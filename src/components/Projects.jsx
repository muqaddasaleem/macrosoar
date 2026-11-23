import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Artificial Intelligence', 'Fintech & Web3', 'Enterprise Cloud & 3D', 'Healthcare & AI'];

  const filteredProjects = filter === 'All'
    ? companyData.projects
    : companyData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f6fc] border border-[#edf2f9] text-[#ff612f] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Portfolio Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#080a3c] tracking-tight">
            Our Successful Client Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4a6f8a]">
            Explore some of the high-impact software applications, fintech engines, and cloud platforms engineered by Macro Soar Technologies.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-[#ff612f] text-white shadow-md shadow-[#ff612f]/30'
                  : 'bg-[#f4f6fc] text-[#4a6f8a] hover:bg-[#e4e8f0] hover:text-[#080a3c]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="soar-card overflow-hidden bg-white flex flex-col justify-between group"
            >
              {/* Image Preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#080a3c] shadow-sm">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-[#080a3c]/90 text-white shadow-sm">
                    ⚡ {project.metrics}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#080a3c] group-hover:text-[#ff612f] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#4a6f8a] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#f4f6fc] text-[#080a3c]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-[#4a6f8a] font-medium">Macro Soar Verified</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff612f] hover:underline"
                  >
                    <span>View Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
