import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden bg-[#32373c]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          <div className="text-[#4FBDC6] text-6xl md:text-8xl font-black uppercase leading-none mb-4">
            AXILON
          </div>
          <h1 className="text-white text-3xl md:text-5xl font-bold uppercase leading-tight mb-6">
            Dobrze płatna praca<br />
            <span className="text-[#4FBDC6]">w Polsce</span>
          </h1>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Strona internetowa stworzona dla ludzi, którzy chcą znaleźć dobrą legalną pracę w Polsce.<br />
            U nas znajdziesz aktualne oferty pracy
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#4FBDC6] text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-[#32373c] transition"
          >
            Kontakt +48 793 698 862
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white/60 hover:text-white transition">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
