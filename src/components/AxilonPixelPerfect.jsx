import React from 'react';

const AxilonPixelPerfect = () => {
  return (
    <div className="font-sans antialiased text-[#111]">
      
      {/* 1. TOP BAR (Black) */}
      <div className="bg-[#111] text-white h-[40px] flex items-center text-[10px] font-medium tracking-widest uppercase">
        <div className="container mx-auto px-4 lg:px-12 flex justify-between">
          <div className="flex gap-6">
            <span className="flex items-center gap-2 text-gray-400 hover:text-[#ffb600] transition cursor-pointer">
              <i className="fa fa-phone"></i> +48 795 888 002
            </span>
            <span className="flex items-center gap-2 text-gray-400 hover:text-[#ffb600] transition cursor-pointer">
              <i className="fa fa-envelope"></i> biuro@axilon-praca.pl
            </span>
          </div>
          <div className="text-gray-500">
            Pon - Pt 8:00 - 16:00
          </div>
        </div>
      </div>

      {/* 2. HEADER (White, Sticky) */}
      <header className="bg-white h-[90px] flex items-center sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
             <div className="w-[40px] h-[40px] bg-[#1a1a1a] flex items-center justify-center text-white font-bold text-xl">
               A
             </div>
             <div className="flex flex-col">
               <span className="text-xl font-bold leading-none tracking-tight">AXILONGROUP</span>
               <span className="text-[7px] uppercase tracking-[0.25em] text-gray-400 mt-1">Architecture of Recruitment</span>
             </div>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-[#111]">
              <a href="#" className="text-[#ffb600]">Start</a>
              <a href="#" className="hover:text-[#ffb600] transition">O Nas</a>
              <a href="#" className="hover:text-[#ffb600] transition">Praca</a>
              <a href="#" className="hover:text-[#ffb600] transition">Kontakt</a>
            </nav>
            <button className="bg-[#ffb600] text-[#111] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#111] hover:text-white transition-colors duration-300">
              Aplikuj Teraz
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (Dark overlay, big text) */}
      <section className="relative h-[850px] bg-[#111] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")' }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-transparent"></div>
        
        <div className="container mx-auto px-4 lg:px-12 relative z-10 h-full flex items-center">
          <div className="max-w-3xl pt-20">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/60 mb-8 ml-1">
              Established 2013
            </div>
            
            <h1 className="text-[70px] leading-[0.95] font-extrabold uppercase text-white mb-8 tracking-tighter">
              Najwyższe<br/>
              <span className="text-[#ffb600]">Stawki</span><br/>
              W Polsce
            </h1>
            
            <p className="text-[15px] text-gray-400 mb-12 max-w-lg leading-7 font-light tracking-wide border-l-2 border-[#ffb600] pl-6">
              Profesjonalna rekrutacja kadr dla branży budowlanej i technicznej. 
              Gwarantujemy stabilność, legalność i najwyższą jakość obsługi.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-[#ffb600] text-[#111] h-[55px] px-10 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300">
                Aktualne Oferty
              </button>
              <button className="border border-white/30 text-white h-[55px] px-10 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#111] hover:border-white transition-all duration-300">
                Skontaktuj Się
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POSITIONS HEADER (White) */}
      <section className="py-24 pb-16">
         <div className="container mx-auto px-4 lg:px-12">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-[30px] h-[2px] bg-[#111]"></div>
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Available Positions</span>
            </div>
            <h2 className="text-[42px] font-extrabold uppercase tracking-tight text-[#111]">
              Oferty <span className="text-[#ddd]">Pracy</span>
            </h2>
         </div>
      </section>

      {/* 5. JOB CARDS GRID (3 Columns) */}
      <section className="pb-32">
        <div className="container mx-auto px-4 lg:px-12">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group cursor-pointer">
                 <div className="h-[260px] overflow-hidden relative mb-8 bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Budowlani" />
                    <div className="absolute bottom-5 left-5 bg-transparent">
                       <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white drop-shadow-md">Warszawa, Łódź</span>
                    </div>
                 </div>
                 <div className="pr-4">
                    <h3 className="text-[18px] font-bold uppercase mb-6 group-hover:text-[#ffb600] transition-colors">Pracownicy Budowlani</h3>
                    <ul className="space-y-3 mb-8">
                       {['Elektryków / Электриков','Hydraulików / Сантехников','Tynkarzy / Штукатуров','Malarzy / Маляров'].map(item => (
                          <li key={item} className="flex items-center text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                             <span className="w-1 h-1 bg-[#ffb600] rounded-full mr-3"></span> {item}
                          </li>
                       ))}
                    </ul>
                    <div className="flex items-end justify-between border-t border-gray-100 pt-6">
                       <div>
                          <div className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-1">Płaca Netto</div>
                          <div className="text-[16px] font-bold text-[#111]">Wysokie stawki</div>
                       </div>
                       <button className="bg-black text-white text-[9px] font-bold uppercase tracking-[0.2em] px-6 py-3 hover:bg-[#ffb600] hover:text-black transition-colors">Aplikuj</button>
                    </div>
                 </div>
              </div>

              {/* Card 2 */}
              <div className="group cursor-pointer">
                 <div className="h-[260px] overflow-hidden relative mb-8 bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Komunalny" />
                    <div className="absolute bottom-5 left-5 bg-transparent">
                       <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white drop-shadow-md">Warszawa</span>
                    </div>
                 </div>
                 <div className="pr-4">
                    <h3 className="text-[18px] font-bold uppercase mb-6 group-hover:text-[#ffb600] transition-colors">Pracownik Komunalny</h3>
                    <ul className="space-y-3 mb-8">
                       {['Wiek do 55 lat','Z/P od 7000 zł netto','Zapewnione zakwaterowanie','Pn-Pt 6:00 - 18:00'].map(item => (
                          <li key={item} className="flex items-center text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                             <span className="w-1 h-1 bg-[#ffb600] rounded-full mr-3"></span> {item}
                          </li>
                       ))}
                    </ul>
                    <div className="flex items-end justify-between border-t border-gray-100 pt-6">
                       <div>
                          <div className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-1">Płaca Netto</div>
                          <div className="text-[16px] font-bold text-[#111]">7000 PLN Netto</div>
                       </div>
                       <button className="bg-black text-white text-[9px] font-bold uppercase tracking-[0.2em] px-6 py-3 hover:bg-[#ffb600] hover:text-black transition-colors">Aplikuj</button>
                    </div>
                 </div>
              </div>

              {/* Card 3 */}
              <div className="group cursor-pointer">
                 <div className="h-[260px] overflow-hidden relative mb-8 bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Operator" />
                    <div className="absolute bottom-5 left-5 bg-transparent">
                       <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white drop-shadow-md">Gdańsk</span>
                    </div>
                 </div>
                 <div className="pr-4">
                    <h3 className="text-[18px] font-bold uppercase mb-6 group-hover:text-[#ffb600] transition-colors">Operatorzy UDT</h3>
                    <ul className="space-y-3 mb-8">
                       {['Stawka od 6900 netto','Uprawnienia UDT wymagane','Możliwość nadgodzin','Praca w systemie zmianowym'].map(item => (
                          <li key={item} className="flex items-center text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                             <span className="w-1 h-1 bg-[#ffb600] rounded-full mr-3"></span> {item}
                          </li>
                       ))}
                    </ul>
                    <div className="flex items-end justify-between border-t border-gray-100 pt-6">
                       <div>
                          <div className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-1">Płaca Netto</div>
                          <div className="text-[16px] font-bold text-[#111]">6900 PLN Netto</div>
                       </div>
                       <button className="bg-black text-white text-[9px] font-bold uppercase tracking-[0.2em] px-6 py-3 hover:bg-[#ffb600] hover:text-black transition-colors">Aplikuj</button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. STATS (Centered icons + text) */}
      <section className="py-28 bg-[#fafafa]">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 divide-x divide-gray-200">
               {[
                  { num: "8200", label: "Zatrudnionych\nPracowników w\n2023r", icon: "👥" },
                  { num: "270", label: "Klientów, którzy\nNam Zaufali", icon: "🤝" },
                  { num: "73+", label: "Miast w Polsce", icon: "🏙️" },
                  { num: "11+", label: "Lat Doświadczenia", icon: "📅" }
               ].map((stat, i) => (
                  <div key={i} className="text-center px-4">
                     <div className="text-[#ffb600] text-3xl mb-6">{stat.icon}</div>
                     <div className="text-[45px] font-bold text-[#111] mb-4 leading-none">{stat.num}</div>
                     <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 whitespace-pre-line leading-5">{stat.label}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. REVIEWS (Centered + Quotes) */}
      <section className="py-28 bg-white">
         <div className="container mx-auto px-4 text-center max-w-4xl">
            <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ffb600] mb-4">Axilon Group</h6>
            <h2 className="text-[40px] font-extrabold uppercase text-[#111] mb-20">
               Opinie <span className="text-[#ddd]">Klientów</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16 text-left">
               {[
                  { text: "Agencja AXILON wykazuje się wysokim poziomem profesjonalizmu. Dzięki ich pomocy znalazłem pracę idealnie odpowiadającą moim umiejętnościom.", author: "Paweł" },
                  { text: "Zespół AXILON był ze mną na każdym etapie procesu rekrutacyjnego. Czułem, że mogę na nich liczyć.", author: "Jan" }
               ].map((review, i) => (
                  <div key={i} className="relative pl-8">
                     <span className="absolute top-[-10px] left-0 text-6xl text-gray-100 font-serif leading-none">“</span>
                     <p className="text-[14px] leading-7 text-gray-500 italic mb-8 font-serif">{review.text}</p>
                     <div className="flex items-center gap-4">
                        <div className="w-[40px] h-[40px] bg-[#111] rounded-full flex items-center justify-center text-white font-bold text-sm">
                           {review.author[0]}
                        </div>
                        <div>
                           <div className="text-[12px] font-bold uppercase tracking-wider text-[#111]">{review.author}</div>
                           <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-gray-300 mt-1">Zarekrutowany Pracownik</div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. FOOTER (Dark, 4 cols) */}
      <footer className="bg-[#111] text-white pt-24 pb-12 border-t border-white/5">
         <div className="container mx-auto px-4 lg:px-12">
            <div className="grid md:grid-cols-4 gap-12 mb-24 border-b border-white/10 pb-20">
               <div className="pr-8">
                  <div className="flex items-center gap-3 mb-8">
                     <div className="w-[36px] h-[36px] bg-white/10 flex items-center justify-center font-bold">A</div>
                     <span className="font-bold text-lg tracking-wide">AXILON<span className="font-light text-white/50">GROUP</span></span>
                  </div>
                  <p className="text-[11px] leading-6 text-gray-500 mb-8">Zaufany partner w rekrutacji specjalistycznej. Budujemy relacje oparte na profesjonalizmie i transparentności.</p>
                  <div className="flex gap-2">
                     {[1,2,3].map(i => <div key={i} className="w-8 h-8 bg-white/5 hover:bg-[#ffb600] transition cursor-pointer"></div>)}
                  </div>
               </div>

               <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Contact Info</h4>
                  <ul className="space-y-4 text-[11px] text-gray-500 font-medium">
                     <li className="flex gap-3"><span className="text-[#ffb600]">📍</span> Aleja T. Kościuszki 71,<br/>90-436, Łódź, Polska</li>
                     <li className="flex gap-3"><span className="text-[#ffb600]">📞</span> +48 795 888 002</li>
                     <li className="flex gap-3"><span className="text-[#ffb600]">✉️</span> biuro@axilon-praca.pl</li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Navigation</h4>
                  <ul className="space-y-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white/70">
                     {['Start','About','Praca','Contact'].map(item => (
                        <li key={item} className="hover:text-[#ffb600] transition cursor-pointer">- {item}</li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Architectural Updates</h4>
                  <p className="text-[11px] text-gray-500 mb-6">Subskrybuj nasz newsletter, aby być na bieżąco.</p>
                  <div className="flex flex-col gap-2">
                     <input type="email" placeholder="YOUR EMAIL" className="bg-white text-black px-4 py-3 text-[10px] font-bold tracking-widest outline-none" />
                     <button className="bg-black border border-white/20 text-white py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition">Join Now</button>
                  </div>
               </div>
            </div>

            <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.15em] text-gray-600">
               <div>© 2024 Axilon Group Ltd.</div>
               <div className="flex gap-8">
                  <span>Privacy</span>
                  <span>Terms</span>
                  <span>Legal</span>
               </div>
            </div>
         </div>
      </footer>

    </div>
  );
};

export default AxilonPixelPerfect;
