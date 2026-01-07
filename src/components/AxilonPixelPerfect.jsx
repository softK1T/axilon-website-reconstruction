import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const AxilonPixelPerfect = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const jobs = [
    {
      title: "PRACOWNICY BUDOWLANI",
      city: "WARSZAWA, ŁÓDŹ",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      requirements: [
        "ELEKTRYKÓW / ЭЛЕКТРИКОВ",
        "HYDRAULIKÓW / САНТЕХНИКОВ",
        "TYNKARZY / ШТУКАТУРОВ",
        "MALARZY / МАЛЯРОВ"
      ],
      salaryLabel: "PŁACA NETTO",
      salary: "Wysokie stawki"
    },
    {
      title: "PRACOWNIK KOMUNALNY",
      city: "WARSZAWA",
      image: "https://images.unsplash.com/photo-1581092918484-8313e1f7f524?w=600&q=80",
      requirements: [
        "WIEK DO 55 LAT",
        "Z/P OD 7000 ZŁ NETTO",
        "ZAPEWNIONE ZAKWATEROWANIE",
        "PN-PT 6:00 - 18:00"
      ],
      salaryLabel: "PŁACA NETTO",
      salary: "7000 PLN Netto"
    },
    {
      title: "OPERATORZY UDT",
      city: "GDAŃSK",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
      requirements: [
        "STAWKA OD 6900 NETTO",
        "UPRAWNIENIA UDT WYMAGANE",
        "MOŻLIWOŚĆ NADGODZIN",
        "PRACA W SYSTEMIE ZMIANOWYM"
      ],
      salaryLabel: "PŁACA NETTO",
      salary: "6900 PLN Netto"
    }
  ];

  return (
    <div className="font-sans bg-white text-axilon-black antialiased">
      {/* Top Bar */}
      <div className="bg-axilon-black text-white text-[11px] font-ui font-medium tracking-wide py-2.5 px-4 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+48795888002" className="flex items-center gap-2 hover:text-axilon-yellow transition-colors duration-300">
              <Phone size={12} className="text-white" />
              <span>+48 795 888 002</span>
            </a>
            <a href="mailto:biuro@axilon-praca.pl" className="flex items-center gap-2 hover:text-axilon-yellow transition-colors duration-300">
              <Mail size={12} className="text-white" />
              <span>BIURO@AXILON-PRACA.PL</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-[10px] opacity-60">
            <span>PON - PT 8:00 - 16:00</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white sticky top-0 z-50 shadow-[0_2px_15px_rgba(0,0,0,0.05)] h-[90px] flex items-center">
        <div className="max-w-[1200px] mx-auto px-4 w-full">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="bg-axilon-black w-[42px] h-[42px] flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-white font-heading font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[18px] font-heading font-bold text-axilon-black leading-none tracking-tight">AXILONGROUP</div>
                <div className="text-[7px] text-gray-400 tracking-[0.2em] font-ui mt-1 uppercase">Architecture of Recruitment</div>
              </div>
            </div>

            {/* Menu */}
            <div className="hidden lg:flex items-center gap-10 font-ui text-[12px] font-semibold tracking-[0.1em] text-axilon-black">
              <a href="#" className="text-axilon-yellow">START</a>
              <a href="#" className="hover:text-axilon-yellow transition-colors duration-300">O NAS</a>
              <a href="#" className="hover:text-axilon-yellow transition-colors duration-300">PRACA</a>
              <a href="#" className="hover:text-axilon-yellow transition-colors duration-300">KONTAKT</a>
              <button className="bg-axilon-yellow hover:bg-black hover:text-white text-axilon-black px-7 py-3.5 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300">
                Aplikuj Teraz
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[800px] bg-axilon-dark overflow-hidden">
        {/* Background Image with Parallax-like fixed position */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070')",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center z-10">
          <div className="max-w-[1200px] mx-auto px-4 w-full pt-20">
            <div className="max-w-2xl">
              <div className="text-[10px] font-bold tracking-[0.3em] text-white/80 mb-6 font-ui uppercase">
                Established 2013
              </div>
              <h1 className="text-[65px] leading-[1.1] font-heading font-bold uppercase text-white mb-8 tracking-tight">
                Najwyższe<br/>
                <span className="text-axilon-yellow">Stawki</span><br/>
                w Polsce
              </h1>
              <p className="text-[15px] text-gray-300 mb-10 max-w-lg font-ui leading-7 font-light">
                Profesjonalna rekrutacja kadr dla branży budowlanej i technicznej. Gwarantujemy stabilność, legalność i najwyższą jakość obsługi.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="bg-axilon-yellow text-axilon-black px-9 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300">
                  Aktualne Oferty
                </button>
                <button className="border border-white/30 text-white px-9 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                  Skontaktuj Się
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positions Header */}
      <div className="bg-white pt-24 pb-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col mb-12">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[2px] w-8 bg-axilon-black"></div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Available Positions</span>
            </div>
            <h2 className="text-[40px] font-heading font-bold text-axilon-black uppercase">
              Oferty <span className="text-gray-200">Pracy</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Job Cards Section */}
      <section className="bg-white pb-32">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <div 
                key={index} 
                className="bg-white group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-[280px] overflow-hidden mb-8">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                  <img 
                    src={job.image} 
                    alt={job.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                      {job.city}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="pr-4">
                  <h3 className="text-[18px] font-heading font-bold text-axilon-black mb-6 uppercase group-hover:text-axilon-yellow transition-colors">
                    {job.title}
                  </h3>
                  
                  <ul className="space-y-3 mb-8">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-center text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                        <div className="w-1 h-1 bg-axilon-yellow rounded-full mr-3"></div>
                        {req}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-end justify-between border-t border-gray-100 pt-6">
                    <div>
                      <div className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-1">
                        {job.salaryLabel}
                      </div>
                      <div className="text-[16px] font-heading font-bold text-axilon-black">
                        {job.salary}
                      </div>
                    </div>
                    
                    <button className="bg-black hover:bg-axilon-yellow hover:text-black text-white px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300">
                      Aplikuj
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-gray-200/50">
            {[
              { icon: "users", number: "8200", label: "ZATRUDNIONYCH\nPRACOWNIKÓW W\n2023R" },
              { icon: "handshake", number: "270", label: "KLIENTÓW, KTÓRZY\nNAM ZAUFALI" },
              { icon: "building", number: "73+", label: "MIAST W POLSCE" },
              { icon: "calendar", number: "11+", label: "LAT DOŚWIADCZENIA" }
            ].map((stat, i) => (
              <div key={i} className="px-4 group">
                 {/* Lucide icons as fallback for specific yellow vector icons in original */}
                 <div className="flex justify-center mb-6 text-axilon-yellow transform group-hover:-translate-y-2 transition-transform duration-300">
                    {i === 0 && <div className="w-8 h-8"><svg viewBox="0 0 24 24" fill="#FFB600"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>}
                    {i === 1 && <div className="w-8 h-8"><svg viewBox="0 0 24 24" fill="#FFB600"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-6.21-5.29-6.85V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.65C7.65 4.79 5.4 7.75 5.4 11v5.82L3 19.23v1.78h18v-1.78l-2.12-2.41zM16 11c0 1.66-1.34 3-3 3h-2v2h2c2.76 0 5-2.24 5-5h-2z"/></svg></div>}
                    {i === 2 && <div className="w-8 h-8"><svg viewBox="0 0 24 24" fill="#FFB600"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg></div>}
                    {i === 3 && <div className="w-8 h-8"><svg viewBox="0 0 24 24" fill="#FFB600"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg></div>}
                 </div>
                <div className="text-[40px] font-heading font-bold text-axilon-black mb-4 leading-none">{stat.number}</div>
                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] whitespace-pre-line leading-5 font-ui">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-[32px] font-heading font-bold uppercase mb-20">
            Opinie <span className="text-axilon-yellow">Klientów</span>
            <div className="text-[10px] text-gray-300 font-normal tracking-[0.5em] mt-4 font-ui">AXILON GROUP</div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                text: "Agencja AXILON wykazuje się wysokim poziomem profesjonalizmu. Dzięki ich pomocy znalazłem pracę idealnie odpowiadającą moim umiejętnościom.",
                author: "Paweł",
                role: "ZAREKRUTOWANY PRACOWNIK"
              },
              {
                text: "Zespół AXILON był ze mną na każdym etapie procesu rekrutacyjnego. Czułem, że mogę na nich liczyć.",
                author: "Jan",
                role: "ZAREKRUTOWANY PRACOWNIK"
              }
            ].map((review, i) => (
              <div key={i} className="text-left relative pl-8">
                 <span className="absolute left-0 top-0 text-6xl text-gray-100 font-serif leading-none">“</span>
                <p className="text-[14px] leading-7 text-gray-500 font-ui italic mb-8">
                  {review.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-axilon-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {review.author[0]}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-axilon-black uppercase font-heading">{review.author}</div>
                    <div className="text-[9px] font-bold text-gray-300 tracking-[0.1em] uppercase mt-0.5">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white pt-24 pb-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-20">
            {/* Column 1: Brand */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-white/10 w-[36px] h-[36px] flex items-center justify-center">
                   <span className="font-heading font-bold">A</span>
                </div>
                <div>
                   <span className="font-heading font-bold text-lg tracking-wide">AXILON</span>
                   <span className="font-light text-lg opacity-70">GROUP</span>
                </div>
              </div>
              <p className="text-[11px] leading-6 text-gray-500 font-ui mb-8 max-w-xs">
                Zaufany partner w rekrutacji specjalistycznej. Budujemy relacje oparte na profesjonalizmie i transparentności.
              </p>
              <div className="flex gap-2">
                 <a href="#" className="w-8 h-8 bg-white/5 flex items-center justify-center hover:bg-axilon-yellow hover:text-black transition-colors"><Facebook size={14}/></a>
                 <a href="#" className="w-8 h-8 bg-white/5 flex items-center justify-center hover:bg-axilon-yellow hover:text-black transition-colors"><Instagram size={14}/></a>
                 <a href="#" className="w-8 h-8 bg-white/5 flex items-center justify-center hover:bg-axilon-yellow hover:text-black transition-colors"><Linkedin size={14}/></a>
              </div>
            </div>

            {/* Column 2: Contact Info */}
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-white">Contact Info</h4>
              <ul className="space-y-4 text-[11px] text-gray-500 font-ui font-medium">
                <li className="flex items-start gap-3">
                  <MapPin size={14} className="mt-0.5 text-axilon-yellow" />
                  <span>ALEJA T. KOŚCIUSZKI 71,<br/>90-436, ŁÓDŹ, POLSKA</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={14} className="text-axilon-yellow" />
                  <span>+48 795 888 002</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={14} className="text-axilon-yellow" />
                  <span>BIURO@AXILON-PRACA.PL</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Navigation */}
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-white">Navigation</h4>
              <ul className="space-y-3 text-[11px] font-bold tracking-[0.1em] text-white/70 uppercase">
                <li><a href="#" className="hover:text-axilon-yellow transition-colors">- Start</a></li>
                <li><a href="#" className="hover:text-axilon-yellow transition-colors">- About</a></li>
                <li><a href="#" className="hover:text-axilon-yellow transition-colors">- Praca</a></li>
                <li><a href="#" className="hover:text-axilon-yellow transition-colors">- Contact</a></li>
              </ul>
            </div>

             {/* Column 4: Newsletter */}
             <div>
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-white">Architectural Updates</h4>
              <p className="text-[11px] text-gray-500 mb-6 font-ui">
                Subskrybuj nasz newsletter, aby być na bieżąco.
              </p>
              <form className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL" 
                  className="bg-white text-black px-4 py-3 text-[10px] font-bold tracking-widest focus:outline-none placeholder-gray-400"
                />
                <button className="bg-black border border-white/20 hover:bg-white hover:text-black hover:border-white text-white py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all">
                  Join Now
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-[9px] font-bold tracking-[0.15em] text-gray-600 uppercase">
            <div>© 2024 AXILON GROUP LTD.</div>
            <div className="flex gap-8 mt-4 md:mt-0">
               <a href="#" className="hover:text-white">Privacy</a>
               <a href="#" className="hover:text-white">Terms</a>
               <a href="#" className="hover:text-white">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AxilonPixelPerfect;
