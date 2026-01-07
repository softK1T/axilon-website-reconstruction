import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

const AxilonPixelPerfect = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const jobs = [
    {
      title: "PRACOWNICY BUDOWLANI",
      city: "Warszawa",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600",
      requirements: [
        "ELEKTRYKÓW / АRPENTERS",
        "HYDRAULIKÓW / САНТЕХНИКІВ",
        "TYNKARZY / ШТУКАТУРОВ",
        "MALARZY / МАЛЯРОВ"
      ],
      salary: "Wysokie stawki",
      tag: "HOT"
    },
    {
      title: "PRACOWNIK KOMUNALNY",
      city: "Warszawa",
      image: "https://images.unsplash.com/photo-1581092918484-8313e1f7f524?w=600",
      requirements: [
        "Praca od zaraz",
        "7000 zł na start",
        "Sortowanie odpadów",
        "Do 55 lat"
      ],
      salary: "6,20 ZŁ DO 8,20 NETTO",
      tag: "HOT"
    },
    {
      title: "OPERATORZY UDT",
      city: "Polska",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
      requirements: [
        "OPERACJE UDT OBOWIĄZKI",
        "PRACA NA WYSOKOŚCI DOKUMENTÓW",
        "UŻYWANIE NARZĘDZI",
        "PRACA W ŚWIETLE DOCHODZENIA"
      ],
      salary: "6900 PLN Netto",
      tag: "HOT"
    }
  ];

  return (
    <div className="font-['Arimo',sans-serif] bg-white">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+48123456789" className="flex items-center gap-2 hover:text-[#FFB600]">
              <Phone size={14} />
              <span>+48 123 456 789</span>
            </a>
            <a href="mailto:biuro@axilon-praca.pl" className="flex items-center gap-2 hover:text-[#FFB600]">
              <Mail size={14} />
              <span>BIURO@AXILON-PRACA.PL</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>STRONA GŁÓWNA</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-[#1a1a1a] p-3 rounded">
                <div className="w-8 h-8 bg-[#FFB600] rounded-sm"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1a1a1a]">AXILON</div>
                <div className="text-xs text-gray-500 tracking-wide">-GROUP-</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 font-medium text-sm text-gray-700">
              <a href="#" className="hover:text-[#FFB600] transition">O NAS</a>
              <a href="#" className="hover:text-[#FFB600] transition">PRACA</a>
              <a href="#" className="hover:text-[#FFB600] transition">WARUNKI</a>
              <a href="#" className="hover:text-[#FFB600] transition flex items-center gap-1">
                KONTAKT <ChevronDown size={16} />
              </a>
              <button className="bg-[#FFB600] hover:bg-[#e6a800] text-white px-6 py-3 rounded font-semibold transition">
                ZŁÓŻ CV
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Slider */}
      <section className="relative h-[636px] bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white z-10">
          <div className="max-w-4xl px-4">
            <div className="inline-block mb-4">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=90&h=90" 
                alt="Icon" 
                className="w-20 h-20 rounded-full mx-auto opacity-90"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold uppercase leading-tight mb-6 font-['Poppins',sans-serif]">
              NAJWYŻSZE<br/>
              <span className="text-[#FFB600]">STAWKI</span><br/>
              W POLSCE
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-['Arimo',sans-serif] leading-relaxed">
              Profesjonalna firma dla każdej branży.<br/>
              Budowlani i uczciwiści. Gwarantujemy<br/>
              stabilność, terminowość i najwyższą jakość obsługi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FFB600] hover:bg-[#e6a800] text-white px-10 py-4 text-lg font-semibold rounded transition">
                APLIKUJ NA PORTĘ
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-[#1a1a1a] text-white px-10 py-4 text-lg font-semibold rounded transition">
                SKORZYSTAJ PC
              </button>
            </div>
          </div>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-3 h-3 rounded-full transition ${
                activeSlide === i ? 'bg-[#FFB600]' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Job Offers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#FFB600] uppercase text-sm font-bold tracking-widest mb-3">
              OFERTY PRACOWY
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
              OFERTY<span className="font-light">PRACY</span>
            </h2>
            <div className="w-16 h-1 bg-[#FFB600] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={job.image} 
                    alt={job.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FFB600] text-white px-3 py-1 text-xs font-bold rounded">
                      {job.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#1a1a1a] text-white px-4 py-2 text-sm font-semibold rounded">
                      {job.city}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">{job.title}</h3>
                  
                  <ul className="space-y-2 mb-6 text-sm text-gray-600">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#FFB600] mr-2">▸</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                      CZAS NETTO
                    </div>
                    <div className="text-sm font-bold text-[#1a1a1a]">
                      {job.salary}
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 bg-gray-100 hover:bg-[#FFB600] hover:text-white text-gray-700 py-3 rounded font-semibold transition-all">
                    APLIKUJ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "👷", number: "8200", label: "PRACOWNIKÓW\nZATRUDNIONYCH W\n2023R" },
              { icon: "🤝", number: "270", label: "KLIENTÓW KTÓRZY\nNAM\nZAUFALI" },
              { icon: "📍", number: "73+", label: "MIAST W POLSCE" },
              { icon: "⏰", number: "11+", label: "LAT DOŚWIADCZENIA" }
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-[#FFB600] mb-2">{stat.number}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide whitespace-pre-line leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#FFB600] uppercase text-sm font-bold tracking-widest mb-3">
              AXILON GROUP
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
              OPINIE <span className="font-light">KLIENTÓW</span>
            </h2>
            <div className="w-16 h-1 bg-[#FFB600] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Pavell",
                role: "PRACOWNIK PRZEDSIĘBIA",
                text: "Агенція AXILON підібрала чоловіком працювати, яке оо у справді відповідає потібностям особи ставок завершально. Цілість сабість проведених роботів тот їхолів за лементо."
              },
              {
                name: "Sten",
                role: "PRACOWNIK PRZEDSIĘBIA",
                text: "Агенція AXILON має не тільки не відкрити сплати інтернув. Хотілом би також розглядати, в якиї робість організовую роботи відповідно."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-[#1a1a1a]">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#FFB600] p-3 rounded">
                  <div className="w-8 h-8 bg-[#1a1a1a] rounded-sm"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold">AXILON</div>
                  <div className="text-xs text-gray-400">-GROUP-</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Ogólnopolska firma budowlano-architektoniczna.<br/>
                Realizujemy oddzielni projekt on w kraju Polski.<br/>
                Profesjonalizm i terminowość to nasza karta.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">COMPANY INFO</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#FFB600]">START</a></li>
                <li><a href="#" className="hover:text-[#FFB600]">ABOUT</a></li>
                <li><a href="#" className="hover:text-[#FFB600]">PRACA</a></li>
                <li><a href="#" className="hover:text-[#FFB600]">CONTACT</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">NEWSLETTER</h3>
              <p className="text-gray-400 text-sm mb-4">
                Dolācz a otrzymujesz aktualne wiadomości oraz oferty pracy.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 bg-[#2a2a2a] text-white rounded-l focus:outline-none text-sm"
                />
                <button className="bg-[#FFB600] hover:bg-[#e6a800] px-6 py-2 rounded-r font-semibold transition">
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div>
              <p>© 2024 AXILON GROUP LLC.</p>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#FFB600]">TERMS</a>
              <a href="#" className="hover:text-[#FFB600]">PRIVACY</a>
              <a href="#" className="hover:text-[#FFB600]">COOKIES</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AxilonPixelPerfect;
