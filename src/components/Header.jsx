import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import GetStartedModal from './GetStartedModal';
import LoginModal from './auth/LoginModal';
import UserMenu from './auth/UserMenu';

const { FiMenu, FiX, FiArrowRight, FiBookOpen } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Projeto', href: '#features' },
    { name: 'Cronograma', href: '#about' },
    { name: 'Especialistas', href: '#testimonials' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
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
                <span className="text-xs text-[#D9A47F] font-['Playfair_Display'] italic">
                  Exclusividade e beleza
                </span>
              </div>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-white hover:text-[#D9A47F] transition-colors duration-200 font-['Montserrat'] text-sm font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowGetStarted(true)}
                className="text-white hover:text-[#D9A47F] transition-colors duration-200 flex items-center space-x-2 font-['Montserrat'] text-sm"
              >
                <SafeIcon icon={FiBookOpen} className="w-4 h-4" />
                <span>Catálogo</span>
              </motion.button>

              {user ? (
                <UserMenu />
              ) : (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowLogin(true)}
                    className="text-white hover:text-[#D9A47F] transition-colors duration-200 font-['Montserrat'] text-sm"
                  >
                    Entrar
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#D9A47F] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-200 font-['Montserrat'] text-sm font-semibold"
                  >
                    <span>Reservar</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </motion.button>
                </>
              )}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-[#2F2F2F] hover:text-[#57B1B1] transition-colors duration-200 font-['Montserrat'] text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => {
                    setShowGetStarted(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left text-[#2F2F2F] hover:text-[#57B1B1] transition-colors duration-200 flex items-center space-x-2 font-['Montserrat'] text-sm"
                >
                  <SafeIcon icon={FiBookOpen} className="w-4 h-4" />
                  <span>Catálogo</span>
                </button>
                {user ? (
                  <div className="pt-2">
                    <UserMenu />
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setShowLogin(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left text-[#2F2F2F] hover:text-[#57B1B1] transition-colors duration-200 font-['Montserrat'] text-sm"
                    >
                      Entrar
                    </button>
                    <button className="w-full bg-[#D9A47F] text-white px-4 py-2 rounded-lg font-['Montserrat'] text-sm font-semibold">
                      Reservar
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>

      <GetStartedModal
        isOpen={showGetStarted}
        onClose={() => setShowGetStarted(false)}
      />
      
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </>
  );
};

export default Header;