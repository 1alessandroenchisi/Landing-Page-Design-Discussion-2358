import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiCamera, FiTool, FiBarChart3, FiMapPin, FiUsers } = FiIcons;

const Analytics = () => {
  const [activePhase, setActivePhase] = useState('preparacao');

  const phases = [
    { id: 'preparacao', name: 'Preparação', icon: FiTool, status: 'completed' },
    { id: 'construcao', name: 'Construção', icon: FiBarChart3, status: 'in-progress' },
    { id: 'areas-comuns', name: 'Áreas Comuns', icon: FiMapPin, status: 'upcoming' },
    { id: 'lancamento', name: 'Lançamento', icon: FiUsers, status: 'upcoming' }
  ];

  const timeline = {
    preparacao: {
      title: 'Preparação do Terreno',
      period: 'Janeiro - Março 2024',
      progress: 100,
      description: 'Limpeza do terreno, estudos ambientais e licenças aprovadas',
      milestones: [
        'Estudo de impacto ambiental concluído',
        'Licenças ambientais aprovadas',
        'Preparação e nivelamento do terreno',
        'Infraestrutura básica instalada'
      ]
    },
    construcao: {
      title: 'Construção Principal',
      period: 'Abril - Dezembro 2024',
      progress: 65,
      description: 'Construção das estruturas principais e infraestrutura',
      milestones: [
        'Fundações e estruturas concluídas',
        'Sistema viário em andamento',
        'Rede elétrica e hidráulica 70% concluída',
        'Paisagismo iniciado'
      ]
    },
    'areas-comuns': {
      title: 'Áreas Comuns',
      period: 'Janeiro - Junho 2025',
      progress: 0,
      description: 'Beach Club, piscinas e áreas de lazer',
      milestones: [
        'Beach Club de luxo',
        'Piscina de borda infinita',
        'Academia e spa',
        'Trilhas ecológicas'
      ]
    },
    lancamento: {
      title: 'Lançamento Comercial',
      period: 'Julho 2025',
      progress: 0,
      description: 'Entrega das primeiras unidades e inauguração oficial',
      milestones: [
        'Entrega das primeiras casas',
        'Inauguração do Beach Club',
        'Evento de lançamento',
        'Início das vendas finais'
      ]
    }
  };

  const currentPhase = timeline[activePhase];

  return (
    <section className="py-20 relative bg-[#5EA7A7]">
      
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1920 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="analyticsLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#D9A47F" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <path d="M0,150 Q480,100 960,150 T1920,150" stroke="url(#analyticsLineGradient)" strokeWidth="1" fill="none" />
          <path d="M0,350 Q600,300 1200,350 T1920,350" stroke="url(#analyticsLineGradient)" strokeWidth="1" fill="none" />
          <path d="M0,550 Q400,500 800,550 T1920,550" stroke="url(#analyticsLineGradient)" strokeWidth="1" fill="none" />
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
            Cronograma
            <span className="text-[#D9A47F] font-['Playfair_Display'] italic">
              {' '}da Obra{' '}
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-['Montserrat']">
            Do sonho à realização, acompanhe o progresso mês a mês por meio de fotos e vídeos.
          </p>
        </motion.div>

        {/* Phase Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {phases.map((phase) => (
            <motion.button
              key={phase.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePhase(phase.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-200 font-['Montserrat'] text-sm ${
                activePhase === phase.id
                  ? 'bg-[#D9A47F] text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <SafeIcon icon={phase.icon} className="w-5 h-5" />
              <span className="font-medium">{phase.name}</span>
              <div className={`w-3 h-3 rounded-full ${
                phase.status === 'completed' ? 'bg-green-400' :
                phase.status === 'in-progress' ? 'bg-yellow-400' :
                'bg-gray-400'
              }`} />
            </motion.button>
          ))}
        </motion.div>

        {/* Phase Details */}
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Progress Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D9A47F] to-[#E6B592] rounded-xl flex items-center justify-center">
                <SafeIcon icon={FiCalendar} className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white font-['Montserrat']">{currentPhase.title}</h3>
                <p className="text-white/70 text-sm font-['Montserrat']">{currentPhase.period}</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium font-['Montserrat']">Progresso</span>
                <span className="text-[#D9A47F] font-bold font-['Montserrat']">{currentPhase.progress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${currentPhase.progress}%` }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-3 bg-gradient-to-r from-[#D9A47F] to-[#E6B592] rounded-full"
                />
              </div>
            </div>

            <p className="text-white/90 font-['Montserrat'] leading-relaxed">
              {currentPhase.description}
            </p>
          </motion.div>

          {/* Milestones Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#57B1B1] to-[#5EA7A7] rounded-xl flex items-center justify-center">
                <SafeIcon icon={FiCamera} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white font-['Montserrat']">Marcos Principais</h3>
            </div>

            <div className="space-y-4">
              {currentPhase.milestones.map((milestone, index) => (
                <motion.div
                  key={milestone}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className={`w-2 h-2 rounded-full ${
                    activePhase === 'preparacao' ? 'bg-green-400' :
                    activePhase === 'construcao' && index < 2 ? 'bg-green-400' :
                    activePhase === 'construcao' && index === 2 ? 'bg-yellow-400' :
                    'bg-gray-400'
                  }`} />
                  <span className="text-white/90 font-['Montserrat'] text-sm">{milestone}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 font-['Montserrat']">Acompanhe o Progresso</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D9A47F] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 font-['Montserrat']"
              >
                📱 WhatsApp
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 font-['Montserrat']"
              >
                📸 Instagram @dunebeachville
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 font-['Montserrat']"
              >
                🎥 Vídeos e Fotos
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Analytics;