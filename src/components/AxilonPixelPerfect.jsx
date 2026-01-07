import React from 'react';

const AxilonPixelPerfect = () => {
  return (
    <div className="font-sans antialiased text-[#111] bg-white">
      
      {/* TOP BAR */}
      <div className="bg-[#1a1a1a] text-white h-[45px] flex items-center text-[12px] font-normal">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <div className="flex items-center gap-2 text-white/80">
              <i className="fa fa-mobile-phone text-[#f5a623]"></i>
              <span>+48 793 698 862</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <i className="fa fa-envelope-o text-[#f5a623]"></i>
              <span>biuro@axilon-praca.pl</span>
            </div>
          </div>
          <div className="text-white/60 text-[12px] hidden md:block">
            Pn - Pt 8.00 - 18.00
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-[90px]">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://axilon-praca.pl/wp-content/uploads/2017/08/logo-mobile.png" 
                alt="AXILON" 
                className="h-[50px]"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-[13px] font-semibold text-[#1a1a1a] hover:text-[#f5a623] transition uppercase tracking-wide">Strona główna</a>
              <a href="#" className="text-[13px] font-semibold text-[#1a1a1a] hover:text-[#f5a623] transition uppercase tracking-wide">O nas</a>
              <div className="relative group">
                <a href="#" className="text-[13px] font-semibold text-[#1a1a1a] hover:text-[#f5a623] transition uppercase tracking-wide flex items-center gap-1">
                  Ogłoszenia o pracę
                  <i className="fa fa-angle-down text-[10px]"></i>
                </a>
                <div className="absolute top-full left-0 bg-white shadow-lg py-2 w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <a href="#" className="block px-6 py-2 text-[13px] hover:bg-gray-50">Warszawa</a>
                  <a href="#" className="block px-6 py-2 text-[13px] hover:bg-gray-50">Gdańsk</a>
                  <a href="#" className="block px-6 py-2 text-[13px] hover:bg-gray-50">Łódź</a>
                </div>
              </div>
              <a href="#" className="text-[13px] font-semibold text-[#1a1a1a] hover:text-[#f5a623] transition uppercase tracking-wide">Kontakt</a>
            </nav>

            {/* CTA Button */}
            <a href="#" className="bg-[#f5a623] text-white px-6 py-3 text-[13px] font-semibold uppercase tracking-wide hover:bg-[#1a1a1a] transition rounded-full">
              Kontakt
            </a>
          </div>
        </div>
      </header>

      {/* HERO SLIDER */}
      <section className="relative h-[600px] md:h-[700px] bg-[#1a1a1a] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://axilon-praca.pl/wp-content/uploads/2017/08/bg-slider-1.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <div className="text-[#f5a623] text-[60px] md:text-[80px] lg:text-[100px] font-black uppercase leading-none mb-4">
              AXILON
            </div>
            <h1 className="text-white text-[28px] md:text-[36px] lg:text-[44px] font-bold uppercase leading-tight mb-6">
              Dobrze płatna praca<br/>
              <span className="text-[#f5a623]">w Polsce</span>
            </h1>
            <p className="text-white/90 text-[15px] md:text-[16px] leading-relaxed mb-8 max-w-xl">
              Strona internetowa stworzona dla ludzi, którzy chcą znaleźć dobrą legalną pracę w Polsce.<br/>
              U nas znajdziesz aktualne oferty pracy
            </p>
            <a href="#" className="inline-block bg-[#f5a623] text-white px-10 py-4 text-[13px] font-semibold uppercase tracking-wide hover:bg-white hover:text-[#1a1a1a] transition rounded-full">
              kontakt +48 793 698 862
            </a>
          </div>
        </div>
      </section>

      {/* JOB OFFERS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-[#f5a623] text-[14px] font-semibold uppercase tracking-widest mb-3">Aktualne oferty</div>
            <h2 className="text-[#1a1a1a] text-[36px] md:text-[44px] font-bold uppercase">Oferty pracy</h2>
          </div>

          {/* Job Card - Warszawa */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition mb-8">
            <div className="md:flex">
              <div className="md:w-1/3 relative h-[250px] md:h-auto">
                <img 
                  src="https://axilon-praca.pl/wp-content/uploads/2017/08/bg-slider-2.jpg" 
                  alt="Warszawa" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#f5a623] text-white px-4 py-2 text-[12px] font-bold uppercase rounded">
                  Warszawa
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-[24px] font-bold text-[#1a1a1a] mb-6 uppercase">Poszukujemy pracowników</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-[15px] text-gray-700">
                    <i className="fa fa-check text-[#f5a623] mt-1 mr-3"></i>
                    <span><strong>Pracownik na komunalne przedsiębiorstwo</strong> - Wiek do 55 lat, z/p od 6800 zł netto</span>
                  </li>
                  <li className="flex items-start text-[15px] text-gray-700">
                    <i className="fa fa-check text-[#f5a623] mt-1 mr-3"></i>
                    <span><strong>Operator UDT</strong> - od 6900 zł netto</span>
                  </li>
                  <li className="flex items-start text-[15px] text-gray-700">
                    <i className="fa fa-check text-[#f5a623] mt-1 mr-3"></i>
                    <span>Zapewnione <strong>zakwaterowanie</strong></span>
                  </li>
                </ul>
                <a href="#" className="inline-block bg-[#f5a623] text-white px-8 py-3 text-[13px] font-semibold uppercase tracking-wide hover:bg-[#1a1a1a] transition rounded-full">
                  Zobacz więcej
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-[#f5a623]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-[50px] font-black mb-2">8200</div>
              <div className="text-[14px] font-semibold uppercase tracking-wide">Pracownikom zapewniliśmy<br/>zatrudnienie w 2023r</div>
            </div>
            <div>
              <div className="text-[50px] font-black mb-2">270</div>
              <div className="text-[14px] font-semibold uppercase tracking-wide">Firm nam zaufało</div>
            </div>
            <div>
              <div className="text-[50px] font-black mb-2">73+</div>
              <div className="text-[14px] font-semibold uppercase tracking-wide">Miast w Polsce</div>
            </div>
            <div>
              <div className="text-[50px] font-black mb-2">11+</div>
              <div className="text-[14px] font-semibold uppercase tracking-wide">Lat doświadczenia</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-white text-[28px] font-bold mb-2">Szukasz pracy w Polsce?</h4>
              <p className="text-white/80 text-[16px]">Zadzwoń +48 793 698 862</p>
            </div>
            <a href="#" className="bg-white text-[#1a1a1a] px-10 py-4 text-[13px] font-semibold uppercase tracking-wide hover:bg-[#f5a623] hover:text-white transition rounded-full">
              Kontakt +48 793 698 862
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* About */}
            <div>
              <img 
                src="https://axilon-praca.pl/wp-content/uploads/2017/08/logo-mobile.png" 
                alt="AXILON" 
                className="h-[45px] mb-6 brightness-0 invert"
              />
              <p className="text-white/70 text-[14px] leading-relaxed">
                Strona internetowa stworzona dla ludzi, którzy chcą znaleźć dobrą, legalną pracę z wysoką pensją w Polsce. U nas znajdziesz aktualne oferty pracy.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[16px] font-bold uppercase tracking-wide mb-6">Dane kontaktowe</h4>
              <div className="space-y-4 text-[14px]">
                <div>
                  <div className="text-white/60 mb-1">AXILON GROUP</div>
                  <div className="text-white/60 mb-1">Adres:</div>
                  <div className="text-white">ul. ALEJA T. KOŚCIUSZKI 71<br/>90-436, ŁÓDŹ, POLSKA</div>
                </div>
                <div>
                  <div className="text-white/60 mb-1">Numer telefonu:</div>
                  <div className="text-white">+48 793 698 862</div>
                </div>
                <div>
                  <div className="text-white/60 mb-1">E-mail:</div>
                  <div className="text-white">biuro@axilon-praca.pl</div>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div>
              <h4 className="text-[16px] font-bold uppercase tracking-wide mb-6">Menu</h4>
              <div className="text-white/60 mb-4">AXILON GROUP</div>
              <ul className="space-y-3 text-[14px]">
                <li><a href="#" className="text-white/70 hover:text-[#f5a623] transition">Strona główna</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#f5a623] transition">O nas</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#f5a623] transition">Kontakt</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-[13px]">
            <p>Agencja Pracy AXILON – Copyright 2024. Developed by Angelika Olszewska</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default AxilonPixelPerfect;
