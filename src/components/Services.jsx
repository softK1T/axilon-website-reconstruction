import React from 'react';
import { Users, Building2, FileCheck, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users size={40} />,
      title: 'Rekrutacja',
      description: 'Profesjonalny dobór pracowników dopasowanych do potrzeb Twojej firmy.',
    },
    {
      icon: <Building2 size={40} />,
      title: 'Praca Tymczasowa',
      description: 'Elastyczne rozwiązania kadrowe dla przedsiębiorstw każdej wielkości.',
    },
    {
      icon: <FileCheck size={40} />,
      title: 'Legalizacja',
      description: 'Kompleksowa obsługa dokumentacji i legalizacji zatrudnienia cudzoziemców.',
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Outsourcing',
      description: 'Przejmujemy procesy kadrowe, abyś mógł skupić się na rozwoju biznesu.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#4FBDC6] text-sm font-semibold uppercase tracking-widest mb-3">
            Nasze usługi
          </p>
          <h2 className="text-[#32373c] text-4xl md:text-5xl font-bold uppercase">
            Oferta
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group text-center p-8 border border-gray-100 hover:border-[#4FBDC6] hover:shadow-lg transition-all duration-300"
            >
              <div className="text-[#c9a962] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#32373c] mb-4 uppercase">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
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
