import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      {/* CTA Banner */}
      <section className="py-16 bg-[#32373c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-white text-3xl font-bold mb-2">Szukasz pracy w Polsce?</h4>
              <p className="text-white/80 text-lg">Zadzwoń +48 793 698 862</p>
            </div>
            <a
              href="tel:+48793698862"
              className="bg-white text-[#32373c] px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-[#4FBDC6] hover:text-white transition"
            >
              Kontakt +48 793 698 862
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div>
              <p className="text-[#4FBDC6] text-sm font-semibold uppercase tracking-widest mb-4">
                Kontakt
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#32373c] mb-8 uppercase leading-tight">
                Skontaktuj się z nami
              </h2>
              <p className="text-gray-600 leading-relaxed mb-12">
                Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami, 
                a nasz zespół odpowie na wszystkie pytania dotyczące 
                ofert pracy lub współpracy biznesowej.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4FBDC6]/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#4FBDC6]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#32373c] mb-1">Telefon</h4>
                    <a href="tel:+48793698862" className="text-gray-600 hover:text-[#4FBDC6] transition">
                      +48 793 698 862
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4FBDC6]/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#4FBDC6]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#32373c] mb-1">E-mail</h4>
                    <a href="mailto:biuro@axilon-praca.pl" className="text-gray-600 hover:text-[#4FBDC6] transition">
                      biuro@axilon-praca.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4FBDC6]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#4FBDC6]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#32373c] mb-1">Adres</h4>
                    <p className="text-gray-600">
                      ul. Aleja T. Kościuszki 71<br />
                      90-436 Łódź, Polska
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4FBDC6]/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-[#4FBDC6]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#32373c] mb-1">Godziny pracy</h4>
                    <p className="text-gray-600">
                      Poniedziałek - Piątek<br />
                      8:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-gray-50 p-10">
              <h3 className="text-2xl font-bold text-[#32373c] mb-8 uppercase">
                Wyślij wiadomość
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase text-gray-500 mb-2 font-semibold tracking-wide">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-200 px-4 py-3 text-[#32373c] focus:outline-none focus:border-[#4FBDC6] transition"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-gray-500 mb-2 font-semibold tracking-wide">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-white border border-gray-200 px-4 py-3 text-[#32373c] focus:outline-none focus:border-[#4FBDC6] transition"
                      placeholder="+48 000 000 000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase text-gray-500 mb-2 font-semibold tracking-wide">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-[#32373c] focus:outline-none focus:border-[#4FBDC6] transition"
                    placeholder="jan@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-gray-500 mb-2 font-semibold tracking-wide">
                    Wiadomość
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-[#32373c] focus:outline-none focus:border-[#4FBDC6] transition resize-none"
                    placeholder="Twoja wiadomość..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4FBDC6] text-white py-4 text-sm font-semibold uppercase tracking-wide hover:bg-[#066aab] transition"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
