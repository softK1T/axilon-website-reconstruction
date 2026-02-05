import React from 'react';
import { MapPin, Banknote, Clock, ArrowRight } from 'lucide-react';

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      city: 'Warszawa',
      title: 'Pracownik Komunalny',
      salary: '7000 PLN netto',
      schedule: 'Pn-Pt 6:00-18:00',
      features: ['Zakwaterowanie', 'Wiek do 55 lat', 'Praca od zaraz'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      city: 'Gdańsk',
      title: 'Operator UDT',
      salary: '6900 PLN netto',
      schedule: 'System zmianowy',
      features: ['Uprawnienia UDT', 'Nadgodziny płatne', 'Doświadczenie mile widziane'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      city: 'Łódź',
      title: 'Pracownik Budowlany',
      salary: 'Od 7500 PLN netto',
      schedule: 'Pełny etat',
      features: ['Elektrycy', 'Hydraulicy', 'Tynkarze', 'Malarze'],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="jobs" className="py-24 lg:py-32 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#c9a962] text-[12px] tracking-[0.4em] uppercase mb-4">
            Aktualne oferty
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900">
            Oferty pracy
          </h2>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="group bg-white overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-[#c9a962] text-white px-4 py-2 text-[11px] tracking-wider uppercase">
                    {job.city}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-serif text-2xl text-gray-900 mb-6">
                  {job.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Banknote size={18} className="text-[#c9a962]" />
                    <span className="text-[14px]">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock size={18} className="text-[#c9a962]" />
                    <span className="text-[14px]">{job.schedule}</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6 mb-6">
                  <ul className="space-y-2">
                    {job.features.map((feature, index) => (
                      <li key={index} className="text-gray-500 text-[13px] flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#c9a962] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[12px] tracking-wider uppercase text-gray-900 hover:text-[#c9a962] transition-colors group/link"
                >
                  Aplikuj teraz
                  <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block border border-gray-900 text-gray-900 px-10 py-4 text-[13px] tracking-wider uppercase hover:bg-gray-900 hover:text-white transition-all duration-500"
          >
            Zobacz wszystkie oferty
          </a>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
