import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

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
    <>
      {/* Top Bar */}
      <div className="bg-[#32373c] text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <a href="tel:+48793698862" className="flex items-center gap-2 hover:text-[#4FBDC6] transition">
              <Phone size={14} />
              <span>+48 793 698 862</span>
            </a>
            <a href="mailto:biuro@axilon-praca.pl" className="flex items-center gap-2 hover:text-[#4FBDC6] transition">
              <Mail size={14} />
              <span>biuro@axilon-praca.pl</span>
            </a>
          </div>
          <div className="hidden md:block text-white/70 text-xs">
            Pn - Pt 8:00 - 18:00
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <div className="text-[#4FBDC6] text-3xl font-bold tracking-tight">
                AXILON
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#32373c] hover:text-[#066aab] transition uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden lg:block bg-[#4FBDC6] text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-[#066aab] transition"
            >
              Kontakt
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#32373c]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[#32373c] hover:text-[#066aab] transition uppercase text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block bg-[#4FBDC6] text-white px-6 py-3 rounded-full text-center text-sm font-semibold uppercase"
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
