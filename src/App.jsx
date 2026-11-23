import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#4a6f8a] flex flex-col font-sans">
      {/* Navbar with Macro Soar official branding */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Technologies />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>

      {/* Official styled Footer */}
      <Footer />
    </div>
  );
}
