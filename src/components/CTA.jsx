import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiCheck, FiPhone, FiInstagram, FiCamera } = FiIcons;

const CTA = () => {
  const benefits = [
    'Condições facilitadas',
    'Visto de residência',
    'Tributação reduzida',
    'Gestão RE/MAX'
  ];

  const contacts = [
    {
      icon: FiPhone,
      label: 'WhatsApp',
      action: 'Falar com Especialista',
      gradient: 'from-[#25D366] to-[#128C7E]'
    },
    {
      icon: FiInstagram,
      label: '@dunebeachville',
      action: 'Seguir no Instagram',
      gradient: 'from-[#E4405F] to-[#C13584]'
    },
    {
      icon: FiCamera,
      label: 'Google Photos',
      action: 'Ver Fotos e Vídeos',
      gradient: 'from-[#4285F4] to-[#34A853]'
    }
  ];

  return (
    <section className="py-20 relative bg-[#5EA7A7]">
      
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1920 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="ctaLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#D9A47F" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <path d="M0,100 Q480,50 960,100 T1920,100" stroke="url(#ctaLineGradient)" strokeWidth="1" fill="none" />
          <path d="M0,250 Q480,200 960,250 T1920,250" stroke="url(#ctaLineGradient)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Montserrat']">
            Oportunidade de
            <span className="text-[#D9A47F] font-['Playfair_Display'] italic">
              {' '}Investimento{' '}
            </span>
            Premium
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto font-['Montserrat']">
            Lotes selecionados com condições facilitadas em um dos projetos mais exclusivos de São Miguel do Gostoso.
            Seu refúgio exclusivo entre natureza, design e bem-estar.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-2 text-white"
              >
                <SafeIcon icon={FiCheck} className="w-5 h-5 text-[#D9A47F]" />
                <span className="text-sm font-['Montserrat']">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contacts.map((contact, index) => (
              <motion.button
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${contact.gradient} text-white px-6 py-4 rounded-xl flex flex-col items-center space-y-2 shadow-lg hover:shadow-xl transition-all duration-200`}
              >
                <SafeIcon icon={contact.icon} className="w-6 h-6" />
                <span className="font-semibold text-sm font-['Montserrat']">{contact.label}</span>
                <span className="text-xs opacity-90 font-['Montserrat']">{contact.action}</span>
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(217,164,127,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D9A47F] text-white px-8 py-4 rounded-xl flex items-center space-x-3 text-lg font-semibold shadow-lg font-['Montserrat']"
            >
              <span>Reservar Lote</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-[#D9A47F] transition-colors duration-200 text-lg font-semibold underline font-['Montserrat']"
            >
              Agendar Visita
            </motion.button>
          </motion.div>

          <p className="text-white/70 text-sm mt-6 font-['Montserrat']">
            Dune Beach & Ville: seu refúgio exclusivo entre natureza, design e bem-estar
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;