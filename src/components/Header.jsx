import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Strona główna', href: '#home' },
    { name: 'O nas', href: '#about' },
    { name: 'Oferty pracy', href: '#jobs' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="relative z-10">
            <span className={`font-serif text-2xl tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              AXILON
            </span>
            <span className={`block text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 ${
              isScrolled ? 'text-[#c9a962]' : 'text-[#c9a962]'
            }`}>
              Agencja Pracy
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[13px] tracking-wider uppercase transition-all duration-300 hover:text-[#c9a962] ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+48793698862"
              className={`flex items-center gap-2 text-[13px] tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              <Phone size={16} className="text-[#c9a962]" />
              +48 793 698 862
            </a>
            <a
              href="#contact"
              className="bg-[#c9a962] text-white px-6 py-3 text-[12px] tracking-wider uppercase hover:bg-[#b8944d] transition-all duration-300"
            >
              Kontakt
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden z-10 transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-light tracking-wider text-gray-900 hover:text-[#c9a962] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+48793698862"
            className="mt-8 flex items-center gap-2 text-[#c9a962]"
          >
            <Phone size={20} />
            +48 793 698 862
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
