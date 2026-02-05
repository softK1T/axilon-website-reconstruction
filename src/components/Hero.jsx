import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="overflow-hidden mb-6">
          <p className="text-[#c9a962] text-[13px] tracking-[0.4em] uppercase animate-fade-in-up">
            Agencja Pracy Tymczasowej
          </p>
        </div>

        <div className="overflow-hidden mb-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight animate-fade-in-up animation-delay-200">
            Twoja kariera
            <br />
            <span className="italic">zaczyna się tutaj</span>
          </h1>
        </div>

        <div className="overflow-hidden mb-12">
          <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Profesjonalne pośrednictwo pracy w Polsce. 
            Łączymy pracodawców z wykwalifikowanymi pracownikami od ponad 11 lat.
          </p>
        </div>

        <div className="overflow-hidden animate-fade-in-up animation-delay-600">
          <a
            href="#jobs"
            className="inline-block border border-white/30 text-white px-10 py-4 text-[13px] tracking-wider uppercase hover:bg-white hover:text-gray-900 transition-all duration-500"
          >
            Zobacz oferty pracy
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white/60 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>

      {/* Side Text */}
      <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left">
        <span className="text-white/40 text-[11px] tracking-[0.4em] uppercase">
          Axilon Group — Łódź, Polska
        </span>
      </div>
    </section>
  );
};

export default Hero;
