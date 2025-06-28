import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUpload, FiX, FiImage, FiVideo, FiCalendar, FiTag, FiCheck, FiLoader } = FiIcons;

const MediaUpload = ({ onClose, onUpload }) => {
  const { user, isRole } = useAuth();
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'construcao',
    date: new Date().toISOString().split('T')[0]
  });
  const fileInputRef = useRef(null);

  const categories = [
    { id: 'preparacao', name: 'Preparação' },
    { id: 'construcao', name: 'Construção' },
    { id: 'areas-comuns', name: 'Áreas Comuns' },
    { id: 'drone', name: 'Drone' }
  ];

  // Check if user has permission to upload
  if (!isRole('admin') && !isRole('agent')) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <SafeIcon icon={FiX} className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Montserrat']">
            Acesso Negado
          </h3>
          <p className="text-gray-600 font-['Montserrat']">
            Você não tem permissão para fazer upload de arquivos.
          </p>
        </div>
      </motion.div>
    );
  }

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
  };

  const handleFiles = (newFiles) => {
    const validFiles = newFiles.filter(file => {
      const isImage = file.type.startsWith('image/');
      const isVideo = file.type.startsWith('video/');
      const isValidSize = file.size <= 100 * 1024 * 1024; // 100MB limit
      
      return (isImage || isVideo) && isValidSize;
    });

    setFiles(prev => [...prev, ...validFiles.map(file => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      preview: URL.createObjectURL(file),
      type: file.type.startsWith('video/') ? 'video' : 'photo'
    }))]);
  };

  const removeFile = (id) => {
    setFiles(prev => {
      const fileToRemove = prev.find(f => f.id === id);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prev.filter(f => f.id !== id);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (files.length === 0) return;

    // Simulate upload process
    for (let fileData of files) {
      setUploadProgress(prev => ({ ...prev, [fileData.id]: 0 }));
      
      // Simulate progress
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setUploadProgress(prev => ({ ...prev, [fileData.id]: progress }));
      }
    }

    // Create media items
    const newMediaItems = files.map(fileData => ({
      id: Date.now() + Math.random(),
      type: fileData.type,
      category: formData.category,
      title: formData.title || fileData.file.name,
      description: formData.description,
      date: formData.date,
      url: fileData.preview, // In production, this would be the uploaded file URL
      thumbnail: fileData.preview,
      uploadedBy: user?.name,
      uploadedAt: new Date().toISOString()
    }));

    // Call the upload callback
    if (onUpload) {
      onUpload(newMediaItems);
    }

    // Reset form
    setFiles([]);
    setFormData({
      title: '',
      description: '',
      category: 'construcao',
      date: new Date().toISOString().split('T')[0]
    });
    setUploadProgress({});
    
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#57B1B1] to-[#D9A47F] rounded-xl flex items-center justify-center">
                <SafeIcon icon={FiUpload} className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 font-['Montserrat']">
                  Upload de Fotos/Vídeos
                </h2>
                <p className="text-sm text-gray-500 font-['Montserrat']">
                  Adicione mídia ao cronograma da obra
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <SafeIcon icon={FiX} className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload Area */}
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
                  dragActive
                    ? 'border-[#57B1B1] bg-[#57B1B1]/5'
                    : 'border-gray-300 hover:border-[#57B1B1]'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  onChange={handleFileInput}
                  className="hidden"
                />
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    <SafeIcon icon={FiUpload} className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 font-['Montserrat']">
                      Arraste arquivos aqui ou
                    </p>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-[#57B1B1] hover:text-[#5EA7A7] font-medium font-['Montserrat']"
                    >
                      clique para selecionar
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 font-['Montserrat']">
                    Suporta: JPG, PNG, MP4, MOV (máx. 100MB)
                  </p>
                </div>
              </div>

              {/* File Preview */}
              {files.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 font-['Montserrat']">
                    Arquivos Selecionados
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {files.map((fileData) => (
                      <div key={fileData.id} className="relative group">
                        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                          {fileData.type === 'video' ? (
                            <video
                              src={fileData.preview}
                              className="w-full h-full object-cover"
                              muted
                            />
                          ) : (
                            <img
                              src={fileData.preview}
                              alt="Preview"
                              className="w-full h-full object-cover"
                            />
                          )}
                          
                          {/* Remove Button */}
                          <button
                            type="button"
                            onClick={() => removeFile(fileData.id)}
                            className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          >
                            <SafeIcon icon={FiX} className="w-4 h-4" />
                          </button>

                          {/* Type Icon */}
                          <div className="absolute bottom-2 left-2">
                            <SafeIcon 
                              icon={fileData.type === 'video' ? FiVideo : FiImage} 
                              className="w-5 h-5 text-white drop-shadow-lg" 
                            />
                          </div>

                          {/* Upload Progress */}
                          {uploadProgress[fileData.id] !== undefined && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <div className="text-center">
                                <SafeIcon icon={FiLoader} className="w-6 h-6 text-white animate-spin mb-2" />
                                <span className="text-white text-sm font-['Montserrat']">
                                  {uploadProgress[fileData.id]}%
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-xs text-gray-500 mt-1 truncate font-['Montserrat']">
                          {fileData.file.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Montserrat']">
                    Título
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#57B1B1] focus:border-transparent font-['Montserrat']"
                    placeholder="Ex: Progresso da Construção"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Montserrat']">
                    Categoria
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#57B1B1] focus:border-transparent font-['Montserrat']"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-['Montserrat']">
                  Data
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#57B1B1] focus:border-transparent font-['Montserrat']"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-['Montserrat']">
                  Descrição
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#57B1B1] focus:border-transparent font-['Montserrat']"
                  placeholder="Descreva o que está sendo mostrado..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 font-['Montserrat']"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={files.length === 0}
                  className="bg-[#57B1B1] text-white px-6 py-2 rounded-lg hover:bg-[#5EA7A7] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-['Montserrat'] font-semibold"
                >
                  Fazer Upload
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MediaUpload;