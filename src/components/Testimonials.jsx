import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevIdx) => (prevIdx === 0 ? companyData.testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrent((prevIdx) => (prevIdx === companyData.testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f4f6fc] relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#edf2f9] text-[#ff612f] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
          <span>Client Testimonials</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#080a3c] tracking-tight">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#4a6f8a] max-w-xl mx-auto">
          Hear direct feedback from founders and tech executives who trust Macro Soar Technologies.
        </p>

        {/* Testimonial Card */}
        <div className="mt-14 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-12 rounded-2xl bg-white border border-slate-100 shadow-[0_15px_40px_rgba(8,10,60,0.08)] text-left relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-8 w-16 h-16 text-slate-100 pointer-events-none" />

              {/* Stars */}
              <div className="flex items-center gap-1 text-[#ffb300] mb-5">
                {[...Array(companyData.testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#ffb300]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base sm:text-xl text-[#080a3c] font-medium leading-relaxed italic relative z-10">
                "{companyData.testimonials[current].quote}"
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <img
                    src={companyData.testimonials[current].avatar}
                    alt={companyData.testimonials[current].author}
                    className="w-13 h-13 rounded-full object-cover border-2 border-[#ff612f]/30"
                  />
                  <div>
                    <h4 className="font-bold text-[#080a3c] text-base">
                      {companyData.testimonials[current].author}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4a6f8a]">
                      {companyData.testimonials[current].title} &bull; <span className="font-semibold text-[#ff612f]">{companyData.testimonials[current].company}</span>
                    </p>
                  </div>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="p-2.5 rounded-full bg-slate-50 border border-slate-200 text-[#080a3c] hover:bg-[#ff612f] hover:text-white hover:border-[#ff612f] transition-all cursor-pointer"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="p-2.5 rounded-full bg-slate-50 border border-slate-200 text-[#080a3c] hover:bg-[#ff612f] hover:text-white hover:border-[#ff612f] transition-all cursor-pointer"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {companyData.testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  current === i ? 'w-8 bg-[#ff612f]' : 'w-2.5 bg-slate-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
