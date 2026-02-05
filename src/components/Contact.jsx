import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div>
            <p className="text-[#c9a962] text-[12px] tracking-[0.4em] uppercase mb-4">
              Kontakt
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
              Porozmawiajmy
              <br />
              <span className="italic">o współpracy</span>
            </h2>
            <p className="text-gray-600 font-light leading-relaxed mb-12">
              Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami, 
              a nasz zespół odpowie na wszystkie pytania dotyczące 
              ofert pracy lub współpracy biznesowej.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#f8f8f8] flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-[#c9a962]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">Telefon</h4>
                  <a href="tel:+48793698862" className="text-gray-600 hover:text-[#c9a962] transition-colors">
                    +48 793 698 862
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#f8f8f8] flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-[#c9a962]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">E-mail</h4>
                  <a href="mailto:biuro@axilon-praca.pl" className="text-gray-600 hover:text-[#c9a962] transition-colors">
                    biuro@axilon-praca.pl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#f8f8f8] flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#c9a962]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">Adres</h4>
                  <p className="text-gray-600">
                    ul. Aleja T. Kościuszki 71<br />
                    90-436 Łódź, Polska
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#f8f8f8] flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-[#c9a962]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">Godziny pracy</h4>
                  <p className="text-gray-600">
                    Poniedziałek - Piątek<br />
                    8:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-[#f8f8f8] p-10 lg:p-12">
            <h3 className="font-serif text-2xl text-gray-900 mb-8">
              Wyślij wiadomość
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[12px] tracking-wider uppercase text-gray-500 mb-3">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border-0 px-5 py-4 text-gray-900 focus:ring-2 focus:ring-[#c9a962] outline-none transition"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label className="block text-[12px] tracking-wider uppercase text-gray-500 mb-3">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-white border-0 px-5 py-4 text-gray-900 focus:ring-2 focus:ring-[#c9a962] outline-none transition"
                    placeholder="+48 000 000 000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[12px] tracking-wider uppercase text-gray-500 mb-3">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full bg-white border-0 px-5 py-4 text-gray-900 focus:ring-2 focus:ring-[#c9a962] outline-none transition"
                  placeholder="jan@example.com"
                />
              </div>
              <div>
                <label className="block text-[12px] tracking-wider uppercase text-gray-500 mb-3">
                  Wiadomość
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-white border-0 px-5 py-4 text-gray-900 focus:ring-2 focus:ring-[#c9a962] outline-none transition resize-none"
                  placeholder="Twoja wiadomość..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#c9a962] text-white py-4 text-[13px] tracking-wider uppercase hover:bg-[#b8944d] transition-colors duration-300"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
