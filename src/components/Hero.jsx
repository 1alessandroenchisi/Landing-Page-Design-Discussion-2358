import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiPlay, FiMapPin } = FiIcons;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#5EA7A7]">
      
      {/* Decorative lines matching the design */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#D9A47F" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          
          {/* Horizontal flowing lines */}
          <motion.path
            d="M-100,200 Q300,150 600,200 T1200,200 Q1500,150 1920,200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
          />
          <motion.path
            d="M-100,350 Q400,300 800,350 T1600,350 Q1800,300 2020,350"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 3, delay: 1 }}
          />
          <motion.path
            d="M-100,500 Q250,450 500,500 T1000,500 Q1300,450 1920,500"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 3, delay: 1.5 }}
          />
          <motion.path
            d="M-100,650 Q450,600 900,650 T1800,650"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 3, delay: 2 }}
          />
          <motion.path
            d="M-100,800 Q350,750 700,800 T1400,800 Q1700,750 2020,800"
            stroke="url(#lineGradient)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, delay: 2.5 }}
          />

          {/* Diagonal accent lines */}
          <motion.path
            d="M0,0 L400,300 M600,100 L1000,400 M1200,50 L1600,350 M1400,200 L1800,500"
            stroke="rgba(217,164,127,0.3)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, delay: 1 }}
          />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-white/30 shadow-lg">
            <SafeIcon icon={FiMapPin} className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-['Montserrat'] font-medium">São Miguel do Gostoso, Rio Grande do Norte</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight font-['Montserrat']"
        >
          DUNE BEACH & VILLE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl text-[#D9A47F] mb-8 font-['Playfair_Display'] italic font-light"
        >
          Exclusividade e Beleza em Perfeita Harmonia
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-['Montserrat']"
        >
          Uma joia residencial situada na espetacular praia de Tourinhos. Este santuário exclusivo representa a união perfeita entre luxo sofisticado e beleza natural intocada, oferecendo uma experiência de vida incomparável onde tranquilidade, elegância e paisagens deslumbrantes se fundem em uma harmonia atemporal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(217,164,127,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D9A47F] text-white px-8 py-4 rounded-xl flex items-center space-x-3 text-lg font-semibold shadow-lg font-['Montserrat']"
          >
            <span>Explorar Lotes</span>
            <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl flex items-center space-x-3 text-lg font-semibold border border-white/30 hover:bg-white/30 transition-all duration-200 font-['Montserrat']"
          >
            <SafeIcon icon={FiPlay} className="w-5 h-5" />
            <span>Ver Projeto</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Lotes', value: '450-900m²' },
              { label: 'Beach Club', value: 'Exclusivo' },
              { label: 'Acesso', value: 'Praia Privada' },
              { label: 'Projeto', value: 'César Ciriaco' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white/20 backdrop-blur-md rounded-lg p-6 border border-white/30 shadow-sm"
              >
                <div className="text-xl md:text-2xl font-bold text-white mb-1 font-['Montserrat']">{stat.value}</div>
                <div className="text-sm text-white/80 font-['Montserrat']">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;