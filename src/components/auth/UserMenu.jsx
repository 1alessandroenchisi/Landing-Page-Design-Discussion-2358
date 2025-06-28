import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUser, FiSettings, FiLogOut, FiChevronDown, FiShield, FiUsers, FiBarChart } = FiIcons;

const UserMenu = () => {
  const { user, logout, isRole } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-800';
      case 'agent':
        return 'bg-blue-100 text-blue-800';
      case 'client':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleLabel = (role) => {
    switch (role) {
      case 'admin':
        return 'Administrador';
      case 'agent':
        return 'Agente';
      case 'client':
        return 'Cliente';
      default:
        return 'Usuário';
    }
  };

  const menuItems = [
    ...(isRole('admin') ? [
      { icon: FiShield, label: 'Painel Admin', action: () => console.log('Admin Panel') }
    ] : []),
    ...(isRole('admin') || isRole('agent') ? [
      { icon: FiBarChart, label: 'Analytics', action: () => console.log('Analytics') },
      { icon: FiUsers, label: 'Clientes', action: () => console.log('Clients') }
    ] : []),
    { icon: FiUser, label: 'Meu Perfil', action: () => console.log('Profile') },
    { icon: FiSettings, label: 'Configurações', action: () => console.log('Settings') },
    { icon: FiLogOut, label: 'Sair', action: logout, danger: true }
  ];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20 hover:bg-white/20 transition-all duration-200"
      >
        <img
          src={user?.avatar}
          alt={user?.name}
          className="w-8 h-8 rounded-full object-cover border-2 border-white/30"
        />
        <div className="hidden sm:block text-left">
          <p className="text-white text-sm font-medium font-['Montserrat']">
            {user?.name}
          </p>
          <span className={`text-xs px-2 py-0.5 rounded-full font-['Montserrat'] ${getRoleColor(user?.role)}`}>
            {getRoleLabel(user?.role)}
          </span>
        </div>
        <SafeIcon 
          icon={FiChevronDown} 
          className={`w-4 h-4 text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50"
            >
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 font-['Montserrat']">
                      {user?.name}
                    </p>
                    <p className="text-sm text-gray-500 font-['Montserrat']">
                      {user?.email}
                    </p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-['Montserrat'] ${getRoleColor(user?.role)}`}>
                      {getRoleLabel(user?.role)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="py-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                    onClick={() => {
                      item.action();
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors duration-200 ${
                      item.danger ? 'text-red-600 hover:bg-red-50' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <SafeIcon icon={item.icon} className="w-5 h-5" />
                    <span className="font-['Montserrat']">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserMenu;