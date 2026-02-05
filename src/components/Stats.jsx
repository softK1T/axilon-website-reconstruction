import React from 'react';

const Stats = () => {
  const stats = [
    { value: '8200', label: 'Zatrudnionych pracowników', sublabel: 'w 2023 roku' },
    { value: '270', label: 'Firm', sublabel: 'nam zaufało' },
    { value: '73+', label: 'Miast', sublabel: 'w Polsce' },
    { value: '11+', label: 'Lat', sublabel: 'doświadczenia' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#c9a962] mb-4">
                {stat.value}
              </div>
              <div className="text-white text-[14px] tracking-wider uppercase">
                {stat.label}
              </div>
              <div className="text-white/50 text-[12px] tracking-wide mt-1">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
