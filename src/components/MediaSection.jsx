import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import MediaGallery from './media/MediaGallery';
import MediaUpload from './media/MediaUpload';

const { FiCamera, FiPlus, FiVideo, FiImage, FiCalendar } = FiIcons;

const MediaSection = () => {
  const { isRole } = useAuth();
  const [showUpload, setShowUpload] = useState(false);
  const [uploadedMedia, setUploadedMedia] = useState([]);

  const handleUpload = (newMediaItems) => {
    setUploadedMedia(prev => [...prev, ...newMediaItems]);
  };

  const stats = [
    { label: 'Total de Fotos', value: '247', icon: FiImage, color: 'from-[#57B1B1] to-[#5EA7A7]' },
    { label: 'Vídeos', value: '18', icon: FiVideo, color: 'from-[#D9A47F] to-[#E6B592]' },
    { label: 'Última Atualização', value: 'Hoje', icon: FiCalendar, color: 'from-[#57B1B1] to-[#D9A47F]' }
  ];

  return (
    <section id="media" className="py-20 relative bg-[#5EA7A7]">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1920 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="mediaLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#D9A47F" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <path d="M0,150 Q480,100 960,150 T1920,150" stroke="url(#mediaLineGradient)" strokeWidth="1" fill="none" />
          <path d="M0,350 Q600,300 1200,350 T1920,350" stroke="url(#mediaLineGradient)" strokeWidth="1" fill="none" />
          <path d="M0,550 Q400,500 800,550 T1920,550" stroke="url(#mediaLineGradient)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Montserrat']">
            Galeria de 
            <span className="text-[#D9A47F] font-['Playfair_Display'] italic">
              {' '}Fotos & Vídeos{' '}
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-['Montserrat']">
            Acompanhe o progresso da obra através de fotos e vídeos atualizados semanalmente.
            Veja cada detalhe da construção do seu futuro lar.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <SafeIcon icon={stat.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-['Montserrat']">{stat.value}</h3>
              <p className="text-white/70 font-['Montserrat']">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Upload Button for Admin/Agent */}
        {(isRole('admin') || isRole('agent')) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowUpload(true)}
              className="bg-[#D9A47F] text-white px-8 py-4 rounded-xl flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-200 font-['Montserrat'] font-semibold"
            >
              <SafeIcon icon={FiPlus} className="w-5 h-5" />
              <span>Adicionar Fotos/Vídeos</span>
            </motion.button>
          </motion.div>
        )}

        {/* Media Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MediaGallery />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 font-['Montserrat']">
              Quer receber as atualizações?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 font-['Montserrat'] flex items-center space-x-2"
              >
                <span>📱</span>
                <span>WhatsApp</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E4405F] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 font-['Montserrat'] flex items-center space-x-2"
              >
                <span>📸</span>
                <span>Instagram</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#4285F4] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 font-['Montserrat'] flex items-center space-x-2"
              >
                <span>📧</span>
                <span>Email</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Upload Modal */}
      {showUpload && (
        <MediaUpload
          onClose={() => setShowUpload(false)}
          onUpload={handleUpload}
        />
      )}
    </section>
  );
};

export default MediaSection;