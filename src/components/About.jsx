import React from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Zespół Axilon"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[#c9a962] -z-10"></div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#1a1a1a] text-white p-8">
              <span className="font-serif text-5xl text-[#c9a962]">11+</span>
              <p className="text-[12px] tracking-wider uppercase mt-2">Lat doświadczenia</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[#c9a962] text-[12px] tracking-[0.4em] uppercase mb-4">
              O nas
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
              Profesjonalizm
              <br />
              <span className="italic">i zaufanie</span>
            </h2>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
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
              className="inline-flex items-center gap-3 mt-10 text-[13px] tracking-wider uppercase text-gray-900 hover:text-[#c9a962] transition-colors group"
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
