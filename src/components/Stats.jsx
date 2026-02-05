import React from 'react';

const Stats = () => {
  const stats = [
    { value: '8200', label: 'Pracownikom zapewniliśmy', sublabel: 'zatrudnienie w 2023r' },
    { value: '270', label: 'Firm', sublabel: 'nam zaufało' },
    { value: '73+', label: 'Miast', sublabel: 'w Polsce' },
    { value: '11+', label: 'Lat', sublabel: 'doświadczenia' },
  ];

  return (
    <section className="py-20 bg-[#4FBDC6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-6xl font-black mb-2">{stat.value}</div>
              <div className="text-sm font-semibold uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-sm mt-1 opacity-90">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
