import React from 'react';

// Icons as SVG components for strict control
const Icons = {
  Phone: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.01 15.38C18.8 15.38 17.64 15.18 16.55 14.82C16.21 14.7 15.83 14.78 15.58 15.04L13.43 17.19C10.74 15.82 8.35 13.44 6.98 10.75L9.13 8.6C9.4 8.35 9.48 7.98 9.37 7.64C9.01 6.55 8.81 5.39 8.81 4.18C8.81 3.53 8.28 3 7.63 3H4.19C3.54 3 3 3.53 3 4.18C3 13.56 10.62 21.18 20 21.18C20.65 21.18 21.18 20.65 21.18 20V16.56C21.18 15.91 20.65 15.38 20.01 15.38Z" />
    </svg>
  ),
  Mail: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
    </svg>
  ),
  People: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="#FFB600" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" />
    </svg>
  ),
  Handshake: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="#FFB600" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.01 21.01C10.01 22.11 10.9 23 12 23C13.1 23 13.99 22.11 13.99 21.01H10.01ZM18.88 16.82V11C18.88 7.75 16.63 4.79 13.59 4.15V3.5C13.59 2.67 12.92 2 12.09 2C11.26 2 10.59 2.67 10.59 3.5V4.15C7.55 4.79 5.3 7.75 5.3 11V16.82L3.18 19.23V21.01H20.82V19.23L18.88 16.82ZM16.88 11C16.88 12.66 15.54 14 13.88 14H11.88V16H13.88C16.64 16 18.88 13.76 18.88 11H16.88Z" />
    </svg>
  ),
  City: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="#FFB600" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 11V5L12 2L9 5V11H3V21H21V11H15ZM7 19H5V17H7V19ZM7 15H5V13H7V15ZM7 11H5V9H7V11ZM13 19H11V17H13V19ZM13 15H11V13H13V15ZM13 11H11V9H13V11ZM13 7H11V5H13V7ZM19 19H17V17H19V19ZM19 15H17V13H19V15ZM19 11H17V9H19V11Z" />
    </svg>
  ),
  Calendar: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="#FFB600" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" />
    </svg>
  ),
  MapPin: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFB600" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
    </svg>
  )
};

