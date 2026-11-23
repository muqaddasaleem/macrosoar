import React from 'react';
import { ArrowUp, Mail, Globe, Code2, Share2, MapPin, Phone } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080a3c] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Logo & Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg inline-block">
                <img
                  src="/macrosoar-logo.png"
                  alt="Macro Soar Technologies"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              Macro Soar Technologies delivers end-to-end custom software solutions, enterprise cloud architectures, and machine learning services for global brands.
            </p>

            <div className="flex items-center gap-3 pt-2 text-white">
              <a href="https://macrosoar.com" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff612f] flex items-center justify-center transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff612f] flex items-center justify-center transition-colors" aria-label="Repository">
                <Code2 className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff612f] flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="mailto:contact@macrosoar.com" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff612f] flex items-center justify-center transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="#about" className="hover:text-[#ff612f] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#ff612f] transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-[#ff612f] transition-colors">Case Studies</a></li>
              <li><a href="#technologies" className="hover:text-[#ff612f] transition-colors">Technologies</a></li>
              <li><a href="#testimonials" className="hover:text-[#ff612f] transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="#services" className="hover:text-[#ff612f] transition-colors">Custom Software</a></li>
              <li><a href="#services" className="hover:text-[#ff612f] transition-colors">AI & LLM Solutions</a></li>
              <li><a href="#services" className="hover:text-[#ff612f] transition-colors">Cloud Microservices</a></li>
              <li><a href="#services" className="hover:text-[#ff612f] transition-colors">Cyber Defense</a></li>
              <li><a href="#services" className="hover:text-[#ff612f] transition-colors">Web & Mobile Apps</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ff612f] shrink-0 mt-0.5" />
                <span>San Francisco, CA &bull; Global Operations</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ff612f] shrink-0" />
                <span>+1 (800) 555-SOAR</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ff612f] shrink-0" />
                <span>contact@macrosoar.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Macro Soar Technologies (<a href="https://macrosoar.com" className="text-[#ff612f] hover:underline">macrosoar.com</a>). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#ff612f] text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
