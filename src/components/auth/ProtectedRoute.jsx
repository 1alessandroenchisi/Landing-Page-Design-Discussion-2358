import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiLock, FiUser } = FiIcons;

const ProtectedRoute = ({ children, requiredRole, requiredPermission, fallback }) => {
  const { user, isRole, hasPermission } = useAuth();

  // Check if user is authenticated
  if (!user) {
    return fallback || (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center min-h-[400px] bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 m-4"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-[#57B1B1] to-[#D9A47F] rounded-2xl flex items-center justify-center mb-4">
          <SafeIcon icon={FiLock} className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 font-['Montserrat']">
          Acesso Restrito
        </h3>
        <p className="text-white/80 text-center max-w-md font-['Montserrat']">
          Você precisa estar logado para acessar esta área.
        </p>
        <button className="mt-6 bg-[#D9A47F] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 font-['Montserrat']">
          Fazer Login
        </button>
      </motion.div>
    );
  }

  // Check role requirement
  if (requiredRole && !isRole(requiredRole)) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center min-h-[400px] bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 m-4"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4">
          <SafeIcon icon={FiUser} className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 font-['Montserrat']">
          Permissão Negada
        </h3>
        <p className="text-white/80 text-center max-w-md font-['Montserrat']">
          Você não tem permissão para acessar esta área. Contate o administrador.
        </p>
      </motion.div>
    );
  }

  // Check permission requirement
  if (requiredPermission && !hasPermission(requiredPermission)) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center min-h-[400px] bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 m-4"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-4">
          <SafeIcon icon={FiLock} className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 font-['Montserrat']">
          Acesso Limitado
        </h3>
        <p className="text-white/80 text-center max-w-md font-['Montserrat']">
          Você não tem as permissões necessárias para esta funcionalidade.
        </p>
      </motion.div>
    );
  }

  return children;
};

export default ProtectedRoute;