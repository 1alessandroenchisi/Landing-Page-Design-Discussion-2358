import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiMapPin, FiShield, FiLeaf, FiAward, FiTrendingUp } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiMapPin,
      title: 'Localização Privilegiada',
      description: 'Localizado na Estrada do Reduto, estendendo-se entre dunas douradas e mar cristalino com acesso privativo direto à praia.',
      gradient: 'from-[#57B1B1] to-[#5EA7A7]'
    },
    {
      icon: FiHome,
      title: 'Lotes Exclusivos',
      description: 'Lotes residenciais de 450 m² a 900 m² em dois bairros exclusivos, com projeto arquitetônico assinado por César Henrique Ciriaco.',
      gradient: 'from-[#D9A47F] to-[#E6B592]'
    },
    {
      icon: FiAward,
      title: 'Beach Club de Luxo',
      description: 'Piscina de borda infinita, lounge, área de lazer, academia, bar e clube exclusivo para moradores.',
      gradient: 'from-[#57B1B1] to-[#D9A47F]'
    },
    {
      icon: FiLeaf,
      title: 'Sustentabilidade',
      description: 'Materiais ecológicos, energia solar, captação de água da chuva, preservação das dunas e caminhos em madeira nobre.',
      gradient: 'from-[#D9A47F] to-[#57B1B1]'
    },
    {
      icon: FiShield,
      title: 'Segurança Total',
      description: 'Sistema de vigilância 24h, portaria, perímetro protegido e acesso controlado com gestão RE/MAX.',
      gradient: 'from-[#5EA7A7] to-[#D9A47F]'
    },
    {
      icon: FiTrendingUp,
      title: 'Investimento Premium',
      description: 'Condições facilitadas, visto de residência para estrangeiros e tributação imobiliária reduzida no Brasil.',
      gradient: 'from-[#D9A47F] to-[#5EA7A7]'
    }
  ];

  return (
    <section id="features" className="py-20 relative bg-[#5EA7A7]">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1920 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="featureLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#D9A47F" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <path d="M0,100 Q480,50 960,100 T1920,100" stroke="url(#featureLineGradient)" strokeWidth="1.5" fill="none" />
          <path d="M0,250 Q600,200 1200,250 T1920,250" stroke="url(#featureLineGradient)" strokeWidth="1" fill="none" />
          <path d="M0,400 Q400,350 800,400 T1920,400" stroke="url(#featureLineGradient)" strokeWidth="1" fill="none" />
          <path d="M0,550 Q700,500 1400,550 T1920,550" stroke="url(#featureLineGradient)" strokeWidth="0.8" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Montserrat']">
            Um Projeto
            <span className="text-[#D9A47F] font-['Playfair_Display'] italic">
              {' '}Arquitetônico{' '}
            </span>
            de Prestígio
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-['Montserrat']">
            Assinado pelo arquiteto César Henrique de Oliveira Ciriaco, comercializado pela RE/MAX Brasil com orientação do agente internacional Alessandro Enchisi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                <div className="mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <SafeIcon icon={feature.icon} className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-['Montserrat']">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed font-['Montserrat']">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4 font-['Montserrat']">Viver o Sonho em São Miguel do Gostoso</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-white">
                <h4 className="font-semibold mb-2 font-['Montserrat']">🏄‍♂️ Turismo e Lazer</h4>
                <p className="text-sm text-white/80 font-['Montserrat']">Condições ideais para kitesurf, windsurf e esportes aquáticos</p>
              </div>
              <div className="text-white">
                <h4 className="font-semibold mb-2 font-['Montserrat']">🎭 Cultura e Tradição</h4>
                <p className="text-sm text-white/80 font-['Montserrat']">Eventos folclóricos, música, danças e artesanato local</p>
              </div>
              <div className="text-white">
                <h4 className="font-semibold mb-2 font-['Montserrat']">🍽️ Gastronomia & Hospitalidade</h4>
                <p className="text-sm text-white/80 font-['Montserrat']">Restaurantes gourmet, bares ao pôr do sol e pousadas charmosas</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D9A47F] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 font-['Montserrat']"
            >
              Conhecer o Projeto
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;