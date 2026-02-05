import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#32373c] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="text-[#4FBDC6] text-2xl font-bold mb-6">AXILON</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Strona internetowa stworzona dla ludzi, którzy chcą znaleźć dobrą, legalną pracę 
              z wysoką pensją w Polsce. U nas znajdziesz aktualne oferty pracy.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wide mb-6">Dane kontaktowe</h4>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-white/60 mb-1">AXILON GROUP</div>
                <div className="text-white/60 mb-1">Adres:</div>
                <div className="text-white">ul. ALEJA T. KOŚCIUSZKI 71<br />90-436, ŁÓDŹ, POLSKA</div>
              </div>
              <div>
                <div className="text-white/60 mb-1">Numer telefonu:</div>
                <a href="tel:+48793698862" className="text-white hover:text-[#4FBDC6] transition">
                  +48 793 698 862
                </a>
              </div>
              <div>
                <div className="text-white/60 mb-1">E-mail:</div>
                <a href="mailto:biuro@axilon-praca.pl" className="text-white hover:text-[#4FBDC6] transition">
                  biuro@axilon-praca.pl
                </a>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wide mb-6">Menu</h4>
            <div className="text-white/60 mb-4">AXILON GROUP</div>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="text-white/70 hover:text-[#4FBDC6] transition">Strona główna</a></li>
              <li><a href="#about" className="text-white/70 hover:text-[#4FBDC6] transition">O nas</a></li>
              <li><a href="#jobs" className="text-white/70 hover:text-[#4FBDC6] transition">Oferty pracy</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-[#4FBDC6] transition">Kontakt</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-xs">
          <p>Agencja Pracy AXILON – Copyright 2026. Developed by Angelika Olszewska</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
