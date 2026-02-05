import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="block mb-6">
              <span className="font-serif text-2xl tracking-wider text-white">
                AXILON
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-[#c9a962]">
                Agencja Pracy
              </span>
            </a>
            <p className="text-white/60 text-[14px] leading-relaxed font-light">
              Profesjonalna agencja pracy tymczasowej. Łączymy pracodawców 
              z wykwalifikowanymi pracownikami od ponad 11 lat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[13px] tracking-wider uppercase mb-6">Menu</h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-white/60 text-[14px] hover:text-[#c9a962] transition-colors">
                  Strona główna
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/60 text-[14px] hover:text-[#c9a962] transition-colors">
                  O nas
                </a>
              </li>
              <li>
                <a href="#jobs" className="text-white/60 text-[14px] hover:text-[#c9a962] transition-colors">
                  Oferty pracy
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 text-[14px] hover:text-[#c9a962] transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[13px] tracking-wider uppercase mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#c9a962] flex-shrink-0 mt-1" />
                <span className="text-white/60 text-[14px]">
                  ul. Aleja T. Kościuszki 71<br />90-436 Łódź
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#c9a962]" />
                <a href="tel:+48793698862" className="text-white/60 text-[14px] hover:text-[#c9a962] transition-colors">
                  +48 793 698 862
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#c9a962]" />
                <a href="mailto:biuro@axilon-praca.pl" className="text-white/60 text-[14px] hover:text-[#c9a962] transition-colors">
                  biuro@axilon-praca.pl
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[13px] tracking-wider uppercase mb-6">Social Media</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#c9a962] transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#c9a962] transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#c9a962] transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-[13px]">
              © 2026 Axilon Group. Wszelkie prawa zastrzeżone.
            </p>
            <p className="text-white/40 text-[13px]">
              Designed with ♥ in Łódź
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
