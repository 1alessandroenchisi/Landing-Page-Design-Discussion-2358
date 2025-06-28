import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FeedbackWorkflow } from '@questlabs/react-sdk';
import { questConfig } from '../config/questConfig';
import { getUserId } from '../utils/userUtils';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronLeft, FiChevronRight } = FiIcons;

const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleFeedback = () => {
    // Event tracking for analytics - check if gtag is available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'feedback_button_click', {
        event_category: 'engagement',
        event_label: 'floating_feedback_button'
      });
    }
    
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Floating Feedback Button */}
      <motion.button
        onClick={handleToggleFeedback}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        style={{ 
          background: `linear-gradient(135deg, ${questConfig.PRIMARY_COLOR}, #5EA7A7)`,
          boxShadow: `0 4px 20px rgba(87, 177, 177, 0.3)`
        }}
        className="fixed top-1/2 -translate-y-1/2 -right-10 rotate-[270deg] z-40 flex items-center gap-2 px-4 py-3 rounded-t-lg rounded-b-none text-white font-medium text-sm transition-all duration-300 hover:shadow-lg"
      >
        <div className={`w-fit h-fit rotate-90 transition-all duration-300 ${isOpen ? 'rotate-[270deg]' : 'rotate-90'}`}>
          <SafeIcon 
            icon={isOpen ? FiChevronRight : FiChevronLeft} 
            className="w-4 h-4" 
          />
        </div>
        <span className="font-['Montserrat'] font-semibold tracking-wide">
          Feedback
        </span>
      </motion.button>

      {/* Feedback Workflow Component */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 -translate-y-1/2 right-6 z-50 max-w-md w-full"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <FeedbackWorkflow
                uniqueUserId={getUserId()}
                questId={questConfig.QUEST_FEEDBACK_QUESTID}
                isOpen={isOpen}
                accent={questConfig.PRIMARY_COLOR}
                onClose={() => setIsOpen(false)}
                styleConfig={{
                  primaryColor: questConfig.PRIMARY_COLOR,
                  fontFamily: 'Montserrat, sans-serif',
                  borderRadius: '16px'
                }}
              >
                <FeedbackWorkflow.ThankYou />
              </FeedbackWorkflow>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop overlay when feedback is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FeedbackButton;