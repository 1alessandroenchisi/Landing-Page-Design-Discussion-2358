import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiX, FiUser, FiLock, FiEye, FiEyeOff, FiLoader } = FiIcons;

const LoginModal = ({ isOpen, onClose }) => {
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const demoUsers = [
    { email: 'admin@dunebeach.com', role: 'Administrador', password: 'demo123' },
    { email: 'agent@dunebeach.com', role: 'Agente', password: 'demo123' },
    { email: 'client@dunebeach.com', role: 'Cliente', password: 'demo123' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      onClose();
      setFormData({ email: '', password: '' });
    } else {
      setError(result.error);
    }
  };

  const handleDemoLogin = (email) => {
    setFormData({ email, password: 'demo123' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={onClose}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <SafeIcon icon={FiX} className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#57B1B1] to-[#D9A47F] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiUser} className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 font-['Montserrat']">
                  Área Restrita
                </h2>
                <p className="text-gray-600 mt-2 font-['Montserrat']">
                  Acesse sua conta para continuar
                </p>
              </div>

              {/* Demo Users */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 font-['Montserrat']">
                  Contas Demo:
                </h3>
                <div className="grid gap-2">
                  {demoUsers.map((user) => (
                    <button
                      key={user.email}
                      onClick={() => handleDemoLogin(user.email)}
                      className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900 font-['Montserrat']">
                            {user.role}
                          </p>
                          <p className="text-xs text-gray-500 font-['Montserrat']">
                            {user.email}
                          </p>
                        </div>
                        <span className="text-xs text-gray-400 font-['Montserrat']">
                          Clique para usar
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500 font-['Montserrat']">ou</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Montserrat']">
                    Email
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#57B1B1] focus:border-transparent font-['Montserrat']"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Montserrat']">
                    Senha
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#57B1B1] focus:border-transparent font-['Montserrat']"
                      placeholder="Digite sua senha"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <SafeIcon icon={showPassword ? FiEyeOff : FiEye} className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600 font-['Montserrat']">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#57B1B1] to-[#D9A47F] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-['Montserrat']"
                >
                  {isLoading ? (
                    <>
                      <SafeIcon icon={FiLoader} className="w-5 h-5 mr-2 animate-spin" />
                      Entrando...
                    </>
                  ) : (
                    'Entrar'
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-6 font-['Montserrat']">
                Senha para todas as contas demo: <strong>demo123</strong>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;