import React from 'react';
import { MapPin, Banknote, Clock, ArrowRight, Check } from 'lucide-react';

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      city: 'Warszawa',
      title: 'Poszukujemy pracowników',
      items: [
        { title: 'Pracownik na komunalne przedsiębiorstwo', salary: '6800 zł netto', note: 'Wiek do 55 lat' },
        { title: 'Operator UDT', salary: '6900 zł netto', note: '' },
        { title: 'Zapewnione zakwaterowanie', salary: '', note: '' },
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      city: 'Gdańsk',
      title: 'Oferty pracy',
      items: [
        { title: 'Pracownik produkcji', salary: 'Od 6500 zł netto', note: '' },
        { title: 'Magazynier', salary: 'Od 6200 zł netto', note: '' },
        { title: 'Obsługa maszyn', salary: 'Od 7000 zł netto', note: 'Doświadczenie wymagane' },
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      city: 'Łódź',
      title: 'Aktualne stanowiska',
      items: [
        { title: 'Pracownik budowlany', salary: 'Od 7500 zł netto', note: 'Różne specjalności' },
        { title: 'Elektryk', salary: 'Od 8000 zł netto', note: 'Uprawnienia SEP' },
        { title: 'Hydraulik', salary: 'Od 7800 zł netto', note: '' },
      ],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="jobs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#4FBDC6] text-sm font-semibold uppercase tracking-widest mb-3">
            Aktualne oferty
          </p>
          <h2 className="text-[#32373c] text-4xl md:text-5xl font-bold uppercase">
            Oferty pracy
          </h2>
        </div>

        {/* Job Cards */}
        <div className="space-y-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <img
                    src={job.image}
                    alt={job.city}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#4FBDC6] text-white px-4 py-2 text-xs font-bold uppercase rounded">
                    {job.city}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-[#32373c] mb-6 uppercase">
                    {job.title}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {job.items.map((item, index) => (
                      <li key={index} className="flex items-start text-[15px] text-gray-700">
                        <Check size={20} className="text-[#4FBDC6] mt-1 mr-3 flex-shrink-0" />
                        <span>
                          <strong>{item.title}</strong>
                          {item.salary && ` - ${item.salary}`}
                          {item.note && ` (${item.note})`}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="inline-block bg-[#4FBDC6] text-white px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-[#32373c] transition"
                  >
                    Zobacz więcej
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
