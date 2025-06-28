import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiInstagram, FiPhone, FiCamera, FiMail, FiArrowUp } = FiIcons;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'O Projeto': ['Lotes Residenciais', 'Beach Club', 'Sustentabilidade', 'Arquitetura'],
    'Localização': ['Praia de Tourinhos', 'Estrada do Reduto', 'Como Chegar', 'Região'],
    'Investimento': ['Condições', 'Visto Residência', 'Tributação', 'Financiamento'],
    'Acompanhamento': ['Cronograma', 'Fotos', 'Vídeos', 'Atualizações']
  };

  const contacts = [
    { icon: FiPhone, href: '#', label: 'WhatsApp', color: 'text-green-400' },
    { icon: FiInstagram, href: '#', label: '@dunebeachville', color: 'text-pink-400' },
    { icon: FiCamera, href: '#', label: 'Google Photos', color: 'text-blue-400' },
    { icon: FiMail, href: '#', label: 'Email', color: 'text-orange-400' }
  ];

  return (
    <footer id="contact" className="relative pt-20 pb-8 bg-[#5EA7A7]">
      
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1920 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="footerLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#D9A47F" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <path d="M0,50 Q480,100 960,50 T1920,50" stroke="url(#footerLineGradient)" strokeWidth="1" fill="none" />
          <path d="M0,200 Q480,250 960,200 T1920,200" stroke="url(#footerLineGradient)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-4"
            >
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751118410692-logomarca%20dune.png" 
                alt="Dune Beach & Ville" 
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white font-['Montserrat'] tracking-wide">
                  DUNE BEACH & VILLE
                </span>
                <span className="text-sm text-[#D9A47F] font-['Playfair_Display'] italic">
                  Exclusividade e beleza
                </span>
              </div>
            </motion.div>
            <p className="text-white/80 mb-6 max-w-md font-['Montserrat']">
              Uma joia residencial na praia de Tourinhos. Projeto arquitetônico de César Henrique Ciriaco, 
              comercializado pela RE/MAX com orientação de Alessandro Enchisi.
            </p>
            <div className="flex space-x-4">
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center ${contact.color} hover:bg-white/20 border border-white/20 transition-all duration-200 shadow-sm`}
                  aria-label={contact.label}
                >
                  <SafeIcon icon={contact.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4 font-['Montserrat']">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-[#D9A47F] transition-colors duration-200 font-['Montserrat'] text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-white/80 text-sm font-['Montserrat']">
              © 2024 Dune Beach & Ville. Projeto por César Ciriaco.
            </p>
            <p className="text-white/60 text-xs font-['Montserrat']">
              Comercialização RE/MAX Brasil - Alessandro Enchisi
            </p>
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-[#D9A47F] rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-200"
            aria-label="Voltar ao topo"
          >
            <SafeIcon icon={FiArrowUp} className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;