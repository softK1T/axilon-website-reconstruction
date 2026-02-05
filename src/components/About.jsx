import React from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Zespół Axilon"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Badge */}
            <div className="absolute -bottom-8 -left-8 bg-[#4FBDC6] text-white p-8 shadow-lg">
              <span className="text-5xl font-black">11+</span>
              <p className="text-sm uppercase tracking-wide mt-2">Lat doświadczenia</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[#4FBDC6] text-sm font-semibold uppercase tracking-widest mb-4">
              O nas
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#32373c] mb-8 uppercase leading-tight">
              Profesjonalizm i zaufanie
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                AXILON to agencja pracy tymczasowej z siedzibą w Łodzi, działająca 
                na polskim rynku od ponad 11 lat. Specjalizujemy się w rekrutacji 
                i zatrudnianiu pracowników z Europy Wschodniej.
              </p>
              <p>
                Naszą misją jest łączenie pracodawców z wykwalifikowanymi pracownikami, 
                zapewniając kompleksową obsługę kadrową i legalizację zatrudnienia. 
                Współpracujemy z ponad 270 firmami w całej Polsce.
              </p>
              <p>
                Gwarantujemy profesjonalne podejście, transparentność działań 
                oraz pełne wsparcie na każdym etapie współpracy.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-8 text-sm uppercase font-semibold text-[#066aab] hover:text-[#4FBDC6] transition group"
            >
              Skontaktuj się z nami
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
