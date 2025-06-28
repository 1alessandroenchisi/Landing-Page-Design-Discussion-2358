import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GetStarted } from '@questlabs/react-sdk';
import { questConfig } from '../config/questConfig';
import { getUserId } from '../utils/userUtils';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiBookOpen } = FiIcons;

const GetStartedModal = ({ isOpen, onClose }) => {
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
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative"
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
            
            <div className="p-6">
              <GetStarted
                questId={questConfig.GET_STARTED_QUESTID}
                uniqueUserId={getUserId()}
                accent={questConfig.PRIMARY_COLOR}
                autoHide={false}
              >
                <GetStarted.Header />
                <GetStarted.Progress />
                <GetStarted.Content />
                <GetStarted.Footer />
              </GetStarted>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GetStartedModal;