const AxilonPixelPerfect = () => {
  return (
    <div className="font-sans antialiased text-[#111]">
      
      {/* 1. TOP BAR (Black) */}
      <div className="bg-[#111] text-white h-[40px] flex items-center text-[10px] font-medium tracking-widest uppercase border-b border-[#222]">
        <div className="container mx-auto px-4 lg:px-12 flex justify-between">
          <div className="flex gap-6">
            <a href="tel:+48795888002" className="flex items-center gap-2 text-gray-400 hover:text-[#ffb600] transition-colors cursor-pointer group">
              <span className="text-gray-500 group-hover:text-[#ffb600] transition-colors"><Icons.Phone /></span>
              <span>+48 795 888 002</span>
            </a>
            <a href="mailto:biuro@axilon-praca.pl" className="flex items-center gap-2 text-gray-400 hover:text-[#ffb600] transition-colors cursor-pointer group">
              <span className="text-gray-500 group-hover:text-[#ffb600] transition-colors"><Icons.Mail /></span>
              <span>biuro@axilon-praca.pl</span>
            </a>
          </div>
          <div className="text-gray-500 hidden sm:block">
            Pon - Pt 8:00 - 16:00
          </div>
        </div>
      </div>

      {/* 2. HEADER (White, Sticky) */}
      <header className="bg-white h-[90px] flex items-center sticky top-0 z-50 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
             <div className="w-[42px] h-[42px] bg-[#1a1a1a] flex items-center justify-center text-white font-bold text-xl transition-transform duration-300 group-hover:bg-[#ffb600]">
               A
             </div>
             <div className="flex flex-col justify-center">
               <span className="text-[19px] font-extrabold leading-none tracking-tight text-[#1a1a1a]">AXILONGROUP</span>
               <span className="text-[7px] uppercase tracking-[0.25em] text-gray-400 mt-1 font-medium">Architecture of Recruitment</span>
             </div>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-10">
            <nav className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-[#111]">
              <a href="#" className="text-[#ffb600]">Start</a>
              <a href="#" className="hover:text-[#ffb600] transition-colors duration-200">O Nas</a>
              <a href="#" className="hover:text-[#ffb600] transition-colors duration-200">Praca</a>
              <a href="#" className="hover:text-[#ffb600] transition-colors duration-200">Kontakt</a>
            </nav>
            <button className="bg-[#ffb600] text-[#111] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#111] hover:text-white transition-all duration-300 shadow-sm">
              Aplikuj Teraz
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (Dark overlay, big text) */}
      <section className="relative h-[850px] bg-[#111] overflow-hidden">
        {/* Background Image - Looking Up Skyscraper */}
        <div 
          className="absolute inset-0 bg-cover bg-bottom"
          style={{ backgroundImage: 'url("https://axilon-praca.pl/wp-content/uploads/2017/08/bg-slider-2.jpg")' }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent opacity-95"></div>
        
        <div className="container mx-auto px-4 lg:px-12 relative z-10 h-full flex items-center">
          <div className="max-w-4xl pt-10">
            <div className="flex items-center gap-4 mb-8">
               <div className="h-[2px] w-[40px] bg-[#ffb600]"></div>
               <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/80">
                 Established 2013
               </div>
            </div>
            
            <h1 className="text-[80px] leading-[0.9] font-black uppercase text-white mb-10 tracking-tighter">
              Najwyższe<br/>
              <span className="text-[#ffb600]">Stawki</span><br/>
              W Polsce
            </h1>
            
            <p className="text-[16px] text-gray-400 mb-14 max-w-lg leading-7 font-light tracking-wide border-l-2 border-[#ffb600] pl-8">
              Profesjonalna rekrutacja kadr dla branży budowlanej i technicznej. 
              Gwarantujemy stabilność, legalność i najwyższą jakość obsługi.
            </p>
            
            <div className="flex gap-5">
              <button className="bg-[#ffb600] text-[#111] h-[60px] px-10 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#111] transition-all duration-300 shadow-[0_10px_30px_rgba(255,182,0,0.2)]">
                Aktualne Oferty
              </button>
              <button className="border border-white/20 text-white h-[60px] px-10 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#111] hover:border-white transition-all duration-300">
                Skontaktuj Się
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POSITIONS HEADER (White) */}
      <section className="py-28 pb-16">
         <div className="container mx-auto px-4 lg:px-12">
            <div className="flex items-center gap-3 mb-5">
               <div className="w-[30px] h-[3px] bg-[#111]"></div>
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Available Positions</span>
            </div>
            <h2 className="text-[50px] font-black uppercase tracking-tight text-[#111] leading-none">
              Oferty <span className="text-[#e5e5e5]">Pracy</span>
            </h2>
         </div>
      </section>

      {/* 5. JOB CARDS GRID (3 Columns) */}
      <section className="pb-40">
        <div className="container mx-auto px-4 lg:px-12">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Card 1 */}
              <div className="group cursor-pointer bg-white">
                 <div className="h-[280px] overflow-hidden relative mb-8 bg-gray-100">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" alt="Budowlani" />
                    <div className="absolute bottom-6 left-6 z-20">
                       <span className="bg-[#111] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5">Warszawa, Łódź</span>
                    </div>
                 </div>
                 <div className="pr-2">
                    <h3 className="text-[20px] font-black uppercase mb-6 group-hover:text-[#ffb600] transition-colors duration-300">Pracownicy Budowlani</h3>
                    <ul className="space-y-4 mb-10 border-l border-gray-100 pl-4">
                       {['Elektryków / Электриков','Hydraulików / Сантехников','Tynkarzy / Штукатуров','Malarzy / Маляров'].map(item => (
                          <li key={item} className="flex items-center text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                             <div className="w-1.5 h-1.5 bg-[#ffb600] mr-4"></div> {item}
                          </li>
                       ))}
                    </ul>
                    <div className="flex items-end justify-between border-t border-gray-100 pt-8">
                       <div>
                          <div className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-1.5">Płaca Netto</div>
                          <div className="text-[18px] font-black text-[#111]">Wysokie stawki</div>
                       </div>
                       <button className="bg-[#111] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#ffb600] hover:text-[#111] transition-all duration-300">Aplikuj</button>
                    </div>
                 </div>
              </div>

              {/* Card 2 */}
              <div className="group cursor-pointer bg-white">
                 <div className="h-[280px] overflow-hidden relative mb-8 bg-gray-100">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img src="https://images.unsplash.com/photo-1581092918484-8313e1f7f524?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" alt="Komunalny" />
                    <div className="absolute bottom-6 left-6 z-20">
                       <span className="bg-[#111] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5">Warszawa</span>
                    </div>
                 </div>
                 <div className="pr-2">
                    <h3 className="text-[20px] font-black uppercase mb-6 group-hover:text-[#ffb600] transition-colors duration-300">Pracownik Komunalny</h3>
                    <ul className="space-y-4 mb-10 border-l border-gray-100 pl-4">
                       {['Wiek do 55 lat','Z/P od 7000 zł netto','Zapewnione zakwaterowanie','Pn-Pt 6:00 - 18:00'].map(item => (
                          <li key={item} className="flex items-center text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                             <div className="w-1.5 h-1.5 bg-[#ffb600] mr-4"></div> {item}
                          </li>
                       ))}
                    </ul>
                    <div className="flex items-end justify-between border-t border-gray-100 pt-8">
                       <div>
                          <div className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-1.5">Płaca Netto</div>
                          <div className="text-[18px] font-black text-[#111]">7000 PLN Netto</div>
                       </div>
                       <button className="bg-[#111] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#ffb600] hover:text-[#111] transition-all duration-300">Aplikuj</button>
                    </div>
                 </div>
              </div>

              {/* Card 3 */}
              <div className="group cursor-pointer bg-white">
                 <div className="h-[280px] overflow-hidden relative mb-8 bg-gray-100">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" alt="Operator" />
                    <div className="absolute bottom-6 left-6 z-20">
                       <span className="bg-[#111] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5">Gdańsk</span>
                    </div>
                 </div>
                 <div className="pr-2">
                    <h3 className="text-[20px] font-black uppercase mb-6 group-hover:text-[#ffb600] transition-colors duration-300">Operatorzy UDT</h3>
                    <ul className="space-y-4 mb-10 border-l border-gray-100 pl-4">
                       {['Stawka od 6900 netto','Uprawnienia UDT wymagane','Możliwość nadgodzin','Praca w systemie zmianowym'].map(item => (
                          <li key={item} className="flex items-center text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                             <div className="w-1.5 h-1.5 bg-[#ffb600] mr-4"></div> {item}
                          </li>
                       ))}
                    </ul>
                    <div className="flex items-end justify-between border-t border-gray-100 pt-8">
                       <div>
                          <div className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-1.5">Płaca Netto</div>
                          <div className="text-[18px] font-black text-[#111]">6900 PLN Netto</div>
                       </div>
                       <button className="bg-[#111] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#ffb600] hover:text-[#111] transition-all duration-300">Aplikuj</button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. STATS (Centered icons + text) */}
      <section className="py-32 bg-[#fafafa] border-t border-gray-100">
         <div className="container mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-4 divide-x divide-gray-200">
               {[
                  { num: "8200", label: "Zatrudnionych\nPracowników w\n2023r", Icon: Icons.People },
                  { num: "270", label: "Klientów, którzy\nNam Zaufali", Icon: Icons.Handshake },
                  { num: "73+", label: "Miast w Polsce", Icon: Icons.City },
                  { num: "11+", label: "Lat Doświadczenia", Icon: Icons.Calendar }
               ].map((stat, i) => (
                  <div key={i} className="text-center px-4 group">
                     <div className="flex justify-center mb-8 transform group-hover:-translate-y-2 transition-transform duration-300">
                       <stat.Icon />
                     </div>
                     <div className="text-[55px] font-black text-[#111] mb-4 leading-none">{stat.num}</div>
                     <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 whitespace-pre-line leading-6">{stat.label}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. REVIEWS (Centered + Quotes) */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-4 lg:px-12 text-center max-w-5xl">
            <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ffb600] mb-5">Axilon Group</h6>
            <h2 className="text-[45px] font-black uppercase text-[#111] mb-24 tracking-tight">
               Opinie <span className="text-[#e5e5e5]">Klientów</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-20 text-left">
               {[
                  { text: "Agencja AXILON wykazuje się wysokim poziomem profesjonalizmu. Dzięki ich pomocy znalazłem pracę idealnie odpowiadającą moim umiejętnościom.", author: "Paweł" },
                  { text: "Zespół AXILON był ze mną na każdym etapie procesu rekrutacyjnego. Czułem, że mogę na nich liczyć.", author: "Jan" }
               ].map((review, i) => (
                  <div key={i} className="relative pl-10 border-l border-gray-100">
                     <span className="absolute top-[-20px] left-0 text-[80px] text-[#f5f5f5] font-serif leading-none font-bold">“</span>
                     <p className="text-[15px] leading-8 text-gray-500 italic mb-10 font-serif relative z-10">{review.text}</p>
                     <div className="flex items-center gap-5">
                        <div className="w-[50px] h-[50px] bg-[#111] rounded-full flex items-center justify-center text-white font-bold text-lg">
                           {review.author[0]}
                        </div>
                        <div>
                           <div className="text-[13px] font-bold uppercase tracking-widest text-[#111]">{review.author}</div>
                           <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-gray-300 mt-1.5">Zarekrutowany Pracownik</div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. FOOTER (Dark, 4 cols) */}
      <footer className="bg-[#111] text-white pt-28 pb-12 border-t border-[#222]">
         <div className="container mx-auto px-4 lg:px-12">
            <div className="grid md:grid-cols-4 gap-16 mb-24 border-b border-white/5 pb-24">
               <div className="pr-4">
                  <div className="flex items-center gap-3 mb-10">
                     <div className="w-[42px] h-[42px] bg-white/5 flex items-center justify-center font-bold text-xl text-white">A</div>
                     <span className="font-bold text-xl tracking-wide">AXILON<span className="font-light text-white/40">GROUP</span></span>
                  </div>
                  <p className="text-[11px] leading-7 text-gray-500 mb-10 font-medium">Zaufany partner w rekrutacji specjalistycznej. Budujemy relacje oparte na profesjonalizmie i transparentności.</p>
               </div>

               <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-10 text-white">Contact Info</h4>
                  <ul className="space-y-6 text-[11px] text-gray-500 font-medium">
                     <li className="flex gap-4 items-start"><span className="text-[#ffb600] mt-0.5"><Icons.MapPin/></span> <span className="leading-5">Aleja T. Kościuszki 71,<br/>90-436, Łódź, Polska</span></li>
                     <li className="flex gap-4 items-center"><span className="text-[#ffb600]"><Icons.Phone/></span> +48 795 888 002</li>
                     <li className="flex gap-4 items-center"><span className="text-[#ffb600]"><Icons.Mail/></span> biuro@axilon-praca.pl</li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-10 text-white">Navigation</h4>
                  <ul className="space-y-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">
                     {['Start','About','Praca','Contact'].map(item => (
                        <li key={item} className="hover:text-[#ffb600] transition-colors cursor-pointer flex items-center gap-2">
                           <span className="w-1 h-1 bg-[#ffb600] rounded-full opacity-0 hover:opacity-100 transition-opacity"></span> {item}
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-10 text-white">Architectural Updates</h4>
                  <p className="text-[11px] text-gray-500 mb-8 font-medium leading-6">Subskrybuj nasz newsletter, aby być na bieżąco.</p>
                  <div className="flex flex-col gap-3">
                     <input type="email" placeholder="YOUR EMAIL" className="bg-[#1a1a1a] text-white px-5 py-4 text-[10px] font-bold tracking-widest outline-none border border-transparent focus:border-[#ffb600] transition-colors" />
                     <button className="bg-white text-[#111] border border-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#ffb600] hover:text-[#111] hover:border-[#ffb600] transition-all">Join Now</button>
                  </div>
               </div>
            </div>

            <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.15em] text-gray-600">
               <div>© 2024 Axilon Group Ltd.</div>
               <div className="flex gap-8">
                  <span className="cursor-pointer hover:text-white transition-colors">Privacy</span>
                  <span className="cursor-pointer hover:text-white transition-colors">Terms</span>
                  <span className="cursor-pointer hover:text-white transition-colors">Legal</span>
               </div>
            </div>
         </div>
      </footer>

    </div>
  );
};

export default AxilonPixelPerfect;
