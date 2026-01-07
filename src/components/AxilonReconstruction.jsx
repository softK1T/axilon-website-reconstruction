import React, { useState } from 'react';
import { MapPin, Phone, Mail, Menu, X, CheckCircle, Building2, HardHat, Clock } from 'lucide-react';

const AxilonReconstruction = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { number: "8200", label: "Трудоустроенных сотрудников (2023)" },
    { number: "270", label: "Довольных клиентов" },
    { number: "73+", label: "Городов в Польше" },
    { number: "11", label: "Лет опыта" }
  ];

  const jobs = [
    { title: "Электрик", cities: ["Варшава", "Лодзь"] },
    { title: "Сантехник", cities: ["Варшава", "Лодзь"] },
    { title: "Штукатур", cities: ["Варшава", "Лодзь"] },
    { title: "Маляр", cities: ["Варшава", "Лодзь"] },
    { title: "Кровельщик", cities: ["Варшава", "Лодзь"] },
    { title: "Плиточник", cities: ["Варшава", "Лодзь"] },
    { title: "Мастер по гипсокартону", cities: ["Варшава", "Лодзь"] },
    { title: "Бетонщик-арматурщик", cities: ["Варшава", "Лодзь"] },
    { title: "Резка и сверление бетона", cities: ["Варшава", "Лодзь"] },
    { title: "Специалист (алмазные инструменты)", cities: ["Варшава", "Лодзь"] },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="bg-blue-900 text-white p-2 rounded">
                  <Building2 size={24} />
                </div>
                <span className="text-2xl font-bold text-blue-900 tracking-tight">AXILON GROUP</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 font-medium">
              <a href="#" className="text-gray-600 hover:text-blue-900 transition">О нас</a>
              <a href="#jobs" className="text-gray-600 hover:text-blue-900 transition">Вакансии</a>
              <a href="#contact" className="px-5 py-2.5 bg-blue-900 text-white rounded hover:bg-blue-800 transition shadow-sm hover:shadow">Связаться</a>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-3 shadow-lg absolute w-full">
            <a href="#" className="block text-gray-600 py-2">О нас</a>
            <a href="#jobs" className="block text-gray-600 py-2">Вакансии</a>
            <a href="#contact" className="block text-blue-900 font-bold py-2">Связаться</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-50 py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Солидный и ответственный <br/><span className="text-blue-900">бизнес-партнер</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Ogólnopolska firma budowlano-architektoniczna. 
            Специализируемся на строительстве и архитектуре. 
            Ищем профессионалов для реализации проектов по всей Польше.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#jobs" className="px-8 py-4 bg-blue-900 text-white rounded-lg font-bold hover:bg-blue-800 transition shadow-lg flex items-center justify-center gap-2">
              <HardHat size={20} />
              Найти работу
            </a>
            <a href="#contact" className="px-8 py-4 bg-white border-2 border-blue-900 text-blue-900 rounded-lg font-bold hover:bg-blue-50 transition flex items-center justify-center gap-2">
              <Building2 size={20} />
              Для партнеров
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 rounded-lg hover:bg-slate-50 transition">
                <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-3">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-500 font-semibold uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Актуальные вакансии</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              У нас вы найдете вакансии действующие на сегодня. Города и должности, на которые мы ищем сотрудников.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition duration-300 border-t-4 border-blue-900 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition">{job.title}</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">HOT</span>
                </div>
                <div className="flex items-center text-gray-500 mb-6">
                  <MapPin size={18} className="mr-2 text-blue-600" />
                  <span className="font-medium">{job.cities.join(", ")}</span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="mr-2 text-green-500" />
                    <span>Официальное трудоустройство</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={16} className="mr-2 text-blue-500" />
                    <span>Полная занятость</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300">
                  Подать заявку
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white pt-16 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="text-blue-400" size={32} />
                <span className="text-2xl font-bold">AXILON GROUP</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Solidny i odpowiedzialny partner biznesowy. 
                Мы помогаем со всеми формальностями, связанными с трудоустройством.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-slate-700 pb-2 inline-block">Контакты</h3>
              <ul className="space-y-4">
                <li className="flex items-center group cursor-pointer">
                  <div className="bg-slate-800 p-2 rounded-full mr-3 group-hover:bg-blue-900 transition">
                    <Phone size={18} className="text-blue-400" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition">+48 123 456 789</span>
                </li>
                <li className="flex items-center group cursor-pointer">
                  <div className="bg-slate-800 p-2 rounded-full mr-3 group-hover:bg-blue-900 transition">
                    <Mail size={18} className="text-blue-400" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition">kontakt@axilon.pl</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-slate-700 pb-2 inline-block">Адрес</h3>
              <div className="flex items-start">
                <div className="bg-slate-800 p-2 rounded-full mr-3 mt-1">
                  <MapPin size={18} className="text-blue-400" />
                </div>
                <p className="text-slate-300">
                  ul. Przykładowa 1<br />
                  00-001 Warszawa<br />
                  Polska
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            &copy; 2024 Axilon Group. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AxilonReconstruction;
