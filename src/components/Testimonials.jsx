import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiHeart, FiGlobe, FiHome, FiBriefcase } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alessandro Enchisi',
      role: 'Agente Internacional RE/MAX',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'O Dune Beach & Ville representa o que há de mais exclusivo no mercado imobiliário nordestino. Localização única, projeto sustentável e potencial de valorização excepcional.',
      rating: 5,
      icon: FiBriefcase
    },
    {
      name: 'César Henrique Ciriaco',
      role: 'Arquiteto do Projeto',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'Projetar o Dune foi realizar um sonho: criar um espaço que respeita a natureza e oferece luxo sustentável. Cada detalhe foi pensado para harmonia total com o ambiente.',
      rating: 5,
      icon: FiHome
    },
    {
      name: 'Maria Fernandez',
      role: 'Investidora Internacional',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Como europeia, fiquei impressionada com a qualidade do projeto e as facilidades para investidores estrangeiros. O visto de residência foi um diferencial decisivo.',
      rating: 5,
      icon: FiGlobe
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative bg-[#5EA7A7]">
      
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1920 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="testimonialLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#D9A47F" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <path d="M0,150 Q480,200 960,150 T1920,150" stroke="url(#testimonialLineGradient)" strokeWidth="1" fill="none" />
          <path d="M0,350 Q480,400 960,350 T1920,350" stroke="url(#testimonialLineGradient)" strokeWidth="1" fill="none" />
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
            Especialistas
            <span className="text-[#D9A47F] font-['Playfair_Display'] italic">
              {' '}Recomendam{' '}
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-['Montserrat']">
            Profissionais renomados e investidores experientes avaliam o projeto Dune Beach & Ville.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full shadow-lg hover:shadow-xl relative">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <SafeIcon icon={testimonial.icon} className="w-8 h-8 text-[#D9A47F]" />
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-[#D9A47F] fill-current" />
                  ))}
                </div>
                
                <p className="text-white/90 leading-relaxed mb-6 text-lg font-['Montserrat']">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <div className="font-semibold text-white font-['Montserrat']">{testimonial.name}</div>
                    <div className="text-white/70 text-sm font-['Montserrat']">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;