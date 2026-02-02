import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/554732321020"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg"
      aria-label="Conversar pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: '0 10px 30px rgba(37, 211, 102, 0.4)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ 
          rotate: [0, 10, -10, 10, 0],
        }}
        transition={{ 
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 text-white" fill="currentColor" />
      </motion.div>
      
      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ 
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;
