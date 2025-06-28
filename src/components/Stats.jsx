import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    {
      number: '450-900m²',
      label: 'Lotes Residenciais',
      description: 'Em dois bairros exclusivos'
    },
    {
      number: 'Privativo',
      label: 'Acesso à Praia',
      description: 'Trilhas ecológicas integradas'
    },
    {
      number: '24h',
      label: 'Segurança',
      description: 'Vigilância e acesso controlado'
    },
    {
      number: '100%',
      label: 'Sustentável',
      description: 'Energia solar e materiais ecológicos'
    }
  ];

  return (
    <section className="py-20 relative bg-[#5EA7A7]">
      
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1920 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="statsLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#D9A47F" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <path d="M0,100 Q480,50 960,100 T1920,100" stroke="url(#statsLineGradient)" strokeWidth="1" fill="none" />
          <path d="M0,250 Q480,200 960,250 T1920,250" stroke="url(#statsLineGradient)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Montserrat']">
            Por que escolher
            <span className="text-[#D9A47F] font-['Playfair_Display'] italic">
              {' '}Dune Beach & Ville?{' '}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Montserrat']"
              >
                {stat.number}
              </motion.div>
              <div className="text-[#D9A47F] font-semibold mb-2 font-['Montserrat']">{stat.label}</div>
              <div className="text-white/80 text-sm font-['Montserrat']">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;