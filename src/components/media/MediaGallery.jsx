import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPlay, FiX, FiChevronLeft, FiChevronRight, FiCalendar, FiCamera, FiVideo, FiDownload, FiShare2 } = FiIcons;

const MediaGallery = () => {
  const [activeCategory, setActiveCategory] = useState('todas');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'todas', name: 'Todas', icon: FiCamera },
    { id: 'preparacao', name: 'Preparação', icon: FiCalendar },
    { id: 'construcao', name: 'Construção', icon: FiVideo },
    { id: 'areas-comuns', name: 'Áreas Comuns', icon: FiCamera },
    { id: 'drone', name: 'Drone', icon: FiVideo }
  ];

  const mediaItems = [
    // Preparação do Terreno
    {
      id: 1,
      type: 'photo',
      category: 'preparacao',
      title: 'Limpeza do Terreno',
      description: 'Início dos trabalhos de preparação',
      date: '2024-01-15',
      url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      type: 'video',
      category: 'preparacao',
      title: 'Estudo do Terreno',
      description: 'Análise topográfica completa',
      date: '2024-01-20',
      url: 'https://player.vimeo.com/video/76979871',
      thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
      duration: '2:30'
    },
    // Construção
    {
      id: 3,
      type: 'photo',
      category: 'construcao',
      title: 'Fundações Concluídas',
      description: 'Base estrutural das primeiras casas',
      date: '2024-04-10',
      url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      type: 'video',
      category: 'construcao',
      title: 'Progresso da Obra - Abril',
      description: 'Acompanhamento mensal das construções',
      date: '2024-04-30',
      url: 'https://player.vimeo.com/video/76979871',
      thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop',
      duration: '3:45'
    },
    // Drone Views
    {
      id: 5,
      type: 'video',
      category: 'drone',
      title: 'Vista Aérea - Março 2024',
      description: 'Panorama completo do empreendimento',
      date: '2024-03-15',
      url: 'https://player.vimeo.com/video/76979871',
      thumbnail: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop',
      duration: '4:20'
    },
    {
      id: 6,
      type: 'photo',
      category: 'drone',
      title: 'Praia de Tourinhos',
      description: 'Vista aérea da praia exclusiva',
      date: '2024-03-20',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop'
    },
    // Áreas Comuns
    {
      id: 7,
      type: 'photo',
      category: 'areas-comuns',
      title: 'Beach Club em Construção',
      description: 'Estrutura do clube exclusivo',
      date: '2024-05-10',
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      type: 'photo',
      category: 'areas-comuns',
      title: 'Piscina Infinita',
      description: 'Construção da piscina com vista para o mar',
      date: '2024-05-15',
      url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop'
    }
  ];

  const filteredMedia = activeCategory === 'todas' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

  const openModal = (media) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
  };

  const navigateMedia = (direction) => {
    const currentIndex = filteredMedia.findIndex(item => item.id === selectedMedia.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredMedia.length
      : (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    setSelectedMedia(filteredMedia[newIndex]);
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-200 font-['Montserrat'] text-sm ${
              activeCategory === category.id
                ? 'bg-[#D9A47F] text-white shadow-lg'
                : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20'
            }`}
          >
            <SafeIcon icon={category.icon} className="w-4 h-4" />
            <span className="font-medium">{category.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="wait">
          {filteredMedia.map((media, index) => (
            <motion.div
              key={media.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(media)}
              className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video">
                <img
                  src={media.thumbnail}
                  alt={media.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Video Play Button */}
                {media.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <SafeIcon icon={FiPlay} className="w-8 h-8 text-[#57B1B1] ml-1" />
                    </div>
                  </div>
                )}

                {/* Duration Badge for Videos */}
                {media.type === 'video' && media.duration && (
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-['Montserrat']">
                    {media.duration}
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#D9A47F] font-['Montserrat'] font-medium">
                    {new Date(media.date).toLocaleDateString('pt-BR')}
                  </span>
                  <SafeIcon 
                    icon={media.type === 'video' ? FiVideo : FiCamera} 
                    className="w-4 h-4 text-white/70" 
                  />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1 font-['Montserrat'] line-clamp-1">
                  {media.title}
                </h3>
                <p className="text-white/70 text-xs font-['Montserrat'] line-clamp-2">
                  {media.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Media Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateMedia('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
              </button>

              <button
                onClick={() => navigateMedia('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
              </button>

              {/* Media Content */}
              <div className="relative">
                {selectedMedia.type === 'video' ? (
                  <div className="aspect-video">
                    <iframe
                      src={selectedMedia.url}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="w-full max-h-[70vh] object-contain bg-black"
                  />
                )}
              </div>

              {/* Media Info */}
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 font-['Montserrat'] mb-2">
                      {selectedMedia.title}
                    </h2>
                    <p className="text-gray-600 font-['Montserrat']">
                      {selectedMedia.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500 font-['Montserrat']">
                      {new Date(selectedMedia.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 bg-[#57B1B1] text-white px-4 py-2 rounded-lg hover:bg-[#5EA7A7] transition-colors duration-200 font-['Montserrat'] text-sm">
                    <SafeIcon icon={FiDownload} className="w-4 h-4" />
                    <span>Baixar</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-[#D9A47F] text-white px-4 py-2 rounded-lg hover:bg-[#E6B592] transition-colors duration-200 font-['Montserrat'] text-sm">
                    <SafeIcon icon={FiShare2} className="w-4 h-4" />
                    <span>Compartilhar</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaGallery;