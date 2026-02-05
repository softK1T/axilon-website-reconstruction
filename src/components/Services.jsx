import React from 'react';
import { Users, Building2, FileCheck, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users size={32} />,
      title: 'Rekrutacja',
      description: 'Profesjonalny dobór pracowników dopasowanych do potrzeb Twojej firmy.',
    },
    {
      icon: <Building2 size={32} />,
      title: 'Praca Tymczasowa',
      description: 'Elastyczne rozwiązania kadrowe dla przedsiębiorstw każdej wielkości.',
    },
    {
      icon: <FileCheck size={32} />,
      title: 'Legalizacja',
      description: 'Kompleksowa obsługa dokumentacji i legalizacji zatrudnienia cudzoziemców.',
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Outsourcing',
      description: 'Przejmujemy procesy kadrowe, abyś mógł skupić się na rozwoju biznesu.',
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#c9a962] text-[12px] tracking-[0.4em] uppercase mb-4">
            Nasze usługi
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900">
            Jak możemy Ci pomóc?
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-10 text-center hover:shadow-xl transition-all duration-500"
            >
              <div className="text-[#c9a962] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